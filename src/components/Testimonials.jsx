import { heroTestimonialPreviews } from '../data/data'
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
          {heroTestimonialPreviews.map((t) => (
            <figure
              key={t.author}
              className="rounded-3xl border border-line bg-bg-card p-7"
              style={ { display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '1rem'
               } }
            >
                <img
                    src={t.image}
                    alt={t.author}
                    className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
                  />
              <blockquote className="font-body text-base leading-relaxed text-ink">
                "{t.quote}" <span style={{fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.875rem'}}className="font-display text-sm text-ink">...{t.author}</span>
              </blockquote>
                                      
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
