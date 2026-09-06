import { useState, useRef, useEffect } from 'react'
import { Palette, Check } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 w-52 rounded-2xl border border-line bg-bg-card p-3 shadow-soft">
          <p className="mb-2 px-1 font-body text-[11px] uppercase tracking-wide text-ink-faint">
            Theme
          </p>
          <div className="flex flex-col gap-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id)
                  setOpen(false)
                }}
                className="flex items-center justify-between rounded-xl px-2.5 py-2 font-body text-sm text-ink-muted transition-colors hover:bg-bg-elevated"
              >
                <span className="flex items-center gap-2">
                  <span
                    className="h-4 w-4 rounded-full border border-line"
                    style={{ background: t.swatch }}
                  />
                  {t.name}
                </span>
                {theme === t.id && <Check size={14} className="text-accent" />}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Choose color theme"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-card text-ink shadow-soft transition-colors hover:text-accent"
      >
        <Palette size={18} />
      </button>
    </div>
  )
}
