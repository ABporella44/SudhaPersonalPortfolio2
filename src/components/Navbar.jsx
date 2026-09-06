import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-content flex items-center justify-between gap-6 rounded-pill border border-line bg-bg-card/80 backdrop-blur-md px-5 py-3 transition-shadow ${
          scrolled ? 'shadow-soft' : ''
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleClick('#home')
          }}
          className="flex items-center gap-2 font-display font-semibold text-ink text-lg shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent text-accent font-display text-sm">
            SSK
          </span>
          Sudha Sravanthi Kancharla
        </a>

        <ul className="hidden lg:flex items-center gap-7 font-body text-sm text-ink-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(link.href)
                }}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden absolute left-1/2 top-[70px] w-[calc(100%-2rem)] max-w-content -translate-x-1/2 rounded-3xl border border-line bg-bg-card/95 backdrop-blur-md shadow-soft p-4">
          <ul className="flex flex-col gap-1 font-body text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(link.href)
                  }}
                  className="block rounded-xl px-3 py-2.5 text-ink-muted hover:bg-bg-elevated hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 px-3 text-xs text-ink-faint">{profile.availability}</p>
        </div>
      )}
    </header>
  )
}
