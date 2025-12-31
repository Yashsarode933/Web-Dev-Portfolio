import { motion } from 'framer-motion'
import { MapPin, Coffee, ArrowRight, User } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const highlights = [
  'B.Tech Computer Engineering · 2022 - 2026 · MIT Academy of Engineering, Pune · CGPA 8.26',
  'Cambridge Swatantra High School · 12th · 2022 · 75%',
  'Sahyadri Public School · 10th · 2020 · 85%',
]

export default function About() {
  const { ref, controls, variants } = useScrollAnimation({ delay: 0.1 })

  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
        <User className="h-4 w-4" />
        About
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="glass glow-border grid gap-8 rounded-3xl border border-white/10 p-6 shadow-card backdrop-blur md:grid-cols-2 md:p-10"
      >
        <div className="space-y-4">
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
            <img
              src="https://img.youtube.com/vi/bOoGZGGi6qY/hqdefault.jpg"
              alt="Pune skyline"
              className="h-64 w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white shadow-glow backdrop-blur">
              <MapPin className="h-4 w-4 text-secondary" />
              Pune, IN
            </div>
            <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Coffee className="h-4 w-4 text-primary" />
              Fueled by chai and code
            </div>
          </div>
          <p className="text-sm text-slate-300">
            Computer Engineering student (MIT Academy of Engineering, CGPA 8.26) with hands-on web
            development, data engineering, and game dev experience. Comfortable with HTML/CSS/JS,
            Java, MySQL, AWS services, and Unreal Engine. Focused on crafting reliable data flows,
            scalable backends, and polished UIs—plus experimenting with C++/Blueprints for
            interactive experiences.
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            Skills preview → hover below
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
        <div className="space-y-5">
          <h3 className="font-display text-xl font-semibold text-white">Journey so far</h3>
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-3 text-sm text-slate-200 shadow-inner shadow-white/5 backdrop-blur"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-secondary shadow-glow" />
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {['Data Engineering', 'Full-Stack', 'Game Dev', 'Cloud'].map((tag) => (
              <div
                key={tag}
                className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-3 text-center font-semibold text-white"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

