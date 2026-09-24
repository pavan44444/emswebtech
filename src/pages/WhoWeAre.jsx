import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Blob, Circle, Triangle } from '../components/Shapes';

const points = [
  {
    shape: Blob,
    color: 'olive',
    title: 'We build visibility',
    body: "Presence and visibility are a pivotal part of any business, which is why so much of what we do is focused on marketing and promoting your products and services — not just building a site and walking away.",
  },
  {
    shape: Circle,
    color: 'orange',
    title: 'We work as your outsourced team',
    body: "We're a team of experts in web design, development and online promotion. You can outsource the work to us and expect professionalism, precision and a clear timeline in return.",
  },
  {
    shape: Triangle,
    color: 'olive-light',
    title: 'We match you to your market',
    body: 'We study your target market and match your product or service to what your customers are actually looking for, on a schedule and budget that works for your business.',
  },
];

export default function WhoWeAre() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-olive/20 blur-[110px] pointer-events-none" />
        <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-orange/20 blur-[110px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 grid md:grid-cols-[1.3fr,0.7fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-olive-light font-body text-sm tracking-[0.2em] uppercase mb-4"
            >
              Who we are
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-xl"
            >
              We don't just build sites.{' '}
              <span className="text-gradient">We build presence.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-paper/60 max-w-lg"
            >
              A Bangalore-based team that treats your website as the start of
              a relationship with your customers, not the end of a project.
            </motion.p>
          </div>

          <motion.div
            className="relative h-56 md:h-72"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {[
              { C: Blob, color: 'olive', style: { top: '2%', left: '10%', width: '60%' } },
              { C: Circle, color: 'orange', style: { top: '48%', left: '55%', width: '34%' } },
              { C: Triangle, color: 'olive-light', style: { top: '0%', left: '65%', width: '28%' } },
            ].map(({ C, color, style }, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={style}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
              >
                <C color={color} className="w-full h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="grid md:grid-cols-3 gap-6">
          {points.map(({ shape: ShapeIcon, color, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-paper/10 bg-paper/[0.03] backdrop-blur-sm p-8 hover:-translate-y-2 hover:border-olive-light/40 transition-all duration-300"
            >
              <ShapeIcon color={color} className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-lg font-semibold text-paper">{title}</h3>
              <p className="mt-3 text-sm text-paper/55 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mt-20 h-[60vh] min-h-[420px] overflow-hidden flex items-center">
        <img
          src="/images/who-we-are.jpg"
          alt="EMS Webtech team"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <span className="font-display text-6xl text-olive-light/40 leading-none">"</span>
          <p className="-mt-6 font-display text-paper text-2xl md:text-4xl font-semibold leading-snug">
            Matched to what your customers are actually looking for —
            on a schedule and budget that works for your business.
          </p>
          <Link
            to="/contact"
            data-cursor
            className="mt-8 inline-block px-7 py-3 rounded-full bg-orange text-ink font-semibold hover:bg-orange-dark hover:scale-105 transition-all"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  );
}