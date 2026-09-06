import { services } from '../data/data'
import { SectionHeading } from './Projects'

export default function Services() {
  return (
    <section id="services" className="bg-bg-primary py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="What I Offer"
          title="Services"
          description="From first sketch to shipped product, here's where I can help."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="rounded-3xl border border-line bg-bg-card p-6"
            >
              <span className="font-display text-xs text-ink-faint">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
