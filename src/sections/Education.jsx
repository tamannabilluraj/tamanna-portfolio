import { GraduationCap } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-28">
      <SectionReveal>
        <p className="mb-2 font-mono text-sm text-accent">02 · Education</p>
        <h2 className="section-heading">
          Academic <span className="gradient-text">Journey</span>
        </h2>
      </SectionReveal>

      <div className="relative mt-14 space-y-10 border-l border-white/10 pl-10 sm:pl-12">
        {education.map((item, i) => (
          <SectionReveal key={item.id} delay={i * 0.12}>
            <div className="relative">
              <span className="absolute -left-[3.15rem] top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-white shadow-lg shadow-accent/30 sm:-left-[3.65rem]">
                <GraduationCap size={16} />
              </span>
              <div className="glass-card p-6">
                <span className="font-mono text-xs text-accent">{item.duration}</span>
                <h3 className="mt-1 text-lg font-bold text-slate-100">{item.degree}</h3>
                <p className="mt-1 text-slate-400">{item.institution}</p>
                {item.detail && (
                  <span className="mt-3 inline-block chip !border-accent2/30 !bg-accent2/10 text-accent2">
                    {item.detail}
                  </span>
                )}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
