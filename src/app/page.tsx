import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Personas from '@/components/Personas';
import Pricing from '@/components/Pricing';
import Privacy from '@/components/Privacy';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Features />
        <HowItWorks />
        <Personas />
        <Pricing />
        <Privacy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
