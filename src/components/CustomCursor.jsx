import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// A small dot-and-ring cursor that replaces the system pointer on devices
// with a fine pointer (i.e. desktop with a mouse). Automatically inert on
// touch devices.
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(isFine)
    if (!isFine) return

    document.documentElement.classList.add('custom-cursor-active')

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      const target = e.target
      setIsPointer(!!target.closest('a, button, input, textarea, [role="button"]'))
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] h-2 w-2 rounded-full bg-accent"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: isPointer ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 800, damping: 40, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[100] h-8 w-8 rounded-full border border-accent2/60"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: isPointer ? 1.4 : 1,
          opacity: isPointer ? 0.9 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.4 }}
      />
    </>
  )
}
