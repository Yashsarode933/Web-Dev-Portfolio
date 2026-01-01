import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, Send, Github, Linkedin, MapPin, QrCode } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { generateParticles } from '../utils/particles'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Yashsarode933', icon: <Github className="h-5 w-5" /> },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yash-sarode-87bb36256/',
    icon: <Linkedin className="h-5 w-5" />,
  },
]

export default function Contact() {
  const { ref, controls, variants } = useScrollAnimation({ delay: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const particles = useMemo(() => generateParticles(12), [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || serviceId.startsWith('YOUR')) {
      setStatus('demo')
      return
    }

    try {
      setStatus('sending')
      await emailjs.send(serviceId, templateId, form, publicKey)
      setForm({ name: '', email: '', message: '' })
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur">
          <div className="absolute inset-0 opacity-70">
            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full bg-white/30 blur-2xl"
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
          <div className="relative flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            <Mail className="h-4 w-4" />
            Contact
          </div>
          <h3 className="relative mt-2 font-display text-2xl font-semibold text-white">
            Let&apos;s build the next web/game experience
          </h3>
            <p className="relative mt-2 text-sm text-slate-300">
              Currently in Pune, Maharashtra, IN. 
              <br />
              Open to web, data, and game dev roles.
            </p>
          <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wide text-slate-400">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                className="mt-1 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:bg-black/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-slate-400">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                className="mt-1 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:bg-black/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-slate-400">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                className="mt-1 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:bg-black/50"
                placeholder="Tell me about the role or project"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.01]"
            >
              Send <Send className="h-4 w-4" />
            </button>
            {status === 'sent' && (
              <p className="text-sm text-emerald-300">Message sent! I&apos;ll reply soon.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-amber-300">
                Email service errored—please reach out via social links.
              </p>
            )}
            {status === 'demo' && (
              <p className="text-sm text-amber-300">
                Email service not configured yet. Ping me on LinkedIn or GitHub.
              </p>
            )}
          </form>
        </div>

        <div className="glass glow-border relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-card backdrop-blur">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-secondary/15 blur-3xl" />
          <div className="relative flex flex-col gap-5">
            <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-3">
              <MapPin className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-white">Pune, Maharashtra, IN</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  {social.icon}
                  {social.label}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 p-4">
              <div>
                <p className="text-sm font-semibold text-white">Resume QR</p>
                <p className="text-xs text-slate-300">Scan to view/download PDF</p>
              </div>
              <div className="relative">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://yash-resume-v2.tiiny.site"
                  alt="Resume QR"
                  className="h-28 w-28 rounded-xl border border-white/10 bg-white p-2"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-300">
              Email: yashsarode933@gmail.com
              <br />
              Phone: +91-8600272726
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

