import FadeUp from './FadeUp';

const checkItems = [
  { title: 'Auto-Generate Proposals & Quotes', desc: 'AI drafts professional service quotes in seconds from a quick description.' },
  { title: 'One-Click Invoicing', desc: 'Generate & send invoices with payment tracking built right in.' },
  { title: 'Accounts Payable & Receivable', desc: 'Track every dollar in and out without touching a spreadsheet.' },
  { title: 'Smart Timetable Management', desc: 'Prevents double-bookings and optimizes your workshop schedule.' },
];

export default function AdminSuite() {
  return (
    <section className="py-28 relative" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeUp>
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Back-Office Automation</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              The AI Admin {' '}<span className="gradient-text">Back-Office Suite</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Automate proposals, invoicing, AP/AR, and timetable management — no admin staff needed. otomoAI handles the paperwork so you can handle the engines.
            </p>
            <div className="space-y-5">
              {checkItems.map((item, i) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-brand-600/15 ring-1 ring-brand-600/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-brand-600/25 group-hover:scale-110">
                    <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-600/5 to-fire-500/5 rounded-[2rem] blur-xl" />
            <div className="relative glass-strong rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative w-2.5 h-2.5 rounded-full bg-brand-500">
                  <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-50" />
                </div>
                <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">AI Admin Dashboard</span>
              </div>
              <div className="glass rounded-xl p-4 flex items-center justify-between group hover:border-white/10 transition-colors duration-300">
                <div>
                  <p className="text-xs text-gray-500">Pending Invoices</p>
                  <p className="text-xl font-bold text-white font-heading">RM 12,450</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium ring-1 ring-green-500/20">3 sent today</span>
              </div>
              <div className="glass rounded-xl p-4 flex items-center justify-between group hover:border-white/10 transition-colors duration-300">
                <div>
                  <p className="text-xs text-gray-500">Proposals Generated</p>
                  <p className="text-xl font-bold text-white font-heading">8 this week</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-fire-500/10 text-fire-400 text-xs font-medium ring-1 ring-fire-500/20">↑ 24%</span>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-3">Today&apos;s Schedule</p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-1 h-8 rounded-full bg-brand-500 transition-all duration-300 group-hover/item:h-10" />
                    <div>
                      <p className="text-sm text-white">Brake Service — Honda Civic</p>
                      <p className="text-xs text-gray-500">9:00 AM – 11:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-1 h-8 rounded-full bg-fire-500 transition-all duration-300 group-hover/item:h-10" />
                    <div>
                      <p className="text-sm text-white">Full Detail — BMW M4</p>
                      <p className="text-xs text-gray-500">11:30 AM – 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-1 h-8 rounded-full bg-yellow-400 transition-all duration-300 group-hover/item:h-10" />
                    <div>
                      <p className="text-sm text-white">ECU Tune — Golf R</p>
                      <p className="text-xs text-gray-500">3:00 PM – 5:00 PM</p>
                    </div>
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
