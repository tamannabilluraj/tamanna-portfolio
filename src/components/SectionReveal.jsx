import { motion } from 'framer-motion'

// Wrap any block of content in this to give it a subtle fade + rise
// animation when it scrolls into view. Use `delay` to stagger siblings.
export default function SectionReveal({ children, delay = 0, className = '', y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
