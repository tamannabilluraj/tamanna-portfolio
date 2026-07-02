import { Sparkles } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import { aboutInterests, aboutStats, personalInfo } from '../data/portfolioData'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ stat, delay }) {
  const { count, ref } = useCountUp(stat.value)
  return (
    <SectionReveal delay={delay}>
      <div ref={ref} className="glass-card p-6 text-center hover:-translate-y-1">
        <div className="text-3xl font-extrabold gradient-text sm:text-4xl">
          {count}
          {stat.suffix}
        </div>
        <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
      </div>
    </SectionReveal>
  )
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionReveal>
        <p className="mb-2 font-mono text-sm text-accent">01 · About</p>
        <h2 className="section-heading">
          Who I <span className="gradient-text">Am</span>
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
        <SectionReveal delay={0.1}>
          <div className="glass-card p-8">
            <p className="leading-relaxed text-slate-300">{personalInfo.introduction}</p>
            <p className="mt-4 leading-relaxed text-slate-400">
              I'm currently pursuing my <strong className="text-slate-200">MSc in Computer Science with a
              specialization in Data Science</strong>, building on a foundation in AI &amp; ML. My focus areas span
              machine learning, data analytics, and applied problem solving — always through hands-on projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {aboutInterests.map((interest) => (
                <span key={interest} className="chip">
                  <Sparkles size={13} className="text-accent" />
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-5">
          {aboutStats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} delay={0.15 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
