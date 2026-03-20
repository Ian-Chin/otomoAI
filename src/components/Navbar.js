'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="font-heading text-2xl font-bold text-white flex items-center gap-2">
            <span className="gradient-text">otomo</span><span>AI</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
          <a href="#compare" className="hover:text-white transition">Compare</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#cta" className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-fire-500 text-white text-sm font-semibold hover:opacity-90 transition shadow-lg shadow-brand-600/20">
            Book a Demo
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${menuOpen ? '' : 'hidden'} md:hidden glass px-6 pb-4`}>
        <a href="#features" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white">Features</a>
        <a href="#how-it-works" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white">How It Works</a>
        <a href="#compare" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white">Compare</a>
        <a href="#testimonials" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white">Testimonials</a>
        <a href="#cta" onClick={closeMenu} className="block mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-fire-500 text-white text-sm font-semibold text-center">
          Book a Demo
        </a>
      </div>
    </nav>
  );
}
