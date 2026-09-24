import Hero from '../components/Hero';
import HorizontalShowcase from '../components/HorizontalShowcase';
import Pillars from '../components/Pillars';
import PromoGrid from '../components/PromoGrid';
import StatsCTA from '../components/StatsCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-lg text-paper/60">
          We're a Bangalore web design and development company providing
          fresh, creative digital services to businesses who want to grow
          online — focused on results, not just how a site looks.
        </p>
      </section>
      <HorizontalShowcase />
      <StatsCTA />
      <Pillars />
      <PromoGrid />
    </>
  );
}