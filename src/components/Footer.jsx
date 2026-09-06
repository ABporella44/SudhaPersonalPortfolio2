import { profile } from '../data/data'

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-line py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 font-body text-xs text-ink-faint sm:flex-row">
        <p>© {new Date().getFullYear()} Sudha Sravanthi Kancharla. All rights reserved.</p>
        <p>Designed &amp; built by {profile.name}</p>
      </div>
    </footer>
  )
}
