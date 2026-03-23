'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import FadeUp from './FadeUp';

const AnoAI = dynamic(() => import('@/components/ui/animated-shader-background'), {
  ssr: false,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center hero-glow overflow-hidden">
      {/* Animated shader background */}
      <div className="absolute inset-0 pointer-events-none">
        <AnoAI />
      </div>

      <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        <div className="px-6 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] lg:pr-0">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass text-sm text-fire-400 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="relative w-2 h-2 rounded-full bg-fire-400">
              <span className="absolute inset-0 rounded-full bg-fire-400 animate-ping" />
            </span>
            AI-Powered Workshop Management
          </div>

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            <span className={`block transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Stop Losing Leads.
            </span>
            <span className={`block transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Start Closing Deals.
            </span>
            <span className={`block transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="gradient-text">On Autopilot.</span>
            </span>
          </h1>

          {/* Description */}
          <p className={`text-base sm:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            otomoAI is the all-in-one AI admin suite that captures leads from Facebook &amp; WhatsApp, books appointments instantly, and follows up automatically — so you can focus on what you do best: <strong className="text-white font-medium">building incredible machines.</strong>
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a href="#cta" className="btn-primary cta-glow">
              Book a Free Demo
            </a>
            <a href="#how-it-works" className="btn-secondary group">
              See How It Works
              <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Hero image */}
        <FadeUp className="relative hidden lg:flex justify-end">
          <div className="relative">
            {/* Red glow behind image */}
            <div className="absolute inset-4 bg-gradient-to-br from-brand-600/10 via-fire-500/8 to-transparent rounded-full blur-[20px] -z-10 pointer-events-none" />
            <Image
              src="/images/heroimg.png"
              alt="otomoAI Dashboard Preview"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="w-full lg:max-w-none lg:w-[55vw] rounded-l-3xl object-cover object-left"
            />
            {/* Right edge blur fade */}
            <div className="absolute inset-y-0 right-0 w-[50%] bg-gradient-to-l from-[#08090E] via-[#08090E]/90 to-transparent pointer-events-none" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
