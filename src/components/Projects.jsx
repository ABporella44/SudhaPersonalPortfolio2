import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/data'

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-primary py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Selected Work" title="Projects" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group flex flex-col rounded-3xl border border-line bg-bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-pill border border-line px-3 py-1 font-body text-[11px] text-ink-faint">
                  {project.category}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint transition-colors group-hover:text-accent"
                />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{project.title}</h3>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-pill bg-bg-elevated px-3 py-1 font-body text-[11px] text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-4 font-body text-xs text-ink-faint">{project.year}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-xl">
      <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-bg-card/60 px-4 py-1.5 text-xs text-ink-muted">
        <span className="h-2 w-2 rounded-full border-2 border-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 font-body leading-relaxed text-ink-muted">{description}</p>
      )}
    </div>
  )
}
