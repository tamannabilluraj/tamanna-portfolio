import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Search, Star, LayoutGrid } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import { projects } from '../data/portfolioData'

function ProjectCard({ project, delay }) {
  return (
    <SectionReveal delay={delay}>
      <motion.div whileHover={{ y: -6 }} className="glass-card group relative flex h-full flex-col overflow-hidden">
        {project.featured && (
          <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-accent to-accent2 px-3 py-1 text-xs font-semibold text-white shadow">
            <Star size={11} fill="currentColor" /> Featured
          </span>
        )}

        {/* Image placeholder */}
        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/20 via-card to-accent2/20">
          <div className="bg-grid absolute inset-0 opacity-40" />
          <LayoutGrid size={40} className="relative text-slate-500 group-hover:text-accent transition-colors" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

          {project.highlights.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span key={h} className="rounded-md bg-accent2/10 px-2 py-1 font-mono text-xs text-accent2">
                  {h}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-slate-400">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary flex-1 justify-center !py-2 text-sm"
              >
                <Github size={15} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex-1 justify-center !py-2 text-sm"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </SectionReveal>
  )
}

export default function Projects() {
  const [query, setQuery] = useState('')
  const [activeTech, setActiveTech] = useState('All')

  const allTechs = useMemo(() => {
    const set = new Set()
    projects.forEach((p) => p.technologies.forEach((t) => set.add(t)))
    return ['All', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      const matchesTech = activeTech === 'All' || p.technologies.includes(activeTech)
      return matchesQuery && matchesTech
    })
  }, [query, activeTech])

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionReveal>
        <p className="mb-2 font-mono text-sm text-accent">04 · Projects</p>
        <h2 className="section-heading">
          Things I've <span className="gradient-text">Built</span>
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors focus:border-accent/50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTech(tech)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  activeTech === tech
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-white/10 text-slate-400 hover:border-accent/30'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </SectionReveal>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-slate-500">No projects match your search yet — try a different term.</p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      )}
    </section>
  )
}
