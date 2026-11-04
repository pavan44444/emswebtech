import { motion } from 'framer-motion';
import { promos } from '../data/promos';
import { Shape } from './Shapes';

const q = '?auto=format&fit=crop&w=1000&q=80';
const promoMedia = [
  { src: `https://images.unsplash.com/photo-1499750310107-5fef28a66643${q}`, tag: 'Content' },
  { src: `https://images.unsplash.com/photo-1460925895917-afdab827c52f${q}`, tag: 'Paid Ads' },
  { src: `https://images.unsplash.com/photo-1524661135-423995f22d0b${q}`, tag: 'Google Presence' },
  { src: `https://images.unsplash.com/photo-1451187580459-43490279c0fa${q}`, tag: 'Domains' },
];

// One radium green face for all four cards
const cardStyle = {
  bg: 'bg-[#B6FF1A]',
  accent: 'text-ink/70',
  pill: 'bg-ink text-[#B6FF1A]',
};

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

/* ---------- One card ---------- */
function PromoCard({ promo, i, total }) {
  const style = cardStyle;
  const media = promoMedia[i % promoMedia.length];

  return (
    <div
      className={`group relative h-full flex flex-col rounded-[2rem] overflow-hidden ${style.bg} shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]`}
    >
      {/* image on top */}
      <div className="order-1 relative p-4">
        <div className="relative h-40 rounded-[1.5rem] overflow-hidden shadow-2xl ring-4 ring-ink/10">
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
          className={`absolute -top-2 right-2 w-16 h-16 rounded-full ${style.pill} flex items-center justify-center shadow-xl`}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        >
          <Shape shape={promo.shape} color="olive" className="w-8 h-8" />
        </motion.div>
      </div>

      {/* text below */}
      <div className="order-2 p-6 flex-1">
        <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${style.pill}`}>
          {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>

        <h3 className="mt-5 font-display text-2xl font-bold text-ink">
          {promo.title}
        </h3>

        <p className={`mt-4 leading-relaxed ${style.accent}`}>
          {promo.body}
        </p>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function PromoGrid() {
  const total = promos.length;

  return (
    <section className="relative bg-ink">
      <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-32 pb-12 md:pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-paper/40 mb-3">
          More ways we help
        </p>
        <FoldHeading />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promos.map((promo, i) => (
            <PromoCard key={promo.title} promo={promo} i={i} total={total} />
          ))}
        </div>
      </div>
    </section>
  );
}