import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(y, { damping: 25, stiffness: 300, mass: 0.5 });
  const hoverables = useRef(null);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFine);
    if (!isFine) return;

    document.body.classList.add('cursor-none-active');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move);

    const attach = () => {
      hoverables.current = document.querySelectorAll('a, button, [data-cursor]');
      hoverables.current.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };
    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
      document.body.classList.remove('cursor-none-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full bg-orange mix-blend-difference"
        style={{ x, y, width: 8, height: 8, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full border border-paper/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ width: hovering ? 56 : 32, height: hovering ? 56 : 32, opacity: hovering ? 0.9 : 0.5 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </>
  );
}