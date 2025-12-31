import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const links = [
  { label: 'GitHub', href: 'https://github.com/Yashsarode933', icon: <Github className="h-4 w-4" /> },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yash-sarode-87bb36256/',
    icon: <Linkedin className="h-4 w-4" />,
  },
  { label: 'Email', href: 'mailto:yashsarode933@gmail.com', icon: <Mail className="h-4 w-4" /> },
  { label: 'Phone', href: 'tel:+918600272726', icon: <Phone className="h-4 w-4" /> },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 py-8 text-sm text-slate-300 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-white">Yash Sarode</p>
          <p className="text-xs text-slate-400">
            Pune, Maharashtra · Web/Data/Game Developer · React · AWS · Unreal
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="glass flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-6xl px-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Built with React, Vite, Tailwind, Framer Motion, and Three.js.
      </div>
    </footer>
  )
}

