# Portfolio V2 - Marcus Fiuza

<div align="center">

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](#português)
[![en](https://img.shields.io/badge/lang-en-red.svg)](#english)

</div>

---

## Português

Um portfólio moderno e minimalista construído com Vue 3, Vuetify e tecnologias web de ponta.

### 🎨 Filosofia de Design

**Paleta de Cores:**
- Void Black (#0B0F14) - Fundo principal
- Neon Cyan (#3DF2E0) - Destaque e acentos
- Gradientes escuros para profundidade e sofisticação

**Minimalista com Propósito:**
- Design limpo e focado
- Animações sutis que melhoram a UX
- Easter eggs escondidos para visitantes curiosos

### 🏗️ Arquitetura

#### Por que Esta Estrutura?

```
src/
├── components/          # Componentes UI reutilizáveis
│   ├── layout/         # Estrutura do app (Header, Footer)
│   ├── sections/       # Seções da página (Hero, About, etc.)
│   └── ui/             # Elementos UI compartilhados
├── composables/        # Lógica reutilizável (Composition API)
├── stores/             # Gerenciamento de estado global (Pinia)
├── locales/            # Traduções i18n
├── utils/              # Funções auxiliares e constantes
└── views/              # Componentes de página
```

#### Decisões Arquiteturais Principais

**1. Composables ao invés de Mixins**
- Melhor suporte TypeScript
- Dependências explícitas
- Mais fácil de testar e manter

**2. Pinia para Gerenciamento de Estado**
- Leve e intuitivo
- Construído para Vue 3
- Excelente integração com DevTools

**3. Intersection Observer para Animações**
- Animações de scroll otimizadas para performance
- API nativa do navegador
- Sem bibliotecas pesadas de animação

**4. SCSS com Design Tokens**
- Tematização consistente
- Fácil de manter
- Sistema de design escalável

**5. i18n com Implementação Customizada**
- Solução leve
- Controle total sobre traduções
- Persistência com localStorage

### 🚀 Funcionalidades

- ✅ Design totalmente responsivo
- ✅ Suporte multi-idioma (EN/PT)
- ✅ Animações de scroll suaves
- ✅ Otimizado para tema escuro
- ✅ SEO friendly
- ✅ Performance otimizada
- ✅ Easter eggs escondidos
- ✅ Acessível (compatível com WCAG)

### 🎮 Easter Eggs

1. **Código Konami**: Tente o clássico ↑↑↓↓←→←→BA
2. **Modo Desenvolvedor**: Pressione Ctrl+Shift+K
3. **Segredo do Footer**: Clique na dica de easter egg 3 vezes
4. **Efeito Glitch**: Passe o mouse sobre o nome no hero

### 🛠️ Stack Tecnológica

- **Framework**: Vue 3 (Composition API)
- **Biblioteca UI**: Vuetify 3
- **Gerenciamento de Estado**: Pinia
- **Roteamento**: Vue Router
- **Estilização**: SCSS
- **Ferramenta de Build**: Vite
- **Ícones**: Material Design Icons

### 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

### 🎯 Otimizações de Performance

1. **Lazy Loading**: Componentes carregados sob demanda
2. **Intersection Observer**: Animações acionadas apenas quando visíveis
3. **Code Splitting**: Divisão automática baseada em rotas
4. **Otimização de Assets**: Otimizações integradas do Vite
5. **Tree Shaking**: Código não utilizado eliminado

### 🌐 Suporte de Navegadores

- Chrome (última versão)
- Firefox (última versão)
- Safari (última versão)
- Edge (última versão)

### 📝 Padrões de Código

- **Todo código em inglês**: Variáveis, funções, comentários
- **Nomenclatura de componentes**: PascalCase para componentes
- **Nomenclatura de arquivos**: PascalCase para arquivos Vue, camelCase para JS
- **SCSS**: Convenção de nomenclatura inspirada em BEM
- **Commits**: Formato de commits convencionais

### 🎨 Por que Estas Cores?

**Void Black (#0B0F14)**
- Representa a profundidade do espaço e tecnologia
- Reduz fadiga ocular em ambientes escuros
- Estética profissional e moderna

**Neon Cyan (#3DF2E0)**
- Alto contraste para acessibilidade
- Futurista e voltado para tecnologia
- Chama atenção para elementos importantes
- Representa inovação e criatividade

### 🏆 Melhores Práticas Implementadas

1. **Separação de Responsabilidades**: Lógica separada da apresentação
2. **Princípio DRY**: Composables e componentes reutilizáveis
3. **Acessibilidade**: HTML semântico, labels ARIA, navegação por teclado
4. **Performance**: Animações otimizadas, lazy loading
5. **Manutenibilidade**: Estrutura clara, código documentado
6. **Escalabilidade**: Fácil adicionar novas seções e funcionalidades

### 📱 Breakpoints Responsivos

- **xs**: < 600px (Mobile)
- **sm**: 600px - 960px (Tablet)
- **md**: 960px - 1264px (Laptop)
- **lg**: > 1264px (Desktop)

### 🔮 Melhorias Futuras

- [ ] Seção de blog com suporte MDX
- [ ] Estudos de caso de projetos com detalhamentos
- [ ] Playground de código interativo
- [ ] Dashboard de métricas de performance
- [ ] Toggle de tema Dark/Light
- [ ] Mais easter eggs!

### 👨💻 Autor

**Marcus Fiuza**
- Desenvolvedor Full-Stack
- Especializado em Vue.js & Node.js
- 3+ anos de experiência

### 📄 Licença

Este projeto é privado e proprietário.

---

**Construído com ❤️ usando Vue 3 + Vuetify**

*"Código é poesia escrita em lógica"*

---

## English

A modern, minimalist portfolio built with Vue 3, Vuetify, and cutting-edge web technologies.

### 🎨 Design Philosophy

**Color Palette:**
- Void Black (#0B0F14) - Primary background
- Neon Cyan (#3DF2E0) - Accent and highlights
- Dark gradients for depth and sophistication

**Minimalist with Purpose:**
- Clean, focused design
- Subtle animations that enhance UX
- Hidden easter eggs for curious visitors

### 🏗️ Architecture

#### Why This Structure?

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # App structure (Header, Footer)
│   ├── sections/       # Page sections (Hero, About, etc.)
│   └── ui/             # Shared UI elements
├── composables/        # Reusable logic (Composition API)
├── stores/             # Global state management (Pinia)
├── locales/            # i18n translations
├── utils/              # Helper functions and constants
└── views/              # Page components
```

#### Key Architectural Decisions

**1. Composables over Mixins**
- Better TypeScript support
- Explicit dependencies
- Easier to test and maintain

**2. Pinia for State Management**
- Lightweight and intuitive
- Built for Vue 3
- Excellent DevTools integration

**3. Intersection Observer for Animations**
- Performance-optimized scroll animations
- Native browser API
- No heavy animation libraries

**4. SCSS with Design Tokens**
- Consistent theming
- Easy to maintain
- Scalable design system

**5. i18n with Custom Implementation**
- Lightweight solution
- Full control over translations
- localStorage persistence

### 🚀 Features

- ✅ Fully responsive design
- ✅ Multi-language support (EN/PT)
- ✅ Smooth scroll animations
- ✅ Dark theme optimized
- ✅ SEO friendly
- ✅ Performance optimized
- ✅ Easter eggs hidden throughout
- ✅ Accessible (WCAG compliant)

### 🎮 Easter Eggs

1. **Konami Code**: Try the classic ↑↑↓↓←→←→BA
2. **Developer Mode**: Press Ctrl+Shift+K
3. **Footer Secret**: Click the easter egg hint 3 times
4. **Glitch Effect**: Hover over the hero name

### 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **UI Library**: Vuetify 3
- **State Management**: Pinia
- **Routing**: Vue Router
- **Styling**: SCSS
- **Build Tool**: Vite
- **Icons**: Material Design Icons

### 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🎯 Performance Optimizations

1. **Lazy Loading**: Components loaded on-demand
2. **Intersection Observer**: Animations triggered only when visible
3. **Code Splitting**: Automatic route-based splitting
4. **Asset Optimization**: Vite's built-in optimizations
5. **Tree Shaking**: Unused code eliminated

### 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 📝 Code Standards

- **All code in English**: Variables, functions, comments
- **Component naming**: PascalCase for components
- **File naming**: PascalCase for Vue files, camelCase for JS
- **SCSS**: BEM-inspired naming convention
- **Commits**: Conventional commits format

### 🎨 Why These Colors?

**Void Black (#0B0F14)**
- Represents the depth of space and technology
- Reduces eye strain in dark environments
- Professional and modern aesthetic

**Neon Cyan (#3DF2E0)**
- High contrast for accessibility
- Futuristic and tech-forward
- Draws attention to important elements
- Represents innovation and creativity

### 🏆 Best Practices Implemented

1. **Separation of Concerns**: Logic separated from presentation
2. **DRY Principle**: Reusable composables and components
3. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
4. **Performance**: Optimized animations, lazy loading
5. **Maintainability**: Clear structure, documented code
6. **Scalability**: Easy to add new sections and features

### 📱 Responsive Breakpoints

- **xs**: < 600px (Mobile)
- **sm**: 600px - 960px (Tablet)
- **md**: 960px - 1264px (Laptop)
- **lg**: > 1264px (Desktop)

### 🔮 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Project case studies with detailed breakdowns
- [ ] Interactive code playground
- [ ] Performance metrics dashboard
- [ ] Dark/Light theme toggle
- [ ] More easter eggs!

### 👨💻 Author

**Marcus Fiuza**
- Full-Stack Developer
- Specialized in Vue.js & Node.js
- 3+ years of experience

### 📄 License

This project is private and proprietary.

---

**Built with ❤️ using Vue 3 + Vuetify**

*"Code is poetry written in logic"*
