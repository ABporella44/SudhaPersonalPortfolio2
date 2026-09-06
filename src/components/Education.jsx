import { education } from '../data/data'
import { SectionHeading } from './Projects'

export default function Education() {
  return (
    <section id="education" className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Background" title="Education" />

        <div className="mt-14 flex flex-col gap-6 border-l border-line pl-8">
          {education.map((item) => (
            <div key={item.degree} className="relative">
              <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg-secondary" />
              <p className="font-body text-xs text-ink-faint">{item.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">{item.degree}</h3>
              <p className="mt-1 font-body text-sm text-accent">{item.school}</p>
              <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-ink-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
