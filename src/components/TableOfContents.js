'use client';

import { useEffect, useState } from 'react';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );

    const els = headings
      .map((h) => document.getElementById(slugify(h)))
      .filter(Boolean);

    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block" aria-label="Table of contents">
      <div className="sticky top-32">
        <p className="text-xs text-gray-600 uppercase tracking-wider font-medium mb-4">
          On this page
        </p>
        <ul className="space-y-2 border-l border-white/5">
          {headings.map((heading) => {
            const id = slugify(heading);
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(id);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={`block pl-4 py-1 text-sm leading-snug transition-all duration-200 ${
                    isActive
                      ? 'text-brand-400 border-l-2 border-brand-500 -ml-[1px]'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {heading}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
