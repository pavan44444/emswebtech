import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getServiceBySlug, services } from '../data/services';
import './services.css';
function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}
// const steps = [
//   { title: 'Discover', text: 'We learn about your business, audience and goals.' },
//   { title: 'Plan & design', text: 'We map out the approach and share designs for your feedback.' },
//   { title: 'Build', text: 'We develop, test and refine until it works the way it should.' },
//   { title: 'Launch & support', text: 'We go live and stay on hand as you grow.' },
// ];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    document.title = service ? `${service.title} | EMS WebTech` : 'Service not found | EMS WebTech';
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <main className="svc-page">
        <div className="svc-wrap svc-notfound">
          <h1>Service not found</h1>
          <p>We couldn't find that service.</p>
          <Link to="/services" className="svc-btn">Back to all services</Link>
        </div>
      </main>
    );
  }

  const index = services.findIndex((s) => s.slug === service.slug);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const others = services.filter((s) => s.slug !== service.slug);
  return (
    <main className="svc-page">
      <section className="svc-detail-hero">
        <div className="svc-wrap svc-detail-grid">
          <div className="svc-detail-text">
            <nav className="svc-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link> <span>/</span> <Link to="/services">Services</Link> <span>/</span> <span>{service.title}</span>
            </nav>
            <h1>{service.title}</h1>
            <p className="svc-lead">{service.short}</p>
            <div className="svc-detail-actions">
              <Link to="/contact" className="svc-btn">Get a quote</Link>
              <Link to="/services" className="svc-btn svc-btn-ghost">All services</Link>
            </div>
          </div>

          <div className={`svc-detail-media tone-${service.color}`}>
            <img
              src={service.image}
              alt={service.title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className={`svc-shape svc-shape-lg shape-${service.shape} color-${service.color}`} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="svc-wrap svc-detail-body">
        <div className="svc-about">
          <h2>About this service</h2>
          <p>{service.body}</p>
          <p className="svc-outcome">{service.outcome}</p>
        </div>

        <div className="svc-included">
          <h2>What's included</h2>
          <ul>
            {service.features.map((f) => (
              <li key={f}>
                <span className={`svc-dot color-${service.color}`} aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="svc-wrap svc-related">
        <h2>Our main services</h2>
        <div className="svc-grid">
          {others.map((s) => (
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
                <span className="svc-card-arrow"><ArrowUpRight /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="svc-wrap">
        <div className="svc-pager">
          <Link to={`/services/${prev.slug}`}>
            <small>Previous</small>
            <span>{prev.title}</span>
          </Link>
          <Link to={`/services/${next.slug}`} className="svc-pager-next">
            <small>Next</small>
            <span>{next.title}</span>
          </Link>
        </div>
      </section>

      <section className="svc-wrap">
        <div className="svc-cta">
          <h2>Interested in {service.title}?</h2>
          <p>Tell us what you need and we'll get back with the right plan.</p>
          <Link to="/contact" className="svc-btn">Talk to us</Link>
        </div>
      </section>
    </main>
  );
}