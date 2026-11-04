import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { menuServices } from '../data/services';

// Order of the menu: Home, What we do (dropdown), Industry, Who we are, Contact us
const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'What we do', dropdown: true },
  { to: '/industries', label: 'Industry' },
  { to: '/who-we-are', label: 'Who we are' },
  { to: '/contact', label: 'Contact us' },
];

// Remove duplicate services (same slug) so nothing repeats in the menus
const uniqueServices = menuServices.filter(
  (s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i
);

// Desktop dropdown: 3 columns x 4 services each (first 12 items)
const columns = [0, 1, 2].map((c) => uniqueServices.slice(c * 5, c * 5 + 5));
export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  // Lock body scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close menus when the route changes
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 border-b border-paper/10 bg-ink/70 backdrop-blur-xl"
        animate={{ paddingTop: scrolled ? 10 : 20, paddingBottom: scrolled ? 10 : 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between gap-6">
          {/* Logo (image) */}
          <Link
            to="/"
            className="shrink-0 rounded-lg bg-paper px-3 py-1.5"
            aria-label="EMS Webtech home"
          >
            <img
              src="/assets/images/logo.png"
              alt="EMS Webtech"
              style={{ height: 30, width: 'auto', display: 'block' }}
            />
          </Link>

          {/* ---------- Desktop nav ---------- */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.to}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="text-sm font-medium text-paper/70 hover:text-paper flex items-center gap-1.5">
                      {item.label}
                      <motion.svg
                        width="10" height="6" viewBox="0 0 10 6" className="fill-current"
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <path d="M0 0L5 6L10 0Z" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, x: '-50%' }}
                          animate={{ opacity: 1, y: 0, x: '-50%' }}
                          exit={{ opacity: 0, y: 8, x: '-50%' }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full pt-3 w-[min(860px,92vw)]"
                        >
                          <div className="bg-ink border border-paper/10 rounded-2xl shadow-glow p-3 grid grid-cols-3 gap-3">
                            {columns.map((col, ci) => (
                              <div
                                key={ci}
                                className="rounded-xl bg-paper/5 border border-paper/10 p-2 flex flex-col gap-1"
                              >
                                {col.map((s, i) => (
                                  <motion.div
                                    key={s.slug}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (ci * 4 + i) * 0.03 }}
                                  >
                                    <Link
                                      to={`/services/${s.slug}`}
                                      className="block px-3 py-2.5 rounded-lg text-sm text-paper/70 hover:bg-paper/10 hover:text-paper transition-colors"
                                    >
                                      {s.title}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = item.end
                ? location.pathname === item.to
                : location.pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className="relative py-1 text-sm font-medium text-paper/70 hover:text-paper transition-colors"
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-orange rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-sm font-semibold px-4 py-2 rounded-full bg-olive text-ink hover:bg-olive-dark hover:shadow-glow transition-all"
            >
              Get a quote
            </Link>
          </div>

          {/* ---------- Mobile hamburger ---------- */}
          <button
            className="md:hidden relative z-[60] p-2 w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <motion.span
              className="block h-[2px] w-6 bg-paper rounded-full"
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-[2px] w-6 bg-paper rounded-full"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-[2px] w-6 bg-paper rounded-full"
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.header>

      {/* ---------- Mobile menu (scrollable) ---------- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink md:hidden overflow-y-auto overscroll-contain px-6 pt-24 pb-12"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <div key={item.to}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                  >
                    {item.dropdown ? (
                      <button
                        onClick={() => setServicesOpen((v) => !v)}
                        className="w-full flex items-center justify-between font-display text-3xl font-semibold text-paper py-3"
                        aria-expanded={servicesOpen}
                      >
                        {item.label}
                        <motion.svg
                          width="14" height="8" viewBox="0 0 10 6" className="fill-current"
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <path d="M0 0L5 6L10 0Z" />
                        </motion.svg>
                      </button>
                    ) : (
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block font-display text-3xl font-semibold text-paper py-3 hover:text-olive-light transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {item.dropdown && servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-2 pb-3 grid grid-cols-1 gap-0.5 border-l border-paper/10">
                          {uniqueServices.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="block text-paper/60 text-base py-2 pl-4 hover:text-paper transition-colors"
                            >
                              {s.title}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            onClick={() => setMobileOpen(false)}
                            className="block text-olive-light text-base py-2 pl-4"
                          >
                            View all services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 text-center text-base font-semibold px-6 py-3 rounded-full bg-olive text-ink"
              >
                Get a quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}