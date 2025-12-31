export const generateParticles = (count = 24) =>
  Array.from({ length: count }, (_, idx) => ({
    id: idx,
    size: Math.random() * 5 + 3,
    blur: Math.random() * 12 + 6,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.35 + 0.25,
    delay: Math.random() * 8,
  }))

export const heroGradientOverlay =
  'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.14), transparent 35%), radial-gradient(circle at 80% 10%, rgba(6, 182, 212, 0.16), transparent 30%)'

