import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone,Loader2 } from 'lucide-react'
import { profile } from '../data/data'
import emailjs from '@emailjs/browser'

const socialIcons = {
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  Instagram,
}

const initialForm = { firstName: '', lastName: '', email: '', company: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.firstName || !form.email || !form.message) {
      setStatus('error')
      return
    }
    // No backend is wired up — this simulates a successful submission
    // so the form is fully interactive out of the box.
    setStatus('sending')
    setForm(initialForm)
        emailjs
      .send('service_hxl8lug', 'template_7xvaupi', form, 'LFL5N4_l7Hja4bHkD')
      .then(() => {
             setStatus('success')
      })
      .catch(() => {
        setStatus('error')
      })
      .finally(() => {

        setTimeout(() => {
          setStatus('idle')
        }, 3000)
      });
      setForm(initialForm)

  }

  return (
    <section id="contact" className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-bg-card/60 px-4 py-1.5 text-xs text-ink-muted">
            <span className="h-2 w-2 rounded-full border-2 border-accent" />
            Let's Connect
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 font-body text-ink-muted">We'd love to hear from you!</p>
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-line bg-bg-card p-6 lg:grid-cols-[1.4fr_1fr] lg:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="First name"
                value={form.firstName}
                onChange={update('firstName')}
                required
              />
              <Field label="Last name" value={form.lastName} onChange={update('lastName')} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={update('email')}
                required
              />
              <Field label="Company Name" value={form.company} onChange={update('company')} />
            </div>
            <Field
              label="Message"
              value={form.message}
              onChange={update('message')}
              textarea
              required
            />

            <button
              type="submit"
              className="mt-2 w-fit rounded-full bg-accent px-7 py-3 font-body text-sm font-semibold text-bg-primary transition-transform hover:scale-[1.03]"
            >
      {status === 'sending' ? 
              <p className="font-body text-sm text-ink-muted">Sending your message...</p> : 
              <p className="font-body text-sm text-ink-muted">Submit</p>
            }
            </button>

            {status === 'success' && (
              <p className="font-body text-sm text-accent">
                Thanks for reaching out — I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="font-body text-sm text-red-400">
                Please fill in your name, email, and message.
              </p>
            )}
          </form>

          <div className="rounded-3xl bg-bg-elevated p-6">
            <p className="font-display text-lg font-semibold text-ink">
             Get In Touch With Me For Your Projects And Collaborations.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-card text-accent">
                <Phone size={16} />
              </span>
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-ink-faint">
                  Phone
                </p>
                <p className="font-body text-sm font-semibold text-ink">
                  {profile.contact.phone}
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-card text-accent">
                <Mail size={16} />
              </span>
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-ink-faint">
                  Email
                </p>
                <p className="font-body text-sm font-semibold text-ink">
                  {profile.contact.email}
                </p>
              </div>
            </div>

            <p className="mt-8 font-body text-[11px] uppercase tracking-wide text-ink-faint">
              Contact with us
            </p>
            <div className="mt-3 flex gap-3">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.name]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-card text-ink-muted transition-colors hover:text-accent"
                  >
                    {Icon && <Icon size={15} />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, type = 'text', required, textarea }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <label className="flex flex-col gap-1.5 font-body text-sm text-ink-muted">
      {label}
      <Tag
        type={textarea ? undefined : type}
        value={value}
        onChange={onChange}
        required={required}
        rows={textarea ? 3 : undefined}
        className="border-b border-line bg-transparent py-2 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
      />
    </label>
  )
}
