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

const ProblemSection = dynamic(() => import('@/components/ProblemSection'), {
  loading: () => <SectionSkeleton />,
});
const SolutionIntro = dynamic(() => import('@/components/SolutionIntro'), {
  loading: () => <FourGridSkeleton />,
});
const AdminSuite = dynamic(() => import('@/components/AdminSuite'), {
  loading: () => <TwoColSkeleton />,
});
const LeadGenFlow = dynamic(() => import('@/components/LeadGenFlow'), {
  loading: () => <TwoColSkeleton />,
});
const PostServiceCRM = dynamic(() => import('@/components/PostServiceCRM'), {
  loading: () => <TwoColSkeleton />,
});

const ROICalculator = dynamic(() => import('@/components/ROICalculator'), {
  loading: () => <CenteredSkeleton />,
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <TestimonialsSkeleton />,
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <FAQSkeleton />,
});
const CTA = dynamic(() => import('@/components/CTA'), {
  loading: () => <CenteredSkeleton />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <FooterSkeleton />,
});

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
