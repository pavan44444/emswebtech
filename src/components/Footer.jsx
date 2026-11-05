import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { contactInfo } from '../data/promos';
import { Blob } from './Shapes';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/who-we-are', label: 'Who we are' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    background: '#1877F2',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    href: '#',
    background:
      'linear-gradient(45deg, #FEDA75 0%, #FA7E1E 25%, #D62976 50%, #962FBF 75%, #4F5BD5 100%)',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'X',
    href: 'https://x.com/emswebtech',
    background: '#000000',
    path: 'M18.24 2.5h3.3l-7.2 8.23L22.8 21.5h-6.63l-5.19-6.78-5.94 6.78H1.74l7.7-8.8L1.2 2.5h6.8l4.7 6.2 5.54-6.2Zm-1.16 17.02h1.83L6.9 4.38H4.95l12.13 15.14Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/emswebtech/',
    background: '#0A66C2',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 9.5h5.16V22H2.4V9.5Zm7.98 0h4.95v1.71h.07c.69-1.23 2.37-2.53 4.88-2.53 5.22 0 6.18 3.23 6.18 7.44V22h-5.16v-6.89c0-1.64-.03-3.75-2.36-3.75-2.37 0-2.73 1.77-2.73 3.63V22H10.4V9.5Z',
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

        {/* Our services: all main services, 5 per row */}
        <div className="pb-12 border-b border-paper/10">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper/40">
            Our services
          </h4>

          <ul className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-paper/60 hover:text-olive-light transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary info row */}
        <div className="grid md:grid-cols-2 gap-10 pt-12 pb-12 border-b border-paper/10">
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

          <div className="flex items-center justify-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                data-cursor
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: s.background }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
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