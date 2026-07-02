import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import { skillCategories } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionReveal>
        <p className="mb-2 font-mono text-sm text-accent">03 · Skills</p>
        <h2 className="section-heading">
          Tools of the <span className="gradient-text">Trade</span>
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, ci) => (
          <SectionReveal key={category.id} delay={ci * 0.1}>
            <div className="glass-card h-full p-6">
              <h3 className="mb-5 font-semibold text-slate-100">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.04, duration: 0.35 }}
                    className="chip"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
