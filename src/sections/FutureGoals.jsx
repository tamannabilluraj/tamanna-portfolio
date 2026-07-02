import { Circle, CircleDot, CheckCircle2 } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import { futureGoals } from '../data/portfolioData'

const statusIcon = {
  done: <CheckCircle2 size={16} className="text-emerald-400" />,
  'in-progress': <CircleDot size={16} className="text-accent" />,
  planned: <Circle size={16} className="text-slate-500" />,
}

export default function FutureGoals() {
  return (
    <section id="goals" className="mx-auto max-w-4xl px-6 py-28">
      <SectionReveal>
        <p className="mb-2 font-mono text-sm text-accent">07 · Roadmap</p>
        <h2 className="section-heading">
          Where I'm <span className="gradient-text">Headed</span>
        </h2>
      </SectionReveal>

      <div className="relative mt-14 space-y-4 border-l border-white/10 pl-10 sm:pl-12">
        {futureGoals.map((goal, i) => (
          <SectionReveal key={goal.id} delay={i * 0.08}>
            <div className="relative flex items-center gap-4 glass-card px-5 py-4">
              <span className="absolute -left-[3.15rem] grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-bg sm:-left-[3.65rem]">
                {statusIcon[goal.status] ?? statusIcon.planned}
              </span>
              <span className="font-medium text-slate-200">{goal.title}</span>
              {goal.status === 'in-progress' && (
                <span className="ml-auto rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                  In progress
                </span>
              )}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
