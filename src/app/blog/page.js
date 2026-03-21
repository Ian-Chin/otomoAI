import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import BlogFilter from '@/components/BlogFilter';
import { getAllPosts, getAllCategories } from '@/data/blog-posts';

export const metadata = {
  title: 'Blog — otomoAI | AI Workshop Automation Insights',
  description:
    'Practical guides on AI-powered lead generation, automated invoicing, workshop CRM, and smart scheduling for auto workshops and bike mechanics.',
  openGraph: {
    title: 'Blog — otomoAI',
    description:
      'Practical guides on AI-powered lead generation, automated invoicing, workshop CRM, and smart scheduling.',
    url: 'https://otomoai.com/blog',
    siteName: 'otomoAI',
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="grain">
      <Navbar />
      <section className="pt-40 pb-28 relative">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Blog
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Workshop Growth <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Practical, experience-driven guides on AI automation, lead generation,
              and operations for auto workshops and premium bike mechanics.
            </p>
          </FadeUp>

          <BlogFilter posts={posts} categories={categories} />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="glass-strong rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to automate your workshop?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                See how otomoAI can capture leads, automate invoicing, and grow
                your reputation — all on autopilot.
              </p>
              <Link href="/#cta" className="btn-primary cta-glow">
                Book a Free Demo
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
