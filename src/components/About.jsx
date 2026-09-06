import { Download } from 'lucide-react'
import { profile, experience } from '../data/data'

export default function About() {
  return (
    <section id="about" className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-bg-card/60 px-4 py-1.5 text-xs text-ink-muted">
              <span className="h-2 w-2 rounded-full border-2 border-accent" />
              About Me
            </span>

            <h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {profile.aboutHeadline}
            </h2>

            <p className="mt-4 max-w-md font-body leading-relaxed text-ink-muted">
              {profile.aboutBio}
            </p>

            <div className="mt-8 flex flex-wrap gap-10">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-body text-sm text-ink-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 font-body text-sm text-ink-muted">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {profile.availability}
            </div>

            <a
              href={profile.resumeUrl}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-bg-elevated px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:text-accent"
            >
              Download Resume
              <Download size={15} />
            </a>
          </div>

          <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
            <div
              className="flex h-full w-full items-center justify-center rounded-full border border-line font-display text-6xl font-semibold text-ink-muted"
              style={{ background: 'var(--bg-elevated)' }}
            >
              <img src='./ssk2.jpeg' alt={profile.name} className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="absolute -right-4 bottom-2 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-line bg-accent text-center text-bg-primary shadow-soft sm:h-36 sm:w-36">
              <p className="font-display text-3xl font-bold leading-none">{profile.yearsExperience}+</p>
              <p className="mt-1 px-3 font-body text-[11px] leading-tight">Years of Industry Experience</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {experience.map((job) => (
            <div key={job.role}>
              <p className="font-display text-sm font-semibold text-ink">{job.role}</p>
              <p className="mt-1 font-body text-sm text-ink-muted">
                {job.company} · {job.type}
              </p>
              <p className="mt-1 font-body text-xs text-ink-faint">{job.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
