import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../data/industries';
import './industries.css';

export default function Industries() {
  useEffect(() => {
    document.title = 'Industries We Serve | EMS WebTech';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="ind-page">
      <section className="ind-banner">
        <div className="ind-wrap">
          <nav className="ind-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Industries</span>
          </nav>
          <h1>Built for your industry</h1>
          <p>Every industry has different goals and constraints. Here is how we adapt across the sectors we serve most.</p>
        </div>
      </section>

      <section className="ind-wrap ind-list">
        <div className="ind-grid">
          {industries.map((item, i) => (
            <article key={item.slug} className="ind-card">
              <div className={`ind-media tone-${item.color}`}>
                <span className={`ind-shape shape-${item.shape} color-${item.color}`} aria-hidden="true" />
                <img
                  src={item.image}
                  alt={`${item.title} industry`}
                  loading={i < 3 ? 'eager' : 'lazy'}
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
                <Link to="/contact" className="ind-btn">
                  Talk about your {item.title.toLowerCase()} project
                </Link>
              </div>
            </article>
          ))}
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