'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeUp from './FadeUp';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogFilter({ posts, categories }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;
      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [posts, search, activeCategory]);

  return (
    <>
      {/* Search + Filter bar */}
      <div className="mb-12 space-y-5">
        {/* Search input */}
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl glass text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500/40 transition-all duration-300 bg-transparent"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors duration-200"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-brand-600 to-fire-500 text-white shadow-lg shadow-brand-600/20'
                  : 'glass text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-2">No articles found</p>
          <p className="text-gray-600 text-sm">
            Try a different search term or category.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setActiveCategory('All');
            }}
            className="mt-4 text-brand-400 text-sm font-medium hover:text-brand-300 transition-colors duration-200"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filtered.map((post) => (
            <FadeUp key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass rounded-2xl overflow-hidden card-hover block group h-full"
              >
                {post.cover && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.coverAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] via-[#08090E]/40 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${post.categoryColor}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-600">{post.readTime}</span>
                  </div>

                  <h2 className="font-heading text-lg font-bold text-white mb-3 leading-snug group-hover:text-brand-400 transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-[15px] leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div
                      className={`w-8 h-8 rounded-full ${post.author.color} flex items-center justify-center text-xs font-bold`}
                    >
                      {post.author.initials}
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {formatDate(post.date)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      )}
    </>
  );
}
