import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// One deliberate, orchestrated entrance: letters assemble, a counter
// ticks up to 100, then two olive panels wipe apart to reveal the site.
// This is the single "big motion moment" for the whole experience —
// nothing else on the page animates on load, only on scroll/hover.
const WORD = 'EMS WEBTECH';

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), 200);
      }
    }
    requestAnimationFrame(tick);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <motion.div
        className="absolute inset-0 bg-ink flex items-center justify-center"
        initial={{ clipPath: 'inset(0 0 0% 0)' }}
        animate={exiting ? { clipPath: 'inset(0 0 100% 0)' } : { clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => {
          if (exiting) onDone();
        }}
      >
        <div className="text-center">
          <div className="flex justify-center overflow-hidden">
            {WORD.split('').map((ch, i) => (
              <motion.span
                key={i}
                className="font-display text-paper text-2xl md:text-4xl font-semibold inline-block"
                style={{ width: ch === ' ' ? '0.5em' : undefined }}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ delay: 0.15 + i * 0.035, duration: 0.5, ease: 'easeOut' }}
              >
                {ch}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="mt-6 font-body text-olive-light text-sm tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {count}%
          </motion.div>
          <div className="mt-3 h-[2px] w-40 mx-auto bg-white/10 overflow-hidden rounded-full">
            <motion.div className="h-full bg-olive" style={{ width: `${count}%` }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
