import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

// Roles that cycle through the typing animation under the name.
const roles = ['Aspiring Data Scientist', 'Machine Learning Enthusiast', 'AI Developer']

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
        },
        deleting ? speed / 2 : speed
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

function FloatingParticles() {
  // Fixed positions/delays so they don't jump around on re-render.
  const particles = [
    { top: '12%', left: '8%', size: 6, delay: 0, dur: 7 },
    { top: '22%', left: '85%', size: 4, delay: 1, dur: 8 },
    { top: '68%', left: '12%', size: 5, delay: 2, dur: 6.5 },
    { top: '78%', left: '80%', size: 8, delay: 0.5, dur: 9 },
    { top: '40%', left: '92%', size: 3, delay: 1.5, dur: 7.5 },
    { top: '85%', left: '45%', size: 5, delay: 2.5, dur: 8.5 },
    { top: '15%', left: '50%', size: 4, delay: 3, dur: 6 },
    { top: '55%', left: '5%', size: 6, delay: 1.2, dur: 7 },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-accent to-accent2 opacity-40"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{ y: [0, -22, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(roles)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-grid px-6 pt-24"
    >
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent2/20 blur-[120px]" />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 font-mono text-sm tracking-[0.25em] text-accent"
        >
          {personalInfo.tagline.toUpperCase()}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 h-8 font-mono text-lg text-slate-300 sm:text-xl"
        >
          {typed}
          <span className="ml-0.5 animate-blink text-accent">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {personalInfo.introduction}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href={personalInfo.resumeUrl} download className="btn-primary">
            <Download size={18} /> Download Resume
          </a>
          <button onClick={() => scrollTo('projects')} className="btn-secondary">
            View Projects <ArrowRight size={16} />
          </button>
          <button onClick={() => scrollTo('contact')} className="btn-secondary">
            Contact Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-accent"
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-accent"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={personalInfo.social.email}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-accent"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="h-9 w-5 rounded-full border border-slate-600 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  )
}
