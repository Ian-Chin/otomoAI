import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import SectionSkeleton from '@/components/SectionSkeleton';

const ProblemSection = dynamic(() => import('@/components/ProblemSection'));
const SolutionIntro = dynamic(() => import('@/components/SolutionIntro'));
const AdminSuite = dynamic(() => import('@/components/AdminSuite'));
const LeadGenFlow = dynamic(() => import('@/components/LeadGenFlow'));
const PostServiceCRM = dynamic(() => import('@/components/PostServiceCRM'));
const ROICalculator = dynamic(() => import('@/components/ROICalculator'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

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
      <ROICalculator />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
