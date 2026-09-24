import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceBySlug, services } from '../data/services';
import { Shape } from '../components/Shapes';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/" replace />;

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-olive/20 blur-[110px] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Shape shape={service.shape} color={service.color} className="w-16 h-16 mb-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-paper"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-paper/60 leading-relaxed"
          >
            {service.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/contact"
              data-cursor
              className="mt-10 inline-block px-7 py-3 rounded-full bg-olive text-ink font-semibold hover:bg-olive-dark hover:scale-105 transition-all"
            >
              Talk to us about this →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <p className="text-sm text-paper/40 uppercase tracking-[0.2em] mb-6">Other services</p>
        <div className="grid sm:grid-cols-3 gap-5">
          {related.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group rounded-2xl border border-paper/10 bg-paper/[0.03] p-6 hover:border-olive-light/40 hover:-translate-y-1 transition-all"
            >
              <Shape shape={s.shape} color={s.color} className="w-8 h-8 mb-4" />
              <p className="font-medium text-paper group-hover:text-olive-light transition-colors">{s.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}