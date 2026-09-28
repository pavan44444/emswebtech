import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import '../pages/services.css';

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function Services() {
  useEffect(() => {
    document.title = 'Services | EMS WebTech';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="svc-page">
      <section className="svc-banner">
        <div className="svc-wrap">
          <nav className="svc-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Services</span>
          </nav>
          <h1>What we do</h1>
          <p>Eight ways we help your business build, brand and grow online. Pick one to see what's included.</p>
        </div>
      </section>

      <section className="svc-wrap svc-grid-section">
        <div className="svc-grid">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className={`svc-card tone-${s.color}`}
              aria-label={`${s.title} – view details`}
            >
              <img
                src={s.image}
                alt=""
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className={`svc-shape shape-${s.shape} color-${s.color}`} aria-hidden="true" />
              <div className="svc-card-content">
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="svc-card-arrow"><ArrowUpRight /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="svc-wrap">
        <div className="svc-cta">
          <h2>Not sure where to start?</h2>
          <p>Tell us about your business and goals, and we'll recommend the right mix of services.</p>
          <Link to="/contact" className="svc-btn">Talk to us</Link>
        </div>
      </section>
    </main>
  );
}