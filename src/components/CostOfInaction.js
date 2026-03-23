'use client';

import { useEffect, useState } from 'react';
import FadeUp from './FadeUp';
import {
  Moon,
  MessageSquare,
  Clock,
  UserX,
  Bot,
  Zap,
  CheckCircle2,
  ArrowDown,
  ShieldCheck,
} from 'lucide-react';

const timelineSteps = [
  {
    time: '6:00 PM',
    title: 'Shop Closes for the Day',
    description: 'You lock up and head home. Phones go silent.',
    icon: Moon,
    color: 'gray',
    accent: false,
  },
  {
    time: '8:30 PM',
    title: '4 High-Ticket Leads Message You',
    description:
      'ECU remaps, exhaust builds, suspension kits — serious buyers ready to book.',
    icon: MessageSquare,
    color: 'red',
    accent: true,
    leads: [
      { name: 'Ahmad', job: 'Civic — ECU Remap', value: 'RM 2,500' },
      { name: 'Sarah', job: 'Myvi — Full Exhaust', value: 'RM 2,800' },
      { name: 'Daniel', job: 'WRX — Coilover Kit', value: 'RM 3,200' },
      { name: 'Wei Lin', job: 'GR86 — Turbo Build', value: 'RM 8,000' },
    ],
  },
  {
    time: '9:00 AM Next Day',
    title: 'You Finally Reply',
    description: '3 leads already booked elsewhere. Only 1 remains.',
    icon: Clock,
    color: 'gray',
    accent: false,
    lostLeads: true,
  },
];

