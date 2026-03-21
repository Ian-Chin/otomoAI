'use client';

import { useEffect, useRef } from 'react';

export default function FadeUp({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start hidden only after JS hydrates
    el.classList.add('pending');

    // Small delay to ensure the pending class applies before observing
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('pending');
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
    });
  }, []);

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}
