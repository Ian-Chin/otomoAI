import FadeUp from './FadeUp';

const checkItems = [
  { title: 'Auto-Generate Proposals & Quotes', desc: 'AI drafts professional service quotes in seconds from a quick description.' },
  { title: 'One-Click Invoicing', desc: 'Generate & send invoices with payment tracking built right in.' },
  { title: 'Accounts Payable & Receivable', desc: 'Track every dollar in and out without touching a spreadsheet.' },
  { title: 'Smart Timetable Management', desc: 'Prevents double-bookings and optimizes your workshop schedule.' },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function AdminSuite() {
  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">Back-Office Automation</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              The AI Admin<br /><span className="gradient-text">Back-Office Suite</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Automate proposals, invoicing, AP/AR, and timetable management — no admin staff needed. otomoAI handles the paperwork so you can handle the engines.
            </p>
            <div className="space-y-4">
              {checkItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp className="relative">
            <div className="glass-strong rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-500"></div>
                <span className="text-xs text-gray-500 font-medium">AI Admin Dashboard</span>
              </div>
              <div className="glass rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Pending Invoices</p>
                  <p className="text-xl font-bold text-white">RM 12,450</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-medium">3 sent today</span>
              </div>
              <div className="glass rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Proposals Generated</p>
                  <p className="text-xl font-bold text-white">8 this week</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-fire-500/15 text-fire-400 text-xs font-medium">↑ 24%</span>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-2">Today&apos;s Schedule</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 rounded-full bg-brand-500"></div>
                    <div>
                      <p className="text-sm text-white">Brake Service — Honda Civic</p>
                      <p className="text-xs text-gray-500">9:00 AM – 11:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 rounded-full bg-fire-500"></div>
                    <div>
                      <p className="text-sm text-white">Full Detail — BMW M4</p>
                      <p className="text-xs text-gray-500">11:30 AM – 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 rounded-full bg-yellow-400"></div>
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
