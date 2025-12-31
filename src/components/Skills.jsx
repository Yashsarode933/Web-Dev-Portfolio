import { motion } from 'framer-motion'
import { Sparkles, Info } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const categories = [
  {
    title: 'Web Development',
    accent: 'from-primary/60 to-secondary/60',
    items: [
      { name: 'HTML / CSS / JS', level: 92, tooltip: 'Responsive UI, SPA polish' },
      { name: 'React', level: 88, tooltip: 'UI components & routing' },
      { name: 'UI/UX', level: 80, tooltip: 'Clean layouts, accessibility' },
    ],
  },
  {
    title: 'Data & Cloud',
    accent: 'from-emerald-500/60 to-cyan-500/60',
    items: [
      { name: 'AWS (S3, Athena, RDS)', level: 78, tooltip: 'Pipeline + storage' },
      { name: 'Kafka', level: 60, tooltip: 'Streaming ingestion basics' },
      { name: 'MySQL', level: 85, tooltip: 'Schema + querying' },
    ],
  },
  {
    title: 'Programming',
    accent: 'from-orange-500/60 to-amber-400/60',
    items: [
      { name: 'Java', level: 80, tooltip: 'Backend + OOP' },
      { name: 'C / C++', level: 75, tooltip: 'Systems & gameplay' },
      { name: 'Python (ML basics)', level: 70, tooltip: 'Data prep, notebooks' },
    ],
  },
  {
    title: 'Game Development',
    accent: 'from-sky-500/60 to-indigo-500/60',
    items: [
      { name: 'Unreal Engine', level: 90, tooltip: 'C++ & Blueprints prototyping' },
      { name: 'Rendering / FX', level: 60, tooltip: 'Basic Niagara & lighting' },
      { name: 'Gameplay Systems', level: 70, tooltip: 'Interactions & UI' },
    ],
  },
  {
    title: 'Tools',
    accent: 'from-fuchsia-500/60 to-amber-500/60',
    items: [
      { name: 'Git', level: 88, tooltip: 'Branches, PR discipline' },
      { name: 'VS Code', level: 92, tooltip: 'Productive setup' },
      { name: 'Google Maps APIs', level: 76, tooltip: 'Location features' },
    ],
  },
]

const SkillBar = ({ level, tooltip }) => (
  <div className="group relative h-2 w-full rounded-full bg-white/10">
    <div
      className="absolute inset-y-0 rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow"
      style={{ width: `${level}%` }}
    />
    <span className="absolute -right-2 -top-8 hidden rounded-md bg-black/80 px-2 py-1 text-[10px] font-medium text-white shadow-lg backdrop-blur group-hover:block">
      {tooltip}
    </span>
  </div>
)

export default function Skills() {
  const { ref, controls, variants } = useScrollAnimation({ delay: 0.1 })

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
        <Sparkles className="h-4 w-4" />
        Skills & Tooling
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="grid gap-6 md:grid-cols-2"
      >
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent} opacity-20 blur-3xl`} />
            <div className="relative flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
              <Info className="h-4 w-4 text-white/60" />
            </div>
            <div className="relative mt-4 space-y-4">
              {cat.items.map((item) => (
                <div key={item.name} className="space-y-2 rounded-2xl border border-white/10 p-3">
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span className="font-semibold">{item.name}</span>
                    <span className="rounded-full bg-black/40 px-2 py-0.5 text-[11px] text-white/80">
                      {item.level}%
                    </span>
                  </div>
                  <SkillBar level={item.level} tooltip={item.tooltip} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

