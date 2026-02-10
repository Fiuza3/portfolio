# Portfolio V2 - Marcus Fiuza

A modern, minimalist portfolio built with Vue 3, Vuetify, and cutting-edge web technologies.

## 🎨 Design Philosophy

**Color Palette:**
- Void Black (#0B0F14) - Primary background
- Neon Cyan (#3DF2E0) - Accent and highlights
- Dark gradients for depth and sophistication

**Minimalist with Purpose:**
- Clean, focused design
- Subtle animations that enhance UX
- Hidden easter eggs for curious visitors

## 🏗️ Architecture

### Why This Structure?

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

### Key Architectural Decisions

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

## 🚀 Features

- ✅ Fully responsive design
- ✅ Multi-language support (EN/PT)
- ✅ Smooth scroll animations
- ✅ Dark theme optimized
- ✅ SEO friendly
- ✅ Performance optimized
- ✅ Easter eggs hidden throughout
- ✅ Accessible (WCAG compliant)

## 🎮 Easter Eggs

1. **Konami Code**: Try the classic ↑↑↓↓←→←→BA
2. **Developer Mode**: Press Ctrl+Shift+K
3. **Footer Secret**: Click the easter egg hint 3 times
4. **Glitch Effect**: Hover over the hero name

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **UI Library**: Vuetify 3
- **State Management**: Pinia
- **Routing**: Vue Router
- **Styling**: SCSS
- **Build Tool**: Vite
- **Icons**: Material Design Icons

## 📦 Installation

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

## 🎯 Performance Optimizations

1. **Lazy Loading**: Components loaded on-demand
2. **Intersection Observer**: Animations triggered only when visible
3. **Code Splitting**: Automatic route-based splitting
4. **Asset Optimization**: Vite's built-in optimizations
5. **Tree Shaking**: Unused code eliminated

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Code Standards

- **All code in English**: Variables, functions, comments
- **Component naming**: PascalCase for components
- **File naming**: PascalCase for Vue files, camelCase for JS
- **SCSS**: BEM-inspired naming convention
- **Commits**: Conventional commits format

## 🎨 Why These Colors?

**Void Black (#0B0F14)**
- Represents the depth of space and technology
- Reduces eye strain in dark environments
- Professional and modern aesthetic

**Neon Cyan (#3DF2E0)**
- High contrast for accessibility
- Futuristic and tech-forward
- Draws attention to important elements
- Represents innovation and creativity

## 🏆 Best Practices Implemented

1. **Separation of Concerns**: Logic separated from presentation
2. **DRY Principle**: Reusable composables and components
3. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
4. **Performance**: Optimized animations, lazy loading
5. **Maintainability**: Clear structure, documented code
6. **Scalability**: Easy to add new sections and features

## 📱 Responsive Breakpoints

- **xs**: < 600px (Mobile)
- **sm**: 600px - 960px (Tablet)
- **md**: 960px - 1264px (Laptop)
- **lg**: > 1264px (Desktop)

## 🔮 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Project case studies with detailed breakdowns
- [ ] Interactive code playground
- [ ] Performance metrics dashboard
- [ ] Dark/Light theme toggle
- [ ] More easter eggs!

## 👨‍💻 Author

**Marcus Fiuza**
- Full-Stack Developer
- Specialized in Vue.js & Node.js
- 3+ years of experience

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using Vue 3 + Vuetify**

*"Code is poetry written in logic"*
