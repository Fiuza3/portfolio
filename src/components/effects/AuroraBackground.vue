<template>
  <div ref="containerRef" class="terrain-container"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)
let scene, camera, renderer, terrain, analyserMesh
let animationId = null
let clock = new THREE.Clock()
let mouseX = 0
let mouseY = 0

const init = () => {
  const container = containerRef.value
  if (!container) return

  // Scene
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x04060b, 0.035)

  // Camera
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 8, 20)
  camera.lookAt(0, 0, 0)

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x04060b, 1)
  container.appendChild(renderer.domElement)

  // Create terrain
  createTerrain()

  // Ambient orbs
  createOrbs()

  // Grid floor (distant)
  createGrid()

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x0a0f1a, 0.5)
  scene.add(ambientLight)

  const pointLight1 = new THREE.PointLight(0x7c3aed, 2, 50)
  pointLight1.position.set(-10, 10, 5)
  scene.add(pointLight1)

  const pointLight2 = new THREE.PointLight(0x06b6d4, 1.5, 50)
  pointLight2.position.set(10, 8, -5)
  scene.add(pointLight2)

  const pointLight3 = new THREE.PointLight(0x2563eb, 1, 40)
  pointLight3.position.set(0, 5, 10)
  scene.add(pointLight3)

  // Events
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouse)

  // Start
  animate()
}

const createTerrain = () => {
  const segments = 128
  const size = 60
  const geometry = new THREE.PlaneGeometry(size, size, segments, segments)
  geometry.rotateX(-Math.PI / 2)

  // Custom shader material for the terrain
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color(0x7c3aed) }, // violet
      uColorB: { value: new THREE.Color(0x06b6d4) }, // cyan
      uColorC: { value: new THREE.Color(0x2563eb) }, // blue
      uMouse: { value: new THREE.Vector2(0, 0) },
      uFogColor: { value: new THREE.Color(0x04060b) },
      uFogDensity: { value: 0.035 }
    },
    vertexShader: `
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec3 vPosition;
      varying float vElevation;
      varying vec2 vUv;

      // Simplex noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
        m = m * m;
        m = m * m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vUv = uv;
        vec3 pos = position;

        // Multiple noise octaves for organic terrain
        float t = uTime * 0.15;
        float n1 = snoise(pos.xz * 0.08 + t) * 3.0;
        float n2 = snoise(pos.xz * 0.15 + t * 1.3) * 1.5;
        float n3 = snoise(pos.xz * 0.3 + t * 0.8) * 0.5;

        // Mouse influence
        float mouseDist = length(pos.xz - uMouse * 10.0);
        float mouseInfluence = smoothstep(8.0, 0.0, mouseDist) * 1.5;

        float elevation = n1 + n2 + n3 + mouseInfluence;

        // Fade edges
        float edgeFade = smoothstep(30.0, 15.0, length(pos.xz));
        elevation *= edgeFade;

        pos.y += elevation;

        vPosition = pos;
        vElevation = elevation;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorC;
      uniform float uTime;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      varying vec3 vPosition;
      varying float vElevation;
      varying vec2 vUv;

      void main() {
        // Color based on elevation
        float normalizedElev = (vElevation + 3.0) / 8.0;
        vec3 color = mix(uColorC, uColorA, smoothstep(0.0, 0.5, normalizedElev));
        color = mix(color, uColorB, smoothstep(0.4, 1.0, normalizedElev));

        // Wireframe-like grid effect
        vec2 grid = abs(fract(vPosition.xz * 0.5) - 0.5);
        float line = min(grid.x, grid.y);
        float gridLine = 1.0 - smoothstep(0.0, 0.03, line);

        // Mix wireframe with surface
        vec3 surfaceColor = color * 0.15;
        vec3 wireColor = color * (0.6 + 0.4 * normalizedElev);
        vec3 finalColor = mix(surfaceColor, wireColor, gridLine * 0.8);

        // Add glow at peaks
        float peakGlow = smoothstep(0.5, 1.0, normalizedElev) * 0.3;
        finalColor += uColorB * peakGlow;

        // Fog
        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * depth * depth);
        finalColor = mix(finalColor, uFogColor, fogFactor);

        // Opacity fade at edges
        float alpha = smoothstep(30.0, 12.0, length(vPosition.xz));

        gl_FragColor = vec4(finalColor, alpha * 0.9);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false
  })

  terrain = new THREE.Mesh(geometry, material)
  terrain.position.y = -4
  scene.add(terrain)
}

const createOrbs = () => {
  const orbGeometry = new THREE.SphereGeometry(0.3, 16, 16)

  const orbs = [
    { pos: [-8, 3, -5], color: 0x7c3aed },
    { pos: [10, 5, -8], color: 0x06b6d4 },
    { pos: [-3, 6, -12], color: 0x2563eb },
    { pos: [6, 2, -3], color: 0x9333ea },
    { pos: [-12, 4, -10], color: 0x06b6d4 },
  ]

  orbs.forEach((orb, i) => {
    const material = new THREE.MeshBasicMaterial({
      color: orb.color,
      transparent: true,
      opacity: 0.4,
    })
    const mesh = new THREE.Mesh(orbGeometry, material)
    mesh.position.set(...orb.pos)
    mesh.userData = { baseY: orb.pos[1], speed: 0.3 + Math.random() * 0.5, offset: i * 1.5 }
    scene.add(mesh)

    // Add glow sprite
    const spriteMaterial = new THREE.SpriteMaterial({
      color: orb.color,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    })
    const sprite = new THREE.Sprite(spriteMaterial)
    sprite.scale.set(4, 4, 1)
    sprite.position.set(...orb.pos)
    sprite.userData = mesh.userData
    scene.add(sprite)
  })
}

const createGrid = () => {
  // Subtle ground grid
  const gridHelper = new THREE.GridHelper(80, 80, 0x1a1a3e, 0x0a0a2e)
  gridHelper.position.y = -4.1
  gridHelper.material.transparent = true
  gridHelper.material.opacity = 0.15
  scene.add(gridHelper)
}

const handleResize = () => {
  if (!camera || !renderer) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const handleMouse = (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  const elapsed = clock.getElapsedTime()

  // Update terrain
  if (terrain) {
    terrain.material.uniforms.uTime.value = elapsed
    terrain.material.uniforms.uMouse.value.set(mouseX, mouseY)
  }

  // Float orbs
  scene.children.forEach(child => {
    if (child.userData && child.userData.baseY !== undefined) {
      child.position.y = child.userData.baseY + Math.sin(elapsed * child.userData.speed + child.userData.offset) * 1.5
    }
  })

  // Gentle camera movement
  camera.position.x += (mouseX * 2 - camera.position.x) * 0.01
  camera.position.y += (8 + mouseY * 1.5 - camera.position.y) * 0.01
  camera.lookAt(0, 0, -5)

  renderer.render(scene, camera)
}

onMounted(init)

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
    if (containerRef.value && renderer.domElement.parentNode) {
      containerRef.value.removeChild(renderer.domElement)
    }
  }
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouse)
})
</script>

<style scoped>
.terrain-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.terrain-container :deep(canvas) {
  display: block;
}
</style>
