import { useState, useEffect } from 'react'
import { ArrowUpRight, Send, Quote } from 'lucide-react'
import { profile, heroBadges, heroTestimonialPreviews } from '../data/data'

export default function Hero() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [imgError, setImgError] = useState(false)

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (heroTestimonialPreviews.length < 2) return
    const timer = setInterval(() => {
      setActiveTestimonial((i) => (i + 1) % heroTestimonialPreviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = heroTestimonialPreviews[activeTestimonial]

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* decorative orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/4 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--accent)' }}
      />

      <div className="relative mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-bg-card/60 px-4 py-1.5 text-xs text-ink-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {profile.role}
            </span>

            <h1 className="mt-6 flex flex-wrap items-center gap-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl">
              {profile.name}
              <ArrowUpRight
                size={30}
                className="rounded-full border border-line p-1.5 text-accent"
              />
            </h1>

            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ink-muted md:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('#projects')}
                className="rounded-pill bg-accent px-6 py-3 font-body text-sm font-semibold text-bg-primary transition-transform hover:scale-[1.03]"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 rounded-pill border border-line px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Send size={15} />
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            {/* profile image */}
            <div className="aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-line shadow-soft">
              {!imgError ? (
                <img
                  src='./Sudha3.jpeg'
                  alt={profile.name}
                  onError={() => setImgError(true)}
                  className="h-full max-h-[420px] w-full object-contain"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-bg-card">
                  <span className="font-display text-6xl font-semibold text-accent">
                    {profile.name?.charAt(0) ?? '?'}
                  </span>
                </div>
              )}
            </div>

            {/* testimonial carousel card */}
            {heroTestimonialPreviews.length > 0 && testimonial && (
              <div className="w-full max-w-md rounded-3xl border border-line bg-bg-card/90 p-8 shadow-soft">
                <div className="mt-5 flex items-start gap-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-body text-base leading-relaxed text-ink-muted">
                      {testimonial.quote}
                    </p>
                    <p className="mt-4 text-right font-body text-sm italic text-ink-faint">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>

                {heroTestimonialPreviews.length > 1 && (
                  <div className="mt-6 flex justify-center gap-2">
                    {heroTestimonialPreviews.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        aria-label={`Show testimonial ${i + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          i === activeTestimonial ? 'w-5 bg-accent' : 'w-2 bg-line'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3 border-t border-line pt-8">
          {heroBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-pill border border-line bg-bg-card/50 px-4 py-2 font-body text-xs text-ink-muted"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
