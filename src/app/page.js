import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import SectionSkeleton from '@/components/SectionSkeleton';

const ProblemSection = dynamic(() => import('@/components/ProblemSection'), { loading: () => <SectionSkeleton /> });
const SolutionIntro = dynamic(() => import('@/components/SolutionIntro'), { loading: () => <SectionSkeleton /> });
const AdminSuite = dynamic(() => import('@/components/AdminSuite'), { loading: () => <SectionSkeleton /> });
const LeadGenFlow = dynamic(() => import('@/components/LeadGenFlow'), { loading: () => <SectionSkeleton /> });
const PostServiceCRM = dynamic(() => import('@/components/PostServiceCRM'), { loading: () => <SectionSkeleton /> });
const ModVisualizer = dynamic(() => import('@/components/ModVisualizer'), { loading: () => <SectionSkeleton /> });
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'), { loading: () => <SectionSkeleton /> });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { loading: () => <SectionSkeleton /> });
const FAQ = dynamic(() => import('@/components/FAQ'), { loading: () => <SectionSkeleton /> });
const CTA = dynamic(() => import('@/components/CTA'), { loading: () => <SectionSkeleton /> });
const Footer = dynamic(() => import('@/components/Footer'), { loading: () => <SectionSkeleton /> });

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
