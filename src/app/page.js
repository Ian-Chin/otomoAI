import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import SectionSkeleton, {
  FourGridSkeleton,
  TwoColSkeleton,
  CenteredSkeleton,
  TestimonialsSkeleton,
  FAQSkeleton,
  FooterSkeleton,
} from '@/components/SectionSkeleton';

const ProblemSection = dynamic(() => import('@/components/ProblemSection'));
const SolutionIntro = dynamic(() => import('@/components/SolutionIntro'));
const AdminSuite = dynamic(() => import('@/components/AdminSuite'));
const LeadGenFlow = dynamic(() => import('@/components/LeadGenFlow'));
const PostServiceCRM = dynamic(() => import('@/components/PostServiceCRM'));
const ModVisualizer = dynamic(() => import('@/components/ModVisualizer'));
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
