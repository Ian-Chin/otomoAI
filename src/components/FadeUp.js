'use client';

import { useEffect, useRef } from 'react';

// Shared singleton IntersectionObserver for all FadeUp instances
let sharedObserver = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;
  if (typeof window === 'undefined') return null;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
          entry.target.classList.add('visible');
          sharedObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  return sharedObserver;
}

export default function FadeUp({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('pending');

    requestAnimationFrame(() => {
      const observer = getObserver();
      if (observer) observer.observe(el);
    });

    return () => {
      const observer = getObserver();
      if (observer && el) observer.unobserve(el);
    };
  }, []);

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}
