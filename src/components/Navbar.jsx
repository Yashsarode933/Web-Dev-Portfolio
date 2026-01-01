import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Download, Menu, X } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const scrollToSection = (id) => {
  if (id === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      const offsets = navItems.map(({ id }) => {
        const section = document.getElementById(id)
        if (!section) return { id, top: Infinity }
        const { top } = section.getBoundingClientRect()
        return { id, top: Math.abs(top) }
      })
      const nearest = offsets.sort((a, b) => a.top - b.top)[0]
      if (nearest && nearest.id !== active) setActive(nearest.id)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [active])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div
        className={`glass glow-border flex items-center justify-between rounded-2xl px-4 py-3 shadow-card transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl' : ''
        } max-w-7xl w-full`}
      >
        <div
          className="flex cursor-pointer items-center gap-2 font-display text-lg font-semibold tracking-tight"
          onClick={() => scrollToSection('hero')}
        >
          <span className="rounded-xl bg-primary/20 p-2 text-primary shadow-glow">
            <Gamepad2 className="h-5 w-5" />
          </span>
          Yash Sarode
        </div>
        <div className="hidden items-center gap-1 rounded-xl bg-white/5 p-1 shadow-inner shadow-white/5 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                active === item.id
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white hover:brightness-110'
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute inset-0 rounded-lg bg-white/10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://yash-resume-v2.tiiny.site"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] md:flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 glass glow-border rounded-2xl shadow-card backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsOpen(false)
                  }}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active === item.id
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://yash-resume-v2.tiiny.site"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
                onClick={() => setIsOpen(false)}
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

