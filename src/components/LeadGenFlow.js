'use client';

import FadeUp from './FadeUp';
import { Smartphone, Bot, Target, UserCheck, CalendarCheck } from 'lucide-react';

const steps = [
  { icon: Smartphone, color: 'blue', label: 'Facebook Ad Click', desc: 'Customer taps "Get a Quote" on your ad' },
  { icon: Bot, color: 'green', label: 'AI Chatbot Engages', desc: 'Answers FAQs: pricing, warranty, service times' },
  { icon: Target, color: 'yellow', label: 'Intent Detected', desc: 'AI qualifies the lead as high-purchase-intent' },
  { icon: UserCheck, color: 'purple', label: 'Routed to PIC', desc: 'Hot lead handed to your team for confirmation' },
  { icon: CalendarCheck, color: 'brand', label: 'Calendar Booked', desc: 'AI auto-blocks Google Calendar slot instantly' },
];

const bullets = [
  'Captures traffic from Facebook Ads & WhatsApp Business',
  'AI answers FAQs — maintenance, warranty, pricing, service times',
  'Detects purchase intent & qualifies leads automatically',
  'Auto-blocks Google Calendar slots via API',
];

export default function LeadGenFlow() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeUp className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-green-500/5 to-brand-600/5 rounded-[2rem] blur-xl" />
              <div className="relative glass-strong rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="relative w-2.5 h-2.5 rounded-full bg-green-400">
                    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">Live Lead Flow</span>
                </div>
                <div className="space-y-0 flow-line">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    const colorMap = {
                      blue: { bg: 'bg-blue-500/15 ring-1 ring-blue-500/20', text: 'text-blue-400' },
                      green: { bg: 'bg-green-500/15 ring-1 ring-green-500/20', text: 'text-green-400' },
                      yellow: { bg: 'bg-yellow-500/15 ring-1 ring-yellow-500/20', text: 'text-yellow-400' },
                      purple: { bg: 'bg-purple-500/15 ring-1 ring-purple-500/20', text: 'text-purple-400' },
                      brand: { bg: 'bg-brand-500/15 ring-1 ring-brand-500/20', text: 'text-brand-400' },
                    };
                    const c = colorMap[step.color];
                    const isLast = i === steps.length - 1;
                    return (
                      <div key={step.label} className={`flex items-start gap-4 ${isLast ? '' : 'pb-6'} relative z-10 group`}>
                        <div className={`w-8 h-8 rounded-full ${c.bg} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                          <Icon className={`w-4 h-4 ${c.text}`} />
                        </div>
                        <div className="glass rounded-xl p-3 flex-1 transition-colors duration-300 group-hover:border-white/10">
                          <p className={`text-xs ${c.text} font-medium tracking-wide`}>{step.label}</p>
                          <p className="text-sm text-gray-300 mt-0.5">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp className="order-1 lg:order-2">
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Flow 1</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Automated Lead Generation & <span className="gradient-text">Instant Booking</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              From Facebook ad click to confirmed appointment — fully automated. Your AI handles the entire funnel while you focus on the workshop floor.
            </p>
            <div className="space-y-3 mb-8">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3 group">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-[15px]">{b}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 italic">Never lose a lead to slow response times again.</p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
