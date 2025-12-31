/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#06b6d4',
        midnight: '#0b1224',
        glass: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 58, 237, 0.35)',
        card: '0 20px 60px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.25), transparent 35%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.18), transparent 30%), linear-gradient(135deg, #0b1224, #0a0f1d)',
      },
    },
  },
  plugins: [],
}
