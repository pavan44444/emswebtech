import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/promos';

// Uses contactInfo.address if you have one, otherwise the address from your site footer.
const ADDRESS =
  contactInfo.address || 'No. 25, 4th Cross, Sampige Road, Malleswaram, Bangalore 560003';

const tabs = [
  { id: 'info', label: 'Contact info' },
  { id: 'enquiry', label: 'Service enquiry' },
  { id: 'map', label: 'View on map' },
];

const inputClass =
  'w-full rounded-xl border border-ink/15 px-4 py-3 bg-white text-ink placeholder:text-ink/40 focus:outline-none focus:border-olive';

export default function Contact() {
  // /contact?tab=enquiry opens the enquiry tab directly (handy for "Get a quote" buttons)
  const [params] = useSearchParams();
  const requested = params.get('tab');
  const [tab, setTab] = useState(tabs.some((t) => t.id === requested) ? requested : 'info');

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    const digits = contactInfo.phones[0].replace(/\D/g, '');
    const number = digits.length === 10 ? `91${digits}` : digits;
    const text =
      `New website enquiry\nName: ${form.name}\nPhone: ${form.phone}\n` +
      `Email: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Let's talk</h1>
        <p className="mt-4 text-ink/70">
          Tell us a little about your project and we'll get back to you.
        </p>
      </div>

      {/* Tabs */}
      <div role="tablist" aria-label="Contact options" className="mt-10 flex justify-center border-b border-paper/10">
        {tabs.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              role="tab"
              type="button"
              aria-selected={active}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={`relative px-4 sm:px-8 py-3 text-sm sm:text-base font-medium transition-colors ${active ? 'text-paper' : 'text-paper/60 hover:text-paper'
                }`}
            >
              {t.label}
              {active && (
                <motion.span
                  layoutId="contact-tab-underline"
                  className="absolute inset-x-0 -bottom-px h-[2px] bg-orange"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-12">
        {/* 1. Contact info */}
        {tab === 'info' && (
          <div id="panel-info" role="tabpanel" aria-labelledby="tab-info">
            <h2 className="text-center text-3xl font-semibold tracking-tight">Contact info</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-paper/10 bg-paper/5 p-6">
                <p className="text-xs uppercase tracking-wide text-paper/50">Call us</p>
                <div className="mt-3 space-y-1.5 text-sm">
                  {contactInfo.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-olive-light">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-paper/10 bg-paper/5 p-6">
                <p className="text-xs uppercase tracking-wide text-paper/50">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-3 block break-all text-sm hover:text-olive-light"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="rounded-2xl border border-paper/10 bg-paper/5 p-6">
                <p className="text-xs uppercase tracking-wide text-paper/50">Visit us</p>
                <p className="mt-3 text-sm leading-relaxed">{ADDRESS}</p>
                {/* <button
                  type="button"
                  onClick={() => setTab('map')}
                  className="mt-3 text-sm text-olive-light hover:underline"
                >
                  View on map
                </button> */}
              </div>
            </div>
          </div>
        )}

        {/* 2. Service enquiry */}
        {tab === 'enquiry' && (
          <div id="panel-enquiry" role="tabpanel" aria-labelledby="tab-enquiry" className="mx-auto max-w-lg">
            <h2 className="text-center text-3xl font-semibold tracking-tight">Service enquiry</h2>
            <div className="mt-8">
              {submitted ? (
                <div className="rounded-3xl bg-orange/10 border border-orange/30 p-8">
                  <p className="font-medium">WhatsApp opened with your message.</p>
                  <p className="mt-2 text-sm text-ink/60">Tap send there to deliver it to us.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Your name" className={inputClass} />
                  <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="Your phone" className={inputClass} />
                  <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email address" className={inputClass} />
                  <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your project" rows={5} className={inputClass} />
                  <button type="submit" className="px-6 py-3 rounded-full bg-ink text-paper font-semibold hover:bg-ink/90">
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* 3. View on map */}
        {tab === 'map' && (
          <div id="panel-map" role="tabpanel" aria-labelledby="tab-map">
            <h2 className="text-center text-3xl font-semibold tracking-tight">Find us</h2>
            <p className="mt-3 text-center text-sm text-paper/70">{ADDRESS}</p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-paper/10">
              <iframe
                title="EMS WebTech location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-olive-light hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}