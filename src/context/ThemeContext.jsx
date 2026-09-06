import { createContext, useContext, useEffect, useState } from 'react'

export const THEMES = [
  { id: 'ocean', name: 'Ocean', swatch: '#4fd1e0' },
  { id: 'nebula', name: 'Nebula', swatch: '#b18cff' },
  { id: 'ember', name: 'Ember', swatch: '#ff9d5c' },
  { id: 'forest', name: 'Forest', swatch: '#7be08a' },
  { id: 'graphite', name: 'Graphite', swatch: '#7dc4ff' },
]

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'ocean'
    return window.localStorage.getItem('hexafolio-theme') || 'ocean'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('hexafolio-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
