import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

// Single full-bleed image hero with a subtle scroll-parallax on the
// background only — the one big motion moment on load, everything else
// on the page stays quiet until the user scrolls or hovers.
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[560px] overflow-hidden flex items-end">
      <motion.div className="absolute inset-0" style={{ y }}>
        {/* TODO: replace with your own licensed 4K photo (e.g. team at work,
            a client site on screen). Placeholder from Lorem Picsum for now. */}
        <img
          src="/assets/images/emswebtech-hero.jpg"
          alt="EMS Webtech team at work"
          className="w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      </motion.div>

      <motion.div className="relative z-10 mx-auto max-w-6xl w-full px-6 pb-16 md:pb-24" style={{ opacity: fade }}>
        <p className="text-olive-light font-body text-sm tracking-widest uppercase mb-4">
          Bangalore · Web design &amp; development
        </p>
        <h1 className="font-display text-paper text-4xl md:text-7xl font-semibold leading-[1.05] max-w-3xl">
          Websites with a pulse.
        </h1>
        <p className="mt-6 text-paper/70 max-w-lg text-lg">
          We design, build and promote websites that get noticed — sharp
          design backed by real technical skill.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-orange text-paper font-semibold hover:bg-orange-dark transition-colors"
          >
            Start a project
          </Link>
          <a
            href="#showcase"
            className="px-6 py-3 rounded-full border border-paper/30 text-paper font-medium hover:border-paper/60 transition-colors"
          >
            See our work
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-paper/60 text-xs tracking-widest uppercase"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
