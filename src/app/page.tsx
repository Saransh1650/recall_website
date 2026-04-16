import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { SectionCapture, SectionAI, SectionJournal, SectionPeople, SectionSearch } from '@/components/Sections';
import Privacy from '@/components/Privacy';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'RECALL — Stop Losing the Conversations That Matter',
  description: 'RECALL turns real conversations into structured, searchable journal entries — automatically, in the background.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Story Sections — alternating warm / white backgrounds */}
        <div style={{ background: '#FFFFFF' }}>
          <SectionCapture />
        </div>
        <div style={{ background: 'var(--bg)' }}>
          <SectionAI />
        </div>
        <div style={{ background: '#FFFFFF' }}>
          <SectionJournal />
        </div>
        <div style={{ background: 'var(--bg)' }}>
          <SectionPeople />
        </div>
        <div style={{ background: '#FFFFFF' }}>
          <SectionSearch />
        </div>

        <Privacy />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
