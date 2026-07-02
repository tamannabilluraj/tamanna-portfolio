import { Users } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import { leadership } from '../data/portfolioData'

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-6 py-28">
      <SectionReveal>
        <p className="mb-2 font-mono text-sm text-accent">06 · Leadership</p>
        <h2 className="section-heading">
          Beyond the <span className="gradient-text">Classroom</span>
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {leadership.map((item, i) => (
          <SectionReveal key={item.id} delay={i * 0.1}>
            <div className="glass-card flex h-full flex-col items-start gap-3 p-6 hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-white">
                <Users size={20} />
              </div>
              <h3 className="font-semibold text-slate-100">{item.role}</h3>
              <p className="text-sm text-slate-400">{item.organization}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