export default function CostOfInaction() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-28 relative overflow-hidden" id="cost-of-inaction">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-900/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass text-sm text-brand-400 mb-6">
            <UserX className="w-4 h-4" />
            The Leaky Funnel
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            The <span className="gradient-text">Cost of Inaction</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Every night your shop is closed, high-value leads slip through the cracks.
          </p>
        </FadeUp>

        {/* Timeline */}
        <FadeUp>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-700 via-brand-500/40 to-transparent" />

            <div className="space-y-0">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                const isRed = step.color === 'red';
                const iconBg = isRed
                  ? 'bg-brand-500/15 ring-1 ring-brand-500/25'
                  : 'bg-white/[0.06] ring-1 ring-white/10';
                const iconColor = isRed ? 'text-brand-400' : 'text-gray-500';

                return (
                  <div key={step.time} className="relative pb-10 last:pb-0">
                    {/* Timeline dot */}
                    <div className="flex items-start gap-5">
                      <div
                        className={`relative z-10 w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-5 h-5 ${iconColor}`} />
                        {isRed && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-500 animate-ping" />
                        )}
                      </div>

                      <div className="flex-1 pt-0.5">
                        {/* Time badge */}
                        <span
                          className={`inline-block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                            isRed ? 'text-brand-400' : 'text-gray-600'
                          }`}
                        >
                          {step.time}
                        </span>
                        <h3
                          className={`font-heading text-lg sm:text-xl font-bold mb-1.5 ${
                            isRed ? 'text-white' : 'text-gray-400'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Step 2 (index 1): Show 4 lead cards */}
                        {step.leads && (
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            {step.leads.map((lead) => (
                              <div
                                key={lead.name}
                                className="glass rounded-xl px-3 py-2.5 border border-brand-500/10 group transition-all duration-300 hover:border-brand-500/20"
                              >
                                <p className="text-xs text-brand-400 font-semibold">
                                  {lead.name}
                                </p>
                                <p className="text-[11px] text-gray-400 truncate">
                                  {lead.job}
                                </p>
                                <p className="text-sm font-bold text-white mt-1">
                                  {lead.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Step 3 (index 2): Grayed-out lost leads */}
                        {step.lostLeads && (
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              {/* 3 lost leads — grayed out with strikethrough */}
                              {[
                                {
                                  name: 'Ahmad',
                                  job: 'Civic — ECU Remap',
                                  value: 'RM 2,500',
                                },
                                {
                                  name: 'Sarah',
                                  job: 'Myvi — Full Exhaust',
                                  value: 'RM 2,800',
                                },
                                {
                                  name: 'Daniel',
                                  job: 'WRX — Coilover Kit',
                                  value: 'RM 3,200',
                                },
                              ].map((lead) => (
                                <div
                                  key={lead.name}
                                  className="rounded-xl px-3 py-2.5 border border-white/[0.03] bg-white/[0.015] opacity-30 relative overflow-hidden"
                                >
                                  {/* Diagonal strike line */}
                                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[140%] h-[1px] bg-red-500/40 rotate-[-15deg]" />
                                  </div>
                                  <p className="text-xs text-gray-600 font-semibold line-through">
                                    {lead.name}
                                  </p>
                                  <p className="text-[11px] text-gray-700 truncate line-through">
                                    {lead.job}
                                  </p>
                                  <p className="text-sm font-bold text-gray-600 mt-1 line-through">
                                    {lead.value}
                                  </p>
                                </div>
                              ))}

                              {/* 1 remaining lead — still active */}
                              <div className="glass rounded-xl px-3 py-2.5 border border-green-500/15">
                                <p className="text-xs text-green-400 font-semibold">
                                  Wei Lin
                                </p>
                                <p className="text-[11px] text-gray-400 truncate">
                                  GR86 — Turbo Build
                                </p>
                                <p className="text-sm font-bold text-white mt-1">
                                  RM 8,000
                                </p>
                              </div>
                            </div>

                            {/* Lost revenue callout */}
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/8 border border-red-500/10">
                              <UserX className="w-4 h-4 text-red-400 flex-shrink-0" />
                              <p className="text-xs text-red-400">
                                <span className="font-bold">
                                  RM 8,500 lost
                                </span>{' '}
                                — 3 leads already booked elsewhere
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Arrow down connector */}
            <div className="flex justify-center my-8">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-brand-400 animate-bounce" />
              </div>
            </div>

            {/* ── otomoAI Intercept Panel ── */}
            <div
              className="relative rounded-3xl p-6 sm:p-8 overflow-hidden border border-brand-500/20"
              style={{
                background:
                  'linear-gradient(135deg, rgba(239,68,68,0.05) 0%, rgba(8,9,14,0.97) 50%, rgba(249,115,22,0.04) 100%)',
                boxShadow:
                  '0 0 80px rgba(239, 68, 68, 0.1), 0 0 40px rgba(249, 115, 22, 0.05), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-500/8 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/25 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  With otomoAI Active
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                  AI Intercepts{' '}
                  <span className="gradient-text">Instantly</span> — Even at 3 AM
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-lg">
                  While you sleep, otomoAI answers every inquiry, qualifies the lead,
                  quotes pricing, and books them into your calendar. Zero leads lost.
                </p>

                {/* All 4 leads captured */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    {
                      name: 'Ahmad',
                      job: 'Civic — ECU Remap',
                      value: 'RM 2,500',
                      time: '8:31 PM',
                    },
                    {
                      name: 'Sarah',
                      job: 'Myvi — Full Exhaust',
                      value: 'RM 2,800',
                      time: '8:33 PM',
                    },
                    {
                      name: 'Daniel',
                      job: 'WRX — Coilover Kit',
                      value: 'RM 3,200',
                      time: '8:35 PM',
                    },
                    {
                      name: 'Wei Lin',
                      job: 'GR86 — Turbo Build',
                      value: 'RM 8,000',
                      time: '8:42 PM',
                    },
                  ].map((lead) => (
                    <div
                      key={lead.name}
                      className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-brand-500/15 p-3 transition-all duration-300 hover:border-brand-500/25 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-green-500/15 ring-1 ring-green-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-brand-400 font-semibold">
                          {lead.name}{' '}
                          <span className="text-gray-600 font-normal">
                            • {lead.time}
                          </span>
                        </p>
                        <p className="text-[11px] text-gray-400 truncate">
                          {lead.job}
                        </p>
                        <p className="text-sm font-bold text-white">
                          {lead.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total recovered */}
                <div className="flex items-center justify-between gap-4 rounded-xl glass-strong p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/15 ring-1 ring-green-500/25 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Revenue Captured
                      </p>
                      <p className="text-xs text-gray-600">
                        All 4 leads booked overnight
                      </p>
                    </div>
                  </div>
                  <p
                    className="font-heading text-2xl sm:text-3xl font-extrabold gradient-text"
                    style={{
                      filter:
                        'drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))',
                    }}
                  >
                    RM 16,500
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <a
                    href="#cta"
                    className="group inline-flex items-center gap-2 btn-primary cta-glow"
                  >
                    <Bot className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    Never Miss Another Lead
                  </a>
                  <p className="text-xs text-gray-600 mt-3">
                    Set up in under 24 hours • Works while you sleep
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
