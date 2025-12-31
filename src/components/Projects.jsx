import { motion } from 'framer-motion'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { generateParticles } from '../utils/particles'

const projects = [
  {
    title: 'Live Coding Interview Platform',
    desc: 'Real-time collaborative coding platform for technical interviews with instant feedback and code analysis.',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'React.js', 'Node.js'],
    metrics: 'Team size: 1 (individual project)',
    snippet: '// Real-time code synchronization\nconst syncCode = (code) => {\n  socket.emit("code-update", code);\n};',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    links: { 
      demo: 'https://live-coding-interview-platform.vercel.app/', 
      github: 'https://github.com/Yashsarode933/live-coding-interview-platform' },
  },
  {
    title: 'Art Co-ownership Platform',
    desc: 'Decentralized platform for managing and trading digital art ownership using blockchain and smart contracts.',
    tech: ['Rust', 'ICP (Internet Computer)', 'Web3.js', 'Canister Smart Contracts', 'DFX'],
    metrics: 'Team size: 3 (team project)',
    snippet: '// Smart contract function\nexport async function transferOwnership(newOwner) {\n  await this.contract.methods.transferFrom(this.account, newOwner, this.tokenId);\n}',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    links: { demo: '#', github: 'https://github.com/Yashsarode933/Art_Co-ownership' },
  },
  {
    title: 'Data Engineering Pipeline',
    desc: 'Designed ingestion and transformation to deliver real-time insights with scalable storage.',
    tech: ['AWS S3', 'Athena', 'Amazon RDS', 'Kafka'],
    metrics: 'Team size: 6 (team project)',
    snippet: '// Data pipeline configuration\nconst pipeline = {\n  source: "Kafka topic",\n  transform: "Spark job",\n  sink: "Athena table"\n};',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    links: { demo: '#', github: 'https://github.com/Yashsarode933' },
  },
  {
    title: 'Library Management System',
    desc: 'Java + SQL system for book issuance, returns, catalog management, and reporting.',
    tech: ['Java', 'SQL', 'MySQL'],
    metrics: 'Team size: 3 (team project)',
    snippet: 'try (PreparedStatement ps = conn.prepareStatement("UPDATE books SET status=? WHERE id=?")) {\n  ps.setString(1, "available");\n  ps.setInt(2, bookId);\n  ps.executeUpdate();\n}',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    links: { demo: '#', github: 'https://github.com/Yashsarode933' },
  },
  {
    title: 'My Home - Location Insights',
    desc: 'Web platform that scores pollution and safety metrics using Google Maps APIs and ML models.',
    tech: ['ML', 'Google Maps API', 'HTML', 'CSS', 'JS'],
    metrics: 'Team size: 4 (team project)',
    snippet: 'const score = await maps.getPollutionIndex(lat, lng)\nreturn normalize(score, 0, 150)',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    links: { demo: '#', github: 'https://github.com/Yashsarode933' },
  },
]

const ProjectCard = ({ project, delay }) => {
  const particles = useMemo(() => generateParticles(6), [])
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-card backdrop-blur"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-60">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-white/40 blur-2xl"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
      <div className="relative h-40 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          {project.metrics}
        </div>
      </div>
      <div className="relative space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h4 className="font-display text-lg font-semibold text-white">{project.title}</h4>
          <div className="flex gap-2">
            <a
              href={project.links.demo}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={project.links.github}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="text-sm text-slate-300">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-2.5 py-1 text-[12px] font-semibold text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-3 font-mono text-xs text-emerald-200">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 transition duration-500 group-hover:opacity-100" />
          <pre className="relative whitespace-pre-wrap leading-5">{project.snippet}</pre>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, controls, variants } = useScrollAnimation({ delay: 0.1 })
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-secondary">Projects</p>
          </div>
          {projects.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline transition-colors"
            >
              {showAll ? 'Show less' : 'View all'}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} delay={idx * 0.05} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

