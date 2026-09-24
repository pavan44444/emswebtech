import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { promos } from '../data/promos';
import { Shape } from './Shapes';

const promoImages = [
  '/assets/images/promo-content.jpg',
  '/assets/images/promo-ppc.jpg',
  '/assets/images/promo-google.jpg',
  '/assets/images/promo-domain.jpg',
];

// Bright, saturated card faces — deliberate contrast against the dark page.
// text-ink everywhere here since these cards are light, not dark.
const cardStyles = [
  { bg: 'bg-paper', glow: 'bg-paper/40', accent: 'text-olive-dark', pill: 'bg-olive text-paper' },
  { bg: 'bg-olive-light', glow: 'bg-olive-light/50', accent: 'text-ink/70', pill: 'bg-ink text-paper' },
  { bg: 'bg-orange', glow: 'bg-orange/50', accent: 'text-ink/70', pill: 'bg-ink text-paper' },
  { bg: 'bg-paper', glow: 'bg-paper/40', accent: 'text-orange-dark', pill: 'bg-orange text-ink' },
];

export default function PromoGrid() {
  return (
    <section className="relative bg-ink py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-paper/40 mb-3">
          More ways we help
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-paper max-w-2xl mb-16 md:mb-20">
          A few more ways we keep you{' '}
          <span className="text-gradient">moving.</span>
        </h2>

        <div className="relative">
          {promos.map((promo, i) => {
            const style = cardStyles[i % cardStyles.length];
            const reversed = i % 2 === 1;

            return (
              <motion.div
                key={promo.title}
                className="sticky"
                style={{ top: `${5 + i * 4}vh`, marginTop: i === 0 ? 0 : '-6vh' }}
                initial={{ opacity: 0, y: 80, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Glow halo — makes the light card visibly "lit" against the dark page */}
                <div className={`absolute -inset-6 rounded-[3rem] ${style.glow} blur-[60px] pointer-events-none`} />

                <div
                  className={`relative rounded-[2rem] md:rounded-[3rem] overflow-hidden ${style.bg} grid md:grid-cols-2 min-h-[60vh] md:min-h-[480px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]`}
                >
                  <div
                    className={`p-8 md:p-14 flex flex-col justify-between ${reversed ? 'md:order-2' : ''}`}
                  >
                    <div>
                      <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${style.pill}`}>
                        {String(i + 1).padStart(2, '0')} / {String(promos.length).padStart(2, '0')}
                      </span>

                      <h3 className="mt-6 font-display text-3xl md:text-5xl font-bold text-ink">
                        {promo.title}
                      </h3>

                      <p className={`mt-5 max-w-sm leading-relaxed ${style.accent}`}>
                        {promo.body}
                      </p>
                    </div>

                    <Link
                      to={promo.href}
                      data-cursor
                      className="group inline-flex items-center gap-2 mt-10 w-max px-6 py-3 rounded-full bg-ink text-paper hover:scale-105 transition-transform"
                    >
                      Explore this service
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  <div className={`relative min-h-[240px] md:min-h-0 ${reversed ? 'md:order-1' : ''}`}>
                    <img
                      src={promoImages[i]}
                      alt={promo.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className={`absolute inset-0 flex items-center justify-center ${style.bg}`} style={{ mixBlendMode: 'normal' }}>
                      <Shape shape={promo.shape} color="olive" className="w-24 h-24 opacity-20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}