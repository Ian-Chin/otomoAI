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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
                className={`w-auto transition-all duration-500 ${scrolled ? 'h-8 sm:h-10' : 'h-14 sm:h-20'}`}
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
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden relative z-[60] text-white" aria-label="Toggle menu">
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
        </nav>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-[55] bg-black transition-transform duration-500 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link href="/" onClick={closeMenu} className="text-3xl font-heading font-bold text-white hover:text-brand-500 transition-colors duration-300">
            Home
          </Link>
          <Link href="/blog" onClick={closeMenu} className="text-3xl font-heading font-bold text-white hover:text-brand-500 transition-colors duration-300">
            Blog
          </Link>
          <Link
            href="/#cta"
            onClick={closeMenu}
            className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-brand-600 to-fire-500 text-white text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-brand-600/20"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </>
  );
}
