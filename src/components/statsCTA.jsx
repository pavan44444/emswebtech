import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Blob, Circle, Triangle, Square } from './Shapes';

const stats = [
  { target: 150, suffix: '+', label: 'Projects Delivered' },
  { target: 8, suffix: '+', label: 'Years of Experience' },
  { target: 50, suffix: '+', label: 'Happy Clients' },
  { target: 24, suffix: '/7', label: 'Support & Maintenance' },
];

// Each shape lives at its own "depth" — bigger translateZ + scale reads as
// closer to the viewer, and moves more with mouse parallax than shapes
// further back. That's what sells the 3D feel without a WebGL library.
const floatingShapes = [
  { Shape: Blob, color: 'olive', top: '5%', left: '8%', size: 90, z: 60, float: 7 },
  { Shape: Circle, color: 'orange', top: '15%', left: '78%', size: 60, z: 120, float: 5.5 },
  { Shape: Triangle, color: 'olive-light', top: '55%', left: '4%', size: 70, z: 20, float: 6.5 },
  { Shape: Square, color: 'olive', top: '60%', left: '85%', size: 50, z: 90, float: 8 },
  { Shape: Circle, color: 'olive-light', top: '8%', left: '45%', size: 34, z: 150, float: 4.5 },
  { Shape: Blob, color: 'orange', top: '65%', left: '55%', size: 55, z: 40, float: 6 },
];

function FloatingCluster() {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });

  function handleMouseMove(e) {
    const rect = containerRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="relative h-[320px] md:h-[420px] mb-20"
      style={{ perspective: 1000 }}
    >
      {floatingShapes.map((s, i) => (
        <ParallaxShape key={i} shape={s} springX={springX} springY={springY} />
      ))}

      {/* Center label, floating in the same 3D space */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <p className="text-olive-light font-body text-sm tracking-widest uppercase mb-3">
          The numbers so far
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper max-w-xl">
          Built on results, not guesswork
        </h2>
      </motion.div>
    </div>
  );
}

function ParallaxShape({ shape, springX, springY }) {
  const { Shape, color, top, left, size, z, float } = shape;
  const depthFactor = z / 60; // shapes with bigger z move more with the cursor

  const x = useTransform(springX, (v) => v * depthFactor * 40);
  const y = useTransform(springY, (v) => v * depthFactor * 40);

  return (
    <motion.div
      className="absolute"
      style={{
        top,
        left,
        width: size,
        height: size,
        x,
        y,
        translateZ: z,
        transformStyle: 'preserve-3d',
      }}
      animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
      transition={{ duration: float, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Shape color={color} className="w-full h-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] opacity-80" />
    </motion.div>
  );
}

function CountUp({ target, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }) {
  const cardRef = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(py * -14);
  }
  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative rounded-3xl border border-paper/10 bg-paper/[0.03] backdrop-blur-sm p-8 text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-olive/0 via-olive/0 to-orange/0 group-hover:from-olive/10 group-hover:to-orange/10 transition-all duration-500" />
      <p className="relative font-display text-4xl md:text-6xl font-bold text-gradient tabular-nums">
        <CountUp target={stat.target} suffix={stat.suffix} />
      </p>
      <p className="relative mt-3 text-sm text-paper/60 tracking-wide">{stat.label}</p>
      <span className="absolute -bottom-4 -right-2 font-display text-8xl font-bold text-paper/[0.03] select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.div>
  );
}

export default function StatsCTA() {
  return (
    <section className="relative bg-ink py-24 overflow-hidden">
      <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-olive/20 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-orange/20 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FloatingCluster />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-[2rem] border border-paper/10 bg-gradient-to-r from-paper/[0.04] to-transparent p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-paper max-w-md leading-tight">
              Ready to grow your business online?
            </h3>
            <p className="mt-3 text-paper/60">
              Get a free consultation and quote — no obligation.
            </p>
          </div>

          <a href="/contact" className="group relative shrink-0" data-cursor>
            <span className="absolute inset-0 rounded-full bg-orange/40 blur-md group-hover:blur-lg transition-all animate-pulse" />
            <span className="relative block rounded-full bg-orange px-9 py-4 font-display font-semibold text-ink transition-transform duration-300 group-hover:scale-105">
              Get a Free Quote →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}