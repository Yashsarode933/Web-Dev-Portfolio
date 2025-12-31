# WebPortfolio - Yash Sarode

A modern, responsive portfolio website built with React, Vite, and Three.js, featuring a 3D Earth globe, smooth animations, and a sleek dark theme design.

## 🌟 Features

### 🌍 Interactive 3D Earth Globe
- Realistic Earth with rotating clouds using React Three Fiber
- Mouse-controlled rotation and zoom
- Atmospheric glow effects
- High-quality Earth textures and topography

### 🎨 Modern UI/UX Design
- Dark theme with glassmorphism effects
- Smooth scroll animations with Framer Motion
- Responsive design for all devices
- Custom particle effects and gradients
- Professional typography with Inter and Space Grotesk fonts

### 📱 Fully Responsive
- Mobile-first approach
- Adaptive layouts for tablets and desktops
- Touch-friendly interactions
- Optimized performance across devices

### 🚀 Performance Optimized
- Lazy loading for images and components
- Code splitting with React.lazy
- Optimized bundle size
- Smooth 60fps animations

### 📧 Functional Contact Form
- EmailJS integration for contact messages
- Form validation and error handling
- Real-time status feedback
- Social media integration

### 🎯 Project Showcase
- Dynamic project cards with filtering
- "View All" functionality for expanded viewing
- GitHub and demo links integration
- Code snippets and tech stack display

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - Modern React with latest features
- **Vite 7.2.4** - Fast build tool and dev server
- **React Router DOM 7.11.0** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **Framer Motion 12.23.26** - Animation library
- **Lucide React 0.562.0** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

### 3D Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber 9.4.2** - React renderer for Three.js
- **React Three Drei 10.7.7** - Helper components for React Three Fiber
- **Three Globe 2.45.0** - 3D globe components

### Additional Libraries
- **EmailJS Browser 4.4.1** - Email service integration
- **React Typed 2.0.12** - Animated typing effect
- **React PDF Renderer 4.3.1** - PDF generation
- **CLSX 2.1.1** - Utility for constructing className strings

### Development Tools
- **ESLint 9.39.1** - Code linting and formatting
- **TypeScript Support** - Type checking (optional)
- **Hot Module Replacement** - Fast development experience

## 📁 Project Structure

```
WebPortfolio/
├── public/
│   ├── index.html          # Main HTML file
│   └── resume.pdf          # Resume download
├── src/
│   ├── components/
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact form with EmailJS
│   │   ├── Experience.jsx  # Work experience timeline
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Hero.jsx        # Hero section with 3D globe
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Projects.jsx    # Projects showcase
│   │   └── Skills.jsx      # Skills section
│   ├── hooks/
│   │   ├── ThemeProvider.jsx # Theme context provider
│   │   ├── useScrollAnimation.js # Scroll animation hook
│   │   └── useTheme.js     # Theme hook
│   ├── utils/
│   │   └── particles.js    # Particle generation utilities
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   ├── index.css           # Global styles
│   └── App.css             # App-specific styles
├── .env.local              # Environment variables
├── eslint.config.js        # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yashsarode933/WebPortfolio.git
   cd WebPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   touch .env.local
   
   # Add your EmailJS credentials
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration:
- Custom color palette (primary, secondary, midnight)
- Extended font families (Space Grotesk, JetBrains Mono)
- Custom gradients and shadows
- Glass morphism effects

### EmailJS Setup
1. Create an EmailJS account
2. Set up email service and template
3. Add credentials to `.env.local`
4. Update contact form in `src/components/Contact.jsx`

### 3D Globe Customization
Modify the Earth globe in `src/components/Hero.jsx`:
```javascript
// Adjust globe size
sphereGeometry args={[1.2, 64, 64]}

// Change rotation speed
groupRef.current.rotation.y += 0.002

// Modify lighting
<ambientLight intensity={0.8} />
```

## 🎨 Customization Guide

### Theme Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#7c3aed',    // Purple
  secondary: '#06b6d4',  // Cyan
  midnight: '#0b1224',   // Dark blue
}
```

### Fonts
The project uses Google Fonts:
- **Inter** - Body text
- **Space Grotesk** - Headings
- **JetBrains Mono** - Code snippets

### Animations
Custom animations defined in `src/App.css`:
- Floating effects
- Glow animations
- Smooth transitions

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Add environment variables
3. Deploy automatically on git push

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

### Optimization Techniques
- Code splitting and lazy loading
- Image optimization
- Bundle size optimization
- Efficient animation frames
- CSS optimization

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) for React integration
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [EmailJS](https://www.emailjs.com/) for contact functionality

## 📞 Contact

- **Portfolio**: [Live Demo](https://your-portfolio-url.com)
- **GitHub**: [@Yashsarode933](https://github.com/Yashsarode933)
- **LinkedIn**: [Yash Sarode](https://www.linkedin.com/in/yash-sarode-87bb36256/)
- **Email**: yash.sarode@example.com

---

⭐ If you like this project, please give it a star!
