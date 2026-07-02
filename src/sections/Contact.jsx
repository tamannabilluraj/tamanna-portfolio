import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Copy, Check, Send } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — fail silently.
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    // ==========================================================================
    // EDIT ME: To enable real email sending, sign up at https://www.emailjs.com,
    // then replace this block with:
    //
    // import emailjs from '@emailjs/browser'
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    //   .then(() => setStatus('sent'))
    //
    // For now this just simulates a send so the form works out of the box.
    // ==========================================================================
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 900)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <SectionReveal>
        <p className="mb-2 font-mono text-sm text-accent">08 · Contact</p>
        <h2 className="section-heading">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="mt-4 max-w-xl text-slate-400">
          Have an opportunity, a project idea, or just want to talk data? My inbox is open.
        </p>
      </SectionReveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <SectionReveal delay={0.1} className="lg:col-span-2">
          <div className="glass-card flex h-full flex-col gap-5 p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <Mail size={17} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500">Email</p>
                <p className="truncate text-sm text-slate-200">{personalInfo.email}</p>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-400 hover:border-accent/50 hover:text-accent"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <MapPin size={17} />
              </span>
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-sm text-slate-200">{personalInfo.location}</p>
              </div>
            </div>

            <div className="mt-2 flex gap-3 border-t border-white/10 pt-5">
              <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="btn-secondary flex-1 justify-center !py-2 text-sm">
                <Github size={15} /> GitHub
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="btn-secondary flex-1 justify-center !py-2 text-sm">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card flex h-full flex-col gap-4 p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-accent/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-accent/50"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="h-full w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-accent/50"
                placeholder="What's on your mind?"
              />
            </div>
            <button type="submit" disabled={status === 'sending'} className="btn-primary justify-center disabled:opacity-60">
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  )
}
