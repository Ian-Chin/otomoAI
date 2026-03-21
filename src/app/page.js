import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ProblemSection from '@/components/ProblemSection';
import SolutionIntro from '@/components/SolutionIntro';
import AdminSuite from '@/components/AdminSuite';
import LeadGenFlow from '@/components/LeadGenFlow';
import PostServiceCRM from '@/components/PostServiceCRM';
import ModVisualizer from '@/components/ModVisualizer';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="grain">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <SolutionIntro />
      <AdminSuite />
      <LeadGenFlow />
      <PostServiceCRM />
      <ModVisualizer />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
