'use client';

import { useState } from 'react';
import FadeUp from './FadeUp';
import { Calculator, TrendingDown, Zap } from 'lucide-react';

export default function ROICalculator() {
  const [inquiries, setInquiries] = useState(60);
  const [ticketValue, setTicketValue] = useState(1200);

  // Lost Monthly Revenue = Inquiries * 0.3 * Ticket Value * 4
  const lostRevenue = inquiries * 0.3 * ticketValue * 4;

  const formatRM = (val) =>
    'RM ' + val.toLocaleString('en-MY', { minimumFractionDigits: 0 });

  return (
    <section className="py-28 relative overflow-hidden" id="roi-calculator">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-600/6 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-fire-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass text-sm text-fire-400 mb-6">
            <Calculator className="w-4 h-4" />
            Revenue Impact Calculator
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            How Much Revenue Are You{' '}
            <span className="gradient-text">Losing?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            30% of after-hours WhatsApp leads go unanswered and book elsewhere.
            See exactly what that costs your workshop every month.
          </p>
        </FadeUp>

        {/* Calculator body */}
        <FadeUp>
          <div className="grid lg:grid-cols-2 gap-0 glass-strong rounded-3xl overflow-hidden">
            {/* ── Left: Sliders ── */}
            <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/5">
              <h3 className="font-heading text-lg font-semibold text-white mb-8 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/15 ring-1 ring-brand-500/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-brand-400" />
                </span>
                Your Workshop Stats
              </h3>

              {/* Slider 1: Weekly WhatsApp Inquiries */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm text-gray-400 font-medium">
                    Weekly WhatsApp Inquiries
                  </label>
                  <span className="text-xl font-bold text-white tabular-nums">
                    {inquiries}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={inquiries}
                  onChange={(e) => setInquiries(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/5"
                  style={{
                    background: `linear-gradient(to right, #ef4444 0%, #f97316 ${((inquiries - 10) / 190) * 100}%, rgba(255,255,255,0.05) ${((inquiries - 10) / 190) * 100}%)`,
                  }}
                />
                <div className="flex justify-between mt-1.5">
                  <span className="text-xs text-gray-600">10</span>
                  <span className="text-xs text-gray-600">200</span>
                </div>
              </div>

              {/* Slider 2: Average Ticket Value (RM) */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm text-gray-400 font-medium">
                    Average Ticket Value (RM)
                  </label>
                  <span className="text-xl font-bold text-white tabular-nums">
                    {formatRM(ticketValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={ticketValue}
                  onChange={(e) => setTicketValue(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/5"
                  style={{
                    background: `linear-gradient(to right, #ef4444 0%, #f97316 ${((ticketValue - 100) / 4900) * 100}%, rgba(255,255,255,0.05) ${((ticketValue - 100) / 4900) * 100}%)`,
                  }}
                />
                <div className="flex justify-between mt-1.5">
                  <span className="text-xs text-gray-600">RM 100</span>
                  <span className="text-xs text-gray-600">RM 5,000</span>
                </div>
              </div>

              {/* Breakdown stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Leads Lost / Week
                  </p>
                  <p className="text-2xl font-bold text-brand-400 tabular-nums">
                    {Math.round(inquiries * 0.3)}
                  </p>
                </div>
                <div className="glass rounded-xl p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Lost Per Job
                  </p>
                  <p className="text-2xl font-bold text-fire-400 tabular-nums">
                    {formatRM(ticketValue)}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: Glowing results panel ── */}
            <div className="relative p-8 sm:p-10 flex flex-col items-center justify-center text-center">
              {/* Ambient glow behind result */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/8 via-fire-500/6 to-transparent pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-500/15 ring-1 ring-brand-500/25 flex items-center justify-center mx-auto mb-6">
                  <TrendingDown className="w-8 h-8 text-brand-400" />
                </div>

                <p className="text-sm text-gray-500 uppercase tracking-[0.2em] font-medium mb-3">
                  Lost Monthly Revenue
                </p>

                {/* Big revenue number with glow */}
                <div className="relative mb-2">
                  <p
                    className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold gradient-text tabular-nums"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.35))',
                    }}
                  >
                    {formatRM(lostRevenue)}
                  </p>
                </div>

                <p className="text-gray-500 text-sm mb-8">
                  That&apos;s{' '}
                  <span className="text-white font-semibold">
                    {formatRM(lostRevenue * 12)}
                  </span>{' '}
                  per year walking out the door.
                </p>

                {/* Pulsing CTA */}
                <a
                  href="#cta"
                  className="group relative inline-flex items-center gap-2 btn-primary cta-glow"
                  style={{
                    animation: 'pulse-glow 3s ease-in-out infinite',
                  }}
                >
                  <Zap className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  Stop the Leak — Book a Demo
                </a>

                <p className="text-xs text-gray-600 mt-4">
                  Free 15-min consultation • No credit card required
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
