import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { pillars } from '../data/pillars';
import { Blob, Circle, Triangle, Square } from './Shapes';

const shapeMap = { olive: Blob, orange: Circle, 'olive-light': Triangle };
const glowMap = {
  olive: 'shadow-glow',
  orange: 'shadow-glowOrange',
  'olive-light': 'shadow-glow',
};
const dotMap = { olive: 'bg-olive', orange: 'bg-orange', 'olive-light': 'bg-olive-light' };
const textAccent = { olive: 'text-olive-light', orange: 'text-orange', 'olive-light': 'text-olive-light' };

const pillarImages = {
  design: '/assets/images/pillar-design.jpg',
  develop: '/assets/images/pillar-develop.jpg',
  promote: '/assets/images/pillar-promote.jpg',
  support: '/assets/images/pillar-support.jpg',
};

function PillarRow({ pillar, index }) {
  const ShapeIcon = shapeMap[pillar.color] || Circle;
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative grid md:grid-cols-2 gap-10 items-center py-16 ${
        reversed ? 'md:[direction:rtl]' : ''
      }`}
    >
      {/* Timeline dot, aligned to this row */}
      <span
        className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${dotMap[pillar.color]} ${glowMap[pillar.color]} z-10`}
      />

      <div style={{ direction: 'ltr' }} className="relative">
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-paper/10 bg-gradient-to-br from-paper/[0.06] to-transparent">
          <img
            src={pillarImages[pillar.key]}
            alt={pillar.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <ShapeIcon color={pillar.color} className="absolute bottom-6 left-6 w-14 h-14 drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]" />
        </div>
      </div>

      <div style={{ direction: 'ltr' }} className="relative">
        <span className={`font-accent text-sm tracking-[0.2em] uppercase ${textAccent[pillar.color]}`}>
          {String(index + 1).padStart(2, '0')} / 04
        </span>
        <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-paper">
          {pillar.title}
        </h3>
        <p className="mt-4 text-paper/60 leading-relaxed">{pillar.intro}</p>

        <ul className="mt-8 space-y-4">
          {pillar.points.map((pt) => (
            <li key={pt.label} className="flex gap-3">
              <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${dotMap[pillar.color]}`} />
              <div>
                <p className="text-sm font-medium text-paper/90">{pt.label}</p>
                <p className="text-sm text-paper/50 mt-0.5">{pt.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Pillars() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative bg-ink py-24 overflow-hidden">
      <div className="absolute top-1/3 -left-24 w-96 h-96 rounded-full bg-olive/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-orange/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-12">
          <p className="text-olive-light font-body text-sm tracking-[0.2em] uppercase mb-3">
            What we offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-paper">
            Four ways we get you <span className="text-gradient">online, and noticed.</span>
          </h2>
          <p className="mt-4 text-paper/60">
            Design, build, promotion and the ongoing support that keeps it
            all running.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Static track + animated fill, behind the rows */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-paper/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-olive-light via-orange to-olive-light"
          />

          {pillars.map((p, i) => (
            <PillarRow key={p.key} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}