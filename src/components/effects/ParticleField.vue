<template>
  <canvas ref="canvasRef" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null

const init = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let particles = []
  let mouseX = 0
  let mouseY = 0

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resize()
  window.addEventListener('resize', resize)

  // Create particles
  const particleCount = Math.min(80, Math.floor(window.innerWidth / 20))
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? '124, 58, 237' : Math.random() > 0.5 ? '6, 182, 212' : '37, 99, 235'
    })
  }

  const handleMouse = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }
  window.addEventListener('mousemove', handleMouse)

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((p, i) => {
      // Update position
      p.x += p.vx
      p.y += p.vy

      // Wrap around
      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width) p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0

      // Draw particle
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
      ctx.fill()

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          const opacity = (1 - dist / 150) * 0.08
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      // Mouse interaction
      const mdx = p.x - mouseX
      const mdy = p.y - mouseY
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
      if (mdist < 200) {
        const force = (1 - mdist / 200) * 0.02
        p.vx += mdx * force
        p.vy += mdy * force
      }

      // Damping
      p.vx *= 0.99
      p.vy *= 0.99
    })

    animationId = requestAnimationFrame(render)
  }

  render()
}

onMounted(init)

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
}
</style>
