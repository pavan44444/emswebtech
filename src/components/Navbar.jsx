import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { services } from '../data/services';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  // Lock body scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/who-we-are', label: 'Who we are' },
    { to: '/contact', label: 'Contact us' },
  ];

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 border-b border-paper/10 bg-ink/70 backdrop-blur-xl"
        animate={{ paddingTop: scrolled ? 10 : 20, paddingBottom: scrolled ? 10 : 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <Link to="/" className="group font-display text-xl font-semibold tracking-tight text-paper">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
              EMS
            </span>{' '}
            <span className="text-olive-light inline-block transition-transform duration-300 group-hover:translate-y-0.5">
              Webtech
            </span>
            <motion.span
              className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-orange align-middle"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
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

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-sm font-medium text-paper/70 hover:text-paper flex items-center gap-1.5">
                What we do
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
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72"
                  >
                    <div className="bg-ink border border-paper/10 rounded-2xl shadow-glow p-2 grid grid-cols-1 gap-1">
                      {services.map((s, i) => (
                        <motion.div
                          key={s.slug}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <Link
                            to={`/services/${s.slug}`}
                            className="block px-3 py-2 rounded-xl text-sm text-paper/70 hover:bg-paper/5 hover:text-paper"
                          >
                            {s.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>


<div className="hidden md:flex items-center gap-3">
  
   <a href="tel:+919886633336"
    className="text-sm font-medium px-4 py-2 rounded-full border border-paper/20 hover:border-paper/40 text-paper/80 hover:text-paper transition-colors">
  
    Call us
 </a> 
            <Link
              to="/contact"
              className="text-sm font-semibold px-4 py-2 rounded-full bg-olive text-ink hover:bg-olive-dark hover:shadow-glow transition-all"
            >
              Get a quote
            </Link>
          </div>

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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink md:hidden flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-2">
              {[...navItems, { to: '/services', label: null }].filter((i) => i.label !== null).map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block font-display text-4xl font-semibold text-paper py-3 hover:text-olive-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {services.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    to={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-paper/50 text-lg py-1.5 hover:text-paper transition-colors"
                  >
                    {s.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}