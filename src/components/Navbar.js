'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-[padding] duration-500 ease-out ${scrolled ? 'pt-4 px-4' : ''}`}>
      <nav
        className={`w-full transition-all duration-500 ease-out ${scrolled ? 'nav-scrolled max-w-3xl' : ''}`}
        style={{ borderRadius: scrolled ? '25px' : '0px' }}
      >
        <div className="mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="otomoAI"
              width={160}
              height={80}
              priority
              className={`w-auto transition-all duration-500 ${scrolled ? 'h-10' : 'h-20'}`}
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="/" className="link-hover hover:text-white transition-colors duration-300">Home</Link>
            <Link href="/blog" className="link-hover hover:text-white transition-colors duration-300">Blog</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/#cta"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-fire-500 text-white text-sm font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-brand-600/20 hover:shadow-brand-600/40 hover:scale-[1.02]"
            >
              Book a Demo
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white" aria-label="Toggle menu">
              <svg className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-4 space-y-1">
            <Link href="/" onClick={closeMenu} className="block py-2.5 text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/blog" onClick={closeMenu} className="block py-2.5 text-gray-300 hover:text-white transition-colors">Blog</Link>
            <Link href="/#cta" onClick={closeMenu} className="block mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-fire-500 text-white text-sm font-semibold text-center">
              Book a Demo
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
