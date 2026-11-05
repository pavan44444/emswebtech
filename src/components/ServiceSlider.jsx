import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { serviceSlides } from "../data/ServiceSlides.js";

export default function ServiceSlider({ service, interval = 5000 }) {
    const slides = serviceSlides[service.slug] ?? [];
    const count = slides.length;
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const go = (n) => setIndex((n + count) % count);

    // reset when the service changes
    useEffect(() => { setIndex(0); }, [service.slug]);

    // auto slide (restarts after every change, pauses on hover, respects reduced motion)
    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (paused || reduce || count < 2) return;
        const t = setTimeout(() => setIndex((i) => (i + 1) % count), interval);
        return () => clearTimeout(t);
    }, [index, paused, count, interval]);

    if (!count) return null;
    const slide = slides[index];
    const imgSrc = `/assets/images/slides/${service.slug}-${index + 1}.jpg`;

    return (
        <section className="mx-auto max-w-[1180px] px-6 py-10">
            <div
                className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] bg-ink text-paper"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="grid md:grid-cols-2 min-h-[460px] md:min-h-[400px]"
                    >
                        {/* left: image */}
                        <div className="relative h-56 md:h-auto">
                            <img
                                key={imgSrc}
                                src={imgSrc}
                                alt={slide.title}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover"
                                onError={(e) => {
                                    // fall back to the service's main image, then hide
                                    if (!e.currentTarget.dataset.fb) {
                                        e.currentTarget.dataset.fb = '1';
                                        e.currentTarget.src = service.image;
                                    } else {
                                        e.currentTarget.style.display = 'none';
                                    }
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-ink/30" />
                        </div>

                        {/* right: content */}
                        <div className="flex flex-col justify-center p-6 pb-24 md:p-12 md:pb-24">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-light">
                                {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                            </span>
                            <h3 className="mt-4 font-display text-2xl md:text-4xl font-bold leading-tight">
                                {slide.title}
                            </h3>
                            <p className="mt-4 max-w-md leading-relaxed text-paper/70">{slide.text}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* controls (bottom right, over the content side) */}
                <div className="absolute bottom-5 right-6 md:bottom-8 md:right-10 flex items-center gap-4">
                    <div className="flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => go(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-olive-light' : 'w-2 bg-paper/30 hover:bg-paper/60'
                                    }`}
                            />
                        ))}
                    </div>
                   <button
    onClick={() => go(index - 1)}
    aria-label="Previous slide"
    className="flex items-center gap-1.5 rounded-full border border-paper/20 px-3 py-1.5 text-xs font-medium hover:bg-paper/10"
>
    ← Prev
</button>
<button
    onClick={() => go(index + 1)}
    aria-label="Next slide"
    className="flex items-center gap-1.5 rounded-full border border-paper/20 px-3 py-1.5 text-xs font-medium hover:bg-paper/10"
>
    Next →
</button>
                </div>
            </div>
        </section>
    );
}