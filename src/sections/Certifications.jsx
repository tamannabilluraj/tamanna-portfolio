import { Award, ExternalLink } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-28">
      <SectionReveal>
        <p className="mb-2 font-mono text-sm text-accent">05 · Certifications</p>
        <h2 className="section-heading">
          Credentials &amp; <span className="gradient-text">Badges</span>
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <SectionReveal key={cert.id} delay={i * 0.1}>
            <div className="glass-card flex h-full flex-col gap-4 p-6 hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-white">
                <Award size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold leading-snug text-slate-100">{cert.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-slate-500">Issued {cert.date}</p>
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  View credential <ExternalLink size={13} />
                </a>
              )}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
