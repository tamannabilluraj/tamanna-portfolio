import { useEffect, useState } from 'react'

// Dark mode is the default. The user's choice is remembered in memory for
// the session (not persisted across reloads, to keep the site dependency-free).
export function useTheme() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
