'use client';

import FadeUp from './FadeUp';
import { CheckCircle2, MessageCircle, Star } from 'lucide-react';

const bullets = [
  'Automatic follow-up after every service completion',
  'Pushes happy customers to Google Maps & Facebook reviews',
  'Flags unhappy customers for immediate intervention',
  'Builds trust, boosts revenue, creates repeat business',
];

export default function PostServiceCRM() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeUp>
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Flow 2</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Automated Post-Service {' '}<span className="gradient-text">CRM Loop</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Turn every completed service into a 5-star review and a repeat customer. otomoAI follows up automatically, so your reputation grows on autopilot.
            </p>
            <div className="space-y-3 mb-8">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3 group">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-[15px]">{b}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 italic">Build your reputation at scale. Automatically.</p>
          </FadeUp>
          <FadeUp className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-green-500/5 to-yellow-500/5 rounded-[2rem] blur-xl" />
            <div className="relative glass-strong rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative w-2.5 h-2.5 rounded-full bg-green-400">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
                </div>
                <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">CRM Automation</span>
              </div>
              <div className="glass rounded-xl p-4 hover:border-white/10 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-500/15 ring-1 ring-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Service Completed: Full Detail — BMW M4</p>
                    <p className="text-xs text-gray-500 mt-0.5">AI triggered follow-up message</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 hover:border-white/10 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-500/15 ring-1 ring-green-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white">Customer: &quot;Amazing work, car looks brand new!&quot;</p>
                    <p className="text-xs text-green-400 mt-1.5 flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
                      Satisfaction: Positive
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 ring-1 ring-yellow-500/15 hover:ring-yellow-500/25 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-yellow-500/15 ring-1 ring-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white">Review request sent via WhatsApp</p>
                    <p className="text-xs text-gray-500 mt-0.5">Links to Google Maps &amp; Facebook page</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-yellow-400 text-sm tracking-wider">★★★★★</span>
                      <span className="text-xs text-green-400">Review posted!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-3 tracking-wide uppercase">This month&apos;s review stats</p>
                <div className="flex justify-around">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white font-heading">47</p>
                    <p className="text-xs text-gray-500 mt-0.5">Reviews</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-yellow-400 font-heading">4.9</p>
                    <p className="text-xs text-gray-500 mt-0.5">Avg Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-green-400 font-heading">92%</p>
                    <p className="text-xs text-gray-500 mt-0.5">Response</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
