import { useState } from 'react';
import { contactInfo } from '../data/promos';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form backend / email service of choice.
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">Let's talk</h1>
        <p className="mt-4 text-ink/70">
          Tell us a little about your project and we'll get back to you.
        </p>

        <div className="mt-8 space-y-2 text-sm">
          {contactInfo.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-olive-dark">
              {p}
            </a>
          ))}
          <a href={`mailto:${contactInfo.email}`} className="block hover:text-olive-dark">
            {contactInfo.email}
          </a>
        </div>
      </div>

      <div>
        {submitted ? (
          <div className="rounded-3xl bg-orange/10 border border-orange/30 p-8">
            <p className="font-medium">Thanks — message sent.</p>
            <p className="mt-2 text-sm text-ink/60">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:outline-none focus:border-olive"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:outline-none focus:border-olive"
            />
            <textarea
              required
              placeholder="Tell us about your project"
              rows={5}
              className="w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:outline-none focus:border-olive"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-ink text-paper font-semibold hover:bg-ink/90"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
