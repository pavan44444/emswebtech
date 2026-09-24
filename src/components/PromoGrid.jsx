import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { promos } from '../data/promos';
import { Shape } from './Shapes';

const q = '?auto=format&fit=crop&w=1000&q=80';
const promoMedia = [
  { src: `https://images.unsplash.com/photo-1499750310107-5fef28a66643${q}`, tag: 'Content' },
  { src: `https://images.unsplash.com/photo-1460925895917-afdab827c52f${q}`, tag: 'Paid Ads' },
  { src: `https://images.unsplash.com/photo-1524661135-423995f22d0b${q}`, tag: 'Google Presence' },
  { src: `https://images.unsplash.com/photo-1451187580459-43490279c0fa${q}`, tag: 'Domains' },
];

// One radium green face for all four cards (arbitrary values, so no tailwind config needed).
const cardStyle = {
  bg: 'bg-[#B6FF1A]',
  glow: 'bg-[#B6FF1A]/40',
  accent: 'text-ink/70',
  pill: 'bg-ink text-[#B6FF1A]',
};

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

/* ---------- Heading: letters fold down one by one ---------- */
const headingParts = [
  { text: 'A few more ways we keep you', cls: '' },
  { text: 'moving.', cls: 'text-gradient' },
];

const foldParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};
const foldLetter = {
  hidden: { rotateX: -90, opacity: 0 },
  show: {
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function FoldHeading() {
  const label = headingParts.map((p) => p.text).join(' ');
  return (
    <motion.h2
      aria-label={label}
      className="font-display text-4xl md:text-6xl font-bold text-paper max-w-2xl"
      variants={foldParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
    >
      {headingParts.map((part, pi) => (
        <span key={pi} aria-hidden="true">
          {part.text.split(' ').map((word, wi) => (
            <span key={wi}>
              <span className="inline-block whitespace-nowrap" style={{ perspective: 700 }}>
                {word.split('').map((ch, ci) => (
                  <motion.span
                    key={ci}
                    className={`inline-block ${part.cls}`}
                    style={{ transformOrigin: '50% 0%', backfaceVisibility: 'hidden' }}
                    variants={foldLetter}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>{' '}
            </span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}

/* ---------- One card, driven by scroll progress ---------- */
function PromoCard({ promo, i, total, step, progress }) {
  const style = cardStyle;
  const media = promoMedia[i % promoMedia.length];
  const reversed = i % 2 === 1;

  // e: 0 -> 1 while this card slides in (card 0 is already in place)
  const e = useTransform(progress, (v) => {
    if (i === 0) return 1;
    const t = clamp(v / step - (i - 1), 0, 1);
    return 1 - Math.pow(1 - t, 3); // ease-out
  });
  // d: how many cards have landed on top of this one
  const d = useTransform(progress, (v) => clamp(v / step - i, 0, total - 1 - i));

  const x = useTransform(e, (v) => `${(1 - v) * 100}vw`);
  const y = useTransform(d, (v) => -v * 28);
  const z = useTransform([e, d], ([ev, dv]) => -(1 - ev) * 600 - dv * 140);
  const rotateY = useTransform([e, d], ([ev, dv]) => (1 - ev) * 40 - dv * 6);
  const rotateX = useTransform(e, (v) => (1 - v) * 10);
  const scale = useTransform([e, d], ([ev, dv]) => 0.8 + 0.2 * ev - dv * 0.05);
  const opacity = useTransform(e, [0, 0.2], [0, 1]);
  const dim = useTransform(d, (v) => Math.min(v * 0.28, 0.7));

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-6"
      style={{ x, y, z, rotateX, rotateY, scale, opacity, zIndex: i, willChange: 'transform' }}
    >
      <div className="relative w-full max-w-5xl">
        {/* Glow halo — makes the light card visibly "lit" against the dark page */}
        <div className={`absolute -inset-6 rounded-[3rem] ${style.glow} blur-[60px] pointer-events-none`} />

        <div
          className={`group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden ${style.bg} grid md:grid-cols-2 min-h-[60vh] md:min-h-[480px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]`}
        >
          {/* darkens cards that are buried under newer ones */}
          <motion.div
            className="absolute inset-0 bg-ink pointer-events-none z-10"
            style={{ opacity: dim }}
          />

          <div className={`p-8 md:p-14 flex flex-col justify-between ${reversed ? 'md:order-2' : ''}`}>
            <div>
              <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${style.pill}`}>
                {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>

              <h3 className="mt-6 font-display text-3xl md:text-5xl font-bold text-ink">
                {promo.title}
              </h3>

              <p className={`mt-5 max-w-sm leading-relaxed ${style.accent}`}>
                {promo.body}
              </p>
            </div>

            {/* <Link
              to={promo.href}
              data-cursor
              className="group inline-flex items-center gap-2 mt-10 w-max px-6 py-3 rounded-full bg-ink text-paper hover:scale-105 transition-transform"
            >
              Explore this service
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link> */}
          </div>

          <div className={`relative min-h-[260px] md:min-h-0 p-4 md:p-8 ${reversed ? 'md:order-1' : ''}`}>
            {/* tilted photo frame, straightens on hover */}
            <div
              className={`relative h-full min-h-[260px] rounded-[1.5rem] md:rounded-[2.25rem] overflow-hidden shadow-2xl ring-4 ring-ink/10 transition-transform duration-700 ease-out group-hover:rotate-0 ${
                reversed ? 'md:-rotate-2' : 'md:rotate-2'
              }`}
            >
              {/* fallback sits BEHIND the image */}
              <div className="absolute inset-0 flex items-center justify-center bg-ink/10">
                <Shape shape={promo.shape} color="olive" className="w-24 h-24 opacity-30" />
              </div>

              <img
                src={media.src}
                alt={promo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                onError={(ev) => { ev.currentTarget.style.display = 'none'; }}
              />

              {/* readability gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />

              {/* tag chip */}
              <span className="absolute left-4 bottom-4 px-3 py-1.5 rounded-full bg-paper/90 backdrop-blur text-ink text-xs font-semibold uppercase tracking-widest">
                {media.tag}
              </span>
            </div>

            {/* floating sticker shape */}
            <motion.div
              className={`absolute -top-2 ${reversed ? 'left-2 md:-left-4' : 'right-2 md:-right-4'} w-16 h-16 md:w-20 md:h-20 rounded-full ${style.pill} flex items-center justify-center shadow-xl`}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            >
              <Shape shape={promo.shape} color="olive" className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Section ---------- */
export default function PromoGrid() {
  const trackRef = useRef(null);
  const total = promos.length;
  // each card gets one 100vh of scroll; last half-screen is a hold
  const step = 1 / (total - 0.5);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    // NOTE: no overflow-hidden here — it would break the sticky pin below
    <section className="relative bg-ink">
      <div className="mx-auto max-w-5xl px-6 pt-20 md:pt-32 pb-12 md:pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-paper/40 mb-3">
          More ways we help
        </p>
        <FoldHeading />
      </div>

      {/* tall track = scroll distance; sticky stage stays pinned while cards fly in */}
      <div ref={trackRef} style={{ height: `${(total + 0.5) * 100}vh` }}>
        <div
          className="sticky top-0 h-screen overflow-hidden"
          style={{ perspective: '1600px' }}
        >
          {promos.map((promo, i) => (
            <PromoCard
              key={promo.title}
              promo={promo}
              i={i}
              total={total}
              step={step}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}