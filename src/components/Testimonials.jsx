import { testimonials } from '../data/data'
import { SectionHeading } from './Projects'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-primary py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Kind Words"
          title="Testimonials"
          description="A few notes from people I've built alongside."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-3xl border border-line bg-bg-card p-7"
            >
              <blockquote className="font-body text-base leading-relaxed text-ink">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-display text-sm font-semibold text-ink">{t.author}</p>
                <p className="font-body text-xs text-ink-faint">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
