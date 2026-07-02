import { motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient bar pinned to the top of the viewport that fills as the
// user scrolls down the page.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-accent to-accent2 z-[60]"
    />
  )
}
