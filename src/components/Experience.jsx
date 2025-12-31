import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    title: 'Web Developer Intern',
    time: 'June 2025 - July 2025',
    icon: <Briefcase className="h-4 w-4" />,
    points: [
      'Rebuilt the King Sukh Guesthouse website using Next.js with a fully responsive design',
      'Enhanced UI/UX through modern layouts, smooth animations, and optimized navigation',
      'Developed reusable React components for scalability and maintainability',
      'Integrated dynamic content and a functional contact form with client-side validation'
    ],
  },
  {
    title: 'Blockchain Developer Intern',
    time: 'July 2024 - Aug 2024',
    icon: <Briefcase className="h-4 w-4" />,
    points: [
      'Built a blockchain‑based art co‑ownership DApp for fractional NFT ownership', 
      'Designed decentralized token ownership and trading logic',
      'Integrated Web3.js for secure blockchain and wallet interactions',
      'Performed contract testing and frontend integration validations'
    ],
  },
]

export default function Experience() {
  const { ref, controls, variants } = useScrollAnimation({ delay: 0.1 })

  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          <Briefcase className="h-4 w-4" />
          Experience
        </div>
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-30 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-primary">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-white">{exp.title}</h4>
                    <p className="text-sm text-slate-300">{exp.time}</p>
                  </div>
                </div>
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white/80">
                  Completed
                </span>
              </div>
              <ul className="relative mt-4 space-y-2 text-sm text-slate-200">
                {exp.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

