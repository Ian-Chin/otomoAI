'use client';

import FadeUp from './FadeUp';
import {
  MessageSquare,
  AlertTriangle,
  Clock,
  CalendarX,
  PhoneOff,
  Frown,
  Bot,
  Car,
  Wrench,
  CalendarCheck,
  CheckCircle2,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function BeforeAndAfter() {
  return (
    <section className="py-28 relative overflow-hidden" id="before-after">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-900/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            The Transformation
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            From Chaos to{' '}
            <span className="gradient-text">Complete Control</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            See what your workshop looks like before and after otomoAI.
          </p>
        </FadeUp>

        {/* Before & After Grid */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* ═══════════════ BEFORE PANEL ═══════════════ */}
            <div className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-gray-900/80 via-[#0e0e12] to-gray-900/80 p-6 sm:p-8 overflow-hidden">
              {/* Dim red stress overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-950/8 pointer-events-none" />

              {/* Header */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/15 text-red-400 text-xs font-semibold uppercase tracking-wider mb-5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Before otomoAI
                </div>

                {/* Mock: Unread WhatsApp messages */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.04] p-3 opacity-70">
                    <div className="w-9 h-9 rounded-full bg-gray-700/60 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium truncate">
                        Ahmad — 11:42 PM
                      </p>
                      <p className="text-[13px] text-gray-400 truncate">
                        Bro my Civic need ECU tune, can book tmr?
                      </p>
                    </div>
                    <span className="w-5 h-5 rounded-full bg-red-500/80 text-[10px] text-white font-bold flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.04] p-3 opacity-60">
                    <div className="w-9 h-9 rounded-full bg-gray-700/60 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium truncate">
                        Sarah — 10:18 PM
                      </p>
                      <p className="text-[13px] text-gray-400 truncate">
                        How much for full exhaust system for Myvi?
                      </p>
                    </div>
                    <span className="w-5 h-5 rounded-full bg-red-500/80 text-[10px] text-white font-bold flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.04] p-3 opacity-50">
                    <div className="w-9 h-9 rounded-full bg-gray-700/60 flex items-center justify-center flex-shrink-0">
                      <PhoneOff className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium truncate">
                        Missed Call — 9:55 PM
                      </p>
                      <p className="text-[13px] text-gray-500 truncate">
                        Unknown number (repeat caller)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mock: Messy calendar */}
                <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 opacity-60">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarX className="w-4 h-4 text-gray-600" />
                    <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">
                      Tomorrow&apos;s Schedule
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-14 text-gray-600">9:00</span>
                      <span className="flex-1 bg-yellow-500/10 text-yellow-500/70 rounded px-2 py-1 truncate">
                        Booking? (unclear)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-14 text-gray-600">10:00</span>
                      <span className="flex-1 bg-red-500/10 text-red-400/60 rounded px-2 py-1 truncate">
                        ⚠ Double-booked
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-14 text-gray-600">11:00</span>
                      <span className="flex-1 text-gray-600 rounded px-2 py-1">
                        — empty —
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-14 text-gray-600">14:00</span>
                      <span className="flex-1 bg-gray-500/10 text-gray-500 rounded px-2 py-1 truncate">
                        Walk-in maybe?
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pain points */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {[
                    { icon: Clock, label: 'Slow replies' },
                    { icon: Frown, label: 'Lost leads' },
                    { icon: CalendarX, label: 'Double bookings' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/8 border border-red-500/10 text-red-400/70 text-xs"
                      >
                        <Icon className="w-3 h-3" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ═══════════════ AFTER PANEL ═══════════════ */}
            <div className="relative rounded-3xl border border-brand-500/20 p-6 sm:p-8 overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(239,68,68,0.04) 0%, rgba(8,9,14,0.95) 40%, rgba(249,115,22,0.03) 100%)',
                boxShadow:
                  '0 0 60px rgba(239, 68, 68, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Glass shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

              {/* Header */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  After otomoAI
                </div>

                {/* Mock: AI auto-replied chat */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-brand-500/10 p-3 transition-all">
                    <div className="w-9 h-9 rounded-full bg-brand-500/15 ring-1 ring-brand-500/25 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-brand-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-brand-400/80 font-medium truncate">
                        otomoAI → Ahmad — 11:42 PM
                      </p>
                      <p className="text-[13px] text-gray-300 truncate">
                        ✅ Booked: ECU tune, Civic — Slot 9 AM confirmed
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-brand-500/10 p-3 transition-all">
                    <div className="w-9 h-9 rounded-full bg-brand-500/15 ring-1 ring-brand-500/25 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-brand-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-brand-400/80 font-medium truncate">
                        otomoAI → Sarah — 10:18 PM
                      </p>
                      <p className="text-[13px] text-gray-300 truncate">
                        ✅ Quoted RM 2,800. Appointment pending
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-green-500/10 p-3 transition-all">
                    <div className="w-9 h-9 rounded-full bg-green-500/15 ring-1 ring-green-500/25 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-green-400/80 font-medium truncate">
                        Auto-capture — 9:55 PM
                      </p>
                      <p className="text-[13px] text-gray-300 truncate">
                        Missed call → AI sent follow-up WhatsApp
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  </div>
                </div>

                {/* Mock: Organized bays/hoists */}
                <div
                  className="rounded-xl p-4 border border-brand-500/15"
                  style={{
                    background:
                      'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarCheck className="w-4 h-4 text-brand-400" />
                    <span className="text-xs text-brand-400/80 font-medium uppercase tracking-wider">
                      Tomorrow — Auto-Scheduled
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-14 text-gray-500 font-medium">
                        9:00
                      </span>
                      <span className="flex-1 flex items-center gap-1.5 bg-brand-500/10 border border-brand-500/15 text-brand-300 rounded px-2.5 py-1.5 truncate">
                        <Car className="w-3 h-3" />
                        Hoist 1: Civic FC — ECU Remap
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-14 text-gray-500 font-medium">
                        10:30
                      </span>
                      <span className="flex-1 flex items-center gap-1.5 bg-fire-500/10 border border-fire-500/15 text-fire-400 rounded px-2.5 py-1.5 truncate">
                        <Wrench className="w-3 h-3" />
                        Hoist 2: Myvi — Full Exhaust
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-14 text-gray-500 font-medium">
                        14:00
                      </span>
                      <span className="flex-1 flex items-center gap-1.5 bg-green-500/10 border border-green-500/15 text-green-400 rounded px-2.5 py-1.5 truncate">
                        <Car className="w-3 h-3" />
                        Hoist 1: Vios — Brake Overhaul
                      </span>
                    </div>
                  </div>
                </div>

                {/* Success badges */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {[
                    { icon: Zap, label: 'Instant replies' },
                    { icon: CheckCircle2, label: '0 lost leads' },
                    { icon: CalendarCheck, label: 'Auto-scheduled' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/15 text-brand-400 text-xs"
                      >
                        <Icon className="w-3 h-3" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
