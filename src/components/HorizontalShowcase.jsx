import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { services } from '../data/services';

const slides = services.slice(0, 8);

const slideImages = [
  '/assets/images/web-development.jpg',
  '/assets/images/branding.jpg',
  '/assets/images/cms-development.jpg',
  '/assets/images/ecommerce-development.jpg',
  '/assets/images/internet-marketing.jpg',
  '/assets/images/app-development.jpg',
  '/assets/images/domain-hosting.jpg',
  '/assets/images/email-services.jpg',
];

export default function HorizontalShowcase() {
  const containerRef = useRef(null);
  const [viewportH, setViewportH] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 800
  );
  const [viewportW, setViewportW] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1800
  );

  useEffect(() => {
    const update = () => {
      setViewportH(window.innerHeight);
      setViewportW(window.innerWidth);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  // Live progress, recomputed from the section's real position every scroll
  // frame — not a pre-measured boundary. This is what finally guarantees
  // progress hits exactly 0 at the top and exactly 1 at the bottom, no
  // matter what loaded late, what zoom level you're at, or how the
  // scrollbar affects layout.
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 300, damping: 40, mass: 0.2 });

  useEffect(() => {
    let frame = null;

    function measure() {
      frame = null;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - viewportH;
      const scrolled = -rect.top;
      const p = scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 0;
      progress.set(p);
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    measure(); // run once immediately so it's correct before first scroll

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [viewportH, progress]);

  const x = useTransform(
    smoothProgress,
    [0, 1],
    ['0%', `-${(slides.length - 1) * 100}%`]
  );

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative bg-ink"
      style={{ height: `${slides.length * viewportH}px` }}
    >
      <div
        className="sticky top-0 overflow-hidden flex items-center"
        style={{ height: viewportH }}
      >
        <motion.div className="flex" style={{ x }}>
          {slides.map((s, i) => (
            <div
              key={s.slug}
              className="w-full shrink-0 relative flex items-center"
              style={{ height: viewportH }}
            >
              <img
                src={slideImages[i]}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/55" />
              <div className="relative z-10 mx-auto max-w-6xl w-full px-6">
                <span className="text-olive-light font-body text-sm">
                  {String(i + 1).padStart(2, '0')} /{' '}
                  {String(slides.length).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-paper text-3xl md:text-5xl font-semibold max-w-xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-paper/70 max-w-md">{s.short}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}