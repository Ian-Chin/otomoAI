'use client';

import FadeUp from './FadeUp';
import { Camera, Scale, TrendingUp, Sparkles } from 'lucide-react';

const cards = [
  {
    icon: Camera,
    title: 'Upload & Visualize',
    desc: 'Customer uploads a photo of their vehicle. AI renders realistic previews of proposed modifications — bodykit, wheels, paint, exhaust, and more.',
  },
  {
    icon: Scale,
    title: 'Pros, Cons & Risks',
    desc: 'AI provides a full breakdown of every modification — performance impact, warranty implications, legal compliance, and cost analysis.',
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: 'Transparent Upselling',
    desc: 'Customers buy with confidence when they can see and understand the mod. Your workshop earns trust and higher revenue per job.',
  },
];

export default function ModVisualizer() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/8 via-transparent to-brand-900/8 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 ring-1 ring-brand-500/20 text-sm text-brand-400 mb-5">
            <Sparkles className="w-4 h-4" /> Unique Feature — Powered by Gemini
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            AI Modification {' '}<span className="gradient-text">Visualizer</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Let customers see their car with proposed modifications before they buy. Upsell with full transparency — and watch your ticket size soar.
          </p>
        </FadeUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <FadeUp
                key={card.title}
                className={`glass rounded-2xl p-5 sm:p-8 card-hover text-center group ${card.highlight ? 'ring-1 ring-brand-500/20' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600/15 to-fire-500/15 ring-1 ring-white/5 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{card.desc}</p>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
