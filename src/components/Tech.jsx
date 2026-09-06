import { techStack } from '../data/data'
import { SectionHeading } from './Projects'

export default function Tech() {
  return (
    <section id="tech" className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="Tech I Work With"
          description="A set of tools I reach for again and again, chosen for reliability over hype."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <div
              key={group.group}
              className="rounded-3xl border border-line bg-bg-card p-6"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="font-body text-sm text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
