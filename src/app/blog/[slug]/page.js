import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import TableOfContents from '@/components/TableOfContents';
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/data/blog-posts';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — otomoAI Blog`,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://otomoai.com/blog/${post.slug}`,
      siteName: 'otomoAI',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const relatedPosts = allPosts.filter((_, i) => i !== currentIndex).slice(0, 2);

  const headings = post.content
    .filter((block) => block.type === 'heading')
    .map((block) => block.text);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'otomoAI',
      url: 'https://otomoai.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://otomoai.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="grain">
      <Navbar />

      {/* JSON-LD structured data for E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="pt-40 pb-20 relative">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Layout: TOC sidebar + article */}
          <div className="flex gap-6 lg:gap-12 justify-center">
            {/* Main article column */}
            <article className="max-w-3xl w-full min-w-0">
              {/* Breadcrumb */}
              <FadeUp>
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
                  <Link
                    href="/"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                  <span>/</span>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Blog
                  </Link>
                  <span>/</span>
                  <span className="text-gray-400 truncate">{post.title}</span>
                </nav>
              </FadeUp>

              {/* Header */}
              <FadeUp>
                <header className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${post.categoryColor}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-600">{post.readTime}</span>
                  </div>

                  <h1 className="font-heading text-2xl sm:text-3xl lg:text-[2.75rem] font-bold text-white leading-tight mb-8">
                    {post.title}
                  </h1>

                  {/* Author card — E-E-A-T */}
                  <div className="glass rounded-2xl p-5 flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full ${post.author.color} flex items-center justify-center font-bold text-sm flex-shrink-0`}
                    >
                      {post.author.initials}
                    </div>
                    <div>
                      <p className="text-white font-medium">{post.author.name}</p>
                      <p className="text-xs text-brand-400 font-medium">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-5 text-xs text-gray-500">
                    <time dateTime={post.date}>Published {formatDate(post.date)}</time>
                  </div>
                </header>
              </FadeUp>

              {/* Cover image */}
              {post.cover && (
                <FadeUp>
                  <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-12">
                    <Image
                      src={post.cover}
                      alt={post.coverAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090E]/60 to-transparent" />
                  </div>
                </FadeUp>
              )}

              {/* Article body */}
              <FadeUp>
                <div className="blog-prose">
                  {post.content.map((block, i) => {
                    if (block.type === 'heading') {
                      return (
                        <h2
                          key={i}
                          id={slugify(block.text)}
                          className="font-heading text-xl sm:text-2xl font-bold text-white mt-12 mb-4 leading-snug scroll-mt-28"
                        >
                          {block.text}
                        </h2>
                      );
                    }
                    if (block.type === 'image') {
                      return (
                        <figure key={i} className="my-8">
                          <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden">
                            <Image
                              src={block.src}
                              alt={block.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 768px"
                              className="object-cover"
                            />
                          </div>
                          <figcaption className="text-center text-xs text-gray-500 mt-3 italic">
                            {block.caption}
                          </figcaption>
                        </figure>
                      );
                    }
                    return (
                      <p
                        key={i}
                        className="text-gray-300 leading-[1.85] mb-5 text-[15.5px]"
                      >
                        {block.text}
                      </p>
                    );
                  })}
                </div>
              </FadeUp>

              {/* Author box at bottom — reinforces E-E-A-T */}
              <FadeUp>
                <div className="mt-16 pt-10 border-t border-white/5">
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-4">
                    About the Author
                  </p>
                  <div className="glass-strong rounded-2xl p-6 flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-full ${post.author.color} flex items-center justify-center font-bold flex-shrink-0`}
                    >
                      {post.author.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">{post.author.name}</p>
                      <p className="text-sm text-brand-400 font-medium mb-2">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </article>

            {/* Sticky TOC sidebar */}
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-28 relative">
          <div className="max-w-3xl mx-auto px-6">
            <FadeUp>
              <h3 className="font-heading text-xl font-bold text-white mb-8">
                Continue Reading
              </h3>
            </FadeUp>
            <div className="grid sm:grid-cols-2 gap-6 stagger-children">
              {relatedPosts.map((related) => (
                <FadeUp key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="glass rounded-2xl p-6 card-hover block group h-full"
                  >
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${related.categoryColor} inline-block mb-3`}
                    >
                      {related.category}
                    </span>
                    <h4 className="font-heading text-base font-bold text-white leading-snug group-hover:text-brand-400 transition-colors duration-300 mb-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {related.readTime} &middot; {related.author.name}
                    </p>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

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
