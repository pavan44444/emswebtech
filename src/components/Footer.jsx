import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { contactInfo } from '../data/promos';
import { Blob } from './Shapes';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/who-we-are', label: 'Who we are' },
  { to: '/services/web-design-development', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  {
    label: 'X',
    href: '#',
    hover: {
      rotate: 90,
      transition: { duration: 0.3 },
    },
    path: 'M18.24 2.5h3.3l-7.2 8.23L22.8 21.5h-6.63l-5.19-6.78-5.94 6.78H1.74l7.7-8.8L1.2 2.5h6.8l4.7 6.2 5.54-6.2Zm-1.16 17.02h1.83L6.9 4.38H4.95l12.13 15.14Z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    hover: {
      y: -7,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 8,
      },
    },
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 9.5h5.16V22H2.4V9.5Zm7.98 0h4.95v1.71h.07c.69-1.23 2.37-2.53 4.88-2.53 5.22 0 6.18 3.23 6.18 7.44V22h-5.16v-6.89c0-1.64-.03-3.75-2.36-3.75-2.37 0-2.73 1.77-2.73 3.63V22H10.4V9.5Z',
  },
  {
    label: 'Facebook',
    href: '#',
    hover: {
      rotate: [0, -14, 12, -8, 6, 0],
      transition: { duration: 0.6 },
    },
    path: 'M14.5 22v-8.1h2.72l.41-3.16h-3.13V8.73c0-.92.25-1.54 1.57-1.54h1.68V4.36A22.6 22.6 0 0 0 15.24 4.2c-2.4 0-4.04 1.47-4.04 4.16v2.38H8.47v3.16h2.73V22h3.3Z',
  },
  {
    label: 'YouTube',
    href: '#',
    hover: {
      scale: 1.22,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 10,
      },
    },
    path: 'M22.5 7.2a3 3 0 0 0-2.11-2.13C18.6 4.6 12 4.6 12 4.6s-6.6 0-8.39.47A3 3 0 0 0 1.5 7.2 31 31 0 0 0 1 12.4a31 31 0 0 0 .5 5.2 3 3 0 0 0 2.11 2.13c1.79.47 8.39.47 8.39.47s6.6 0 8.39-.47a3 3 0 0 0 2.11-2.13 31 31 0 0 0 .5-5.2 31 31 0 0 0-.5-5.2ZM9.8 15.6V9.2l5.6 3.2-5.6 3.2Z',
    fillRule: 'evenodd',
  },
  {
    label: 'Google',
    href: '#',
    hover: {
      rotate: 360,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
      },
    },
    path: 'M21.6 12.23c0-.68-.06-1.36-.19-2H12v3.78h5.4a4.62 4.62 0 0 1-2 3.03v2.5h3.24c1.9-1.75 2.96-4.34 2.96-7.31Z M12 22c2.7 0 4.97-.89 6.63-2.42l-3.24-2.5c-.9.6-2.06.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22Z M6.41 13.92a5.99 5.99 0 0 1 0-3.84V7.49H3.07a10 10 0 0 0 0 9.02l3.34-2.6Z M12 6.04c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.93 5.49l3.34 2.6c.79-2.37 2.99-4.05 5.59-4.05Z',
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink overflow-hidden border-t border-paper/10">
      {/* Ambient glow field behind the wordmark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-olive/25 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-orange/20 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-0 right-1/4 w-[350px] h-[300px] rounded-full bg-olive-light/15 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 pt-14">
        {/* Top row: contact + nav + CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 border-b border-paper/10">
          <div>
            <p className="text-xs text-paper/40 uppercase tracking-[0.2em] mb-1">
              Contact us at
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="text-paper font-medium hover:text-olive-light transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-paper/60">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-paper transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            data-cursor
            className="shrink-0 px-5 py-2.5 rounded-full bg-olive text-ink text-sm font-semibold hover:bg-olive-dark hover:shadow-glow transition-all w-max"
          >
            Get in touch
          </Link>
        </div>

        {/* Giant wordmark */}
        <div className="py-16 md:py-24 flex items-center justify-center gap-3 md:gap-6">
          <Blob
            color="olive"
            className="w-12 h-12 md:w-20 md:h-20 shrink-0"
          />

          <h2 className="font-display font-bold text-gradient text-[13vw] md:text-[8vw] leading-none tracking-tight whitespace-nowrap">
            EMS Webtech
          </h2>
        </div>

        {/* Secondary info row */}
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-paper/10">
          {/* Reach us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper/40">
              Reach us
            </h4>

            <div className="mt-4 space-y-1 text-sm">
              {contactInfo.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, '')}`}
                  className="block text-paper/60 hover:text-olive-light transition-colors"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Our services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper/40">
              Our services
            </h4>

            <ul className="mt-4 space-y-1.5 text-sm">
              {services.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-paper/60 hover:text-paper transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Find us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper/40">
              Find us
            </h4>

            <div className="mt-4 rounded-2xl overflow-hidden border border-paper/10 h-32">
              <iframe
                title="EMS Webtech location"
                src={contactInfo.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar: copyright + animated socials */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 py-6 text-xs text-paper/40">
          <p>
            © {new Date().getFullYear()} EMS Webtech · Powered by{' '}
            <a
              href="https://emswebtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/60 hover:text-olive-light transition-colors"
            >
              emswebtech.com
            </a>
          </p>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                data-cursor
                whileHover={s.hover}
                className="w-9 h-9 rounded-full border border-paper/15 flex items-center justify-center text-paper/60 hover:text-paper hover:border-olive-light/50 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  fillRule={s.fillRule}
                >
                  <path d={s.path} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}