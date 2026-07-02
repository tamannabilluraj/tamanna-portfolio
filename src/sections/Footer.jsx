import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-slate-500">
          Designed &amp; Built by <span className="text-slate-300">{personalInfo.name}</span> · © {year}
        </p>
        <div className="flex items-center gap-5">
          <a href={personalInfo.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-accent transition-colors">
            <Github size={18} />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-accent transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={personalInfo.social.email} aria-label="Email" className="text-slate-500 hover:text-accent transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
