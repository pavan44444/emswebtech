import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../data/industries';
import './industries.css';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export default function Industries() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const barRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);
  const n = industries.length;

  useEffect(() => {
    document.title = 'Industries We Serve | EMS WebTech';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = null;

    const update = () => {
      frame = null;
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!section || !stage) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - stage.getBoundingClientRect().height;
      const p = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      const pos = p * (n - 1); // 0 .. n-1

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        // Card 0 is already in place; every other card slides in from the right.
        const enter = i === 0 ? 1 : easeOut(clamp(pos - (i - 1), 0, 1));
        // How far this card has been buried under later cards (capped for a tidy deck).
        const depth = Math.min(3, clamp(pos - i, 0, n));
        card.style.transform =
          `translate3d(calc(${(1 - enter) * 100}vw - ${depth * 22}px), ${-depth * 12}px, 0) ` +
          `scale(${1 - depth * 0.045})`;
        card.style.setProperty('--dim', String(depth * 0.16));
      });

      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      setActive(Math.round(pos));
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [n]);

  return (
    <main className="ind-page">
      <section className="ind-banner">
        <div className="ind-wrap">
          <nav className="ind-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Industries</span>
          </nav>
          <h1>Built for your industry</h1>
          <p>Every industry has different goals and constraints. Keep scrolling to see how we adapt across the sectors we serve most.</p>
        </div>
      </section>

      <section className="ind-stack" ref={sectionRef} style={{ '--n': n }}>
        <div className="ind-stage" ref={stageRef}>
          {industries.map((item, i) => (
            <article
              key={item.slug}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`ind-card tone-${item.color}${i % 2 ? ' flip' : ''}`}
              style={{ zIndex: i + 1, transform: i === 0 ? 'none' : 'translate3d(100vw,0,0)' }}
            >
              <div className={`ind-media tone-${item.color}`}>
                <span className={`ind-shape shape-${item.shape} color-${item.color}`} aria-hidden="true" />
                <img
                  src={item.image}
                  alt={`${item.title} industry`}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="ind-body">
                <h2>{item.title}</h2>
                <p className="ind-tagline">{item.tagline}</p>
                <ul>
                  {item.solutions.map((s) => (
                    <li key={s}>
                      <span className={`ind-dot color-${item.color}`} aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="ind-btn" tabIndex={i === active ? 0 : -1}>
                  Talk about your {item.title.toLowerCase()} project
                </Link>
              </div>
            </article>
          ))}

          <div className="ind-progress" aria-hidden="true">
            <span className="ind-count">{active + 1} / {n}</span>
            <span className="ind-track"><span className="ind-bar" ref={barRef} /></span>
          </div>
        </div>
      </section>

      <section className="ind-wrap">
        <div className="ind-cta">
          <h2>Don't see your industry?</h2>
          <p>We work across sectors. Tell us about your business and we'll show you how we can help.</p>
          <Link to="/contact" className="ind-btn ind-btn-light">Talk to us</Link>
        </div>
      </section>
    </main>
  );
}