import FadeUp from './FadeUp';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-glow">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-fire-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-fire-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
            AI-Powered Workshop Management
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Stop Losing Leads.<br />Start Closing Deals.<br /><span className="gradient-text">On Autopilot.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            otomoAI is the all-in-one AI admin suite that captures leads from Facebook &amp; WhatsApp, books appointments instantly, and follows up automatically — so you can focus on what you do best: <strong className="text-white">building incredible machines.</strong>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#cta" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-fire-500 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-brand-600/25 cta-glow">
              Book a Free Demo
            </a>
            <a href="#how-it-works" className="px-7 py-3.5 rounded-full border border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition">
              See How It Works →
            </a>
          </div>
        </FadeUp>
        <FadeUp className="relative flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-fire-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative glass-strong rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-brand-500"></div>
                <div className="w-3 h-3 rounded-full bg-fire-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <span className="ml-auto text-xs text-gray-500">otomoAI Dashboard</span>
              </div>
              <div className="glass rounded-xl p-4 shimmer">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">New Leads Today</span>
                  <span className="text-2xl font-bold text-white">24</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-gradient-to-r from-brand-600 to-fire-500 w-3/4"></div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Appointments Booked</span>
                  <span className="text-2xl font-bold text-white">18</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-gradient-to-r from-brand-600 to-fire-500 w-[60%]"></div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">5-Star Reviews</span>
                  <span className="text-2xl font-bold text-white">96%</span>
                </div>
                <div className="mt-2 flex gap-1">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp — just now</p>
                    <p className="text-sm text-gray-300">&quot;Hi, how much for a full brake service on my Civic?&quot;</p>
                    <p className="text-xs text-green-400 mt-1">✓ AI responding...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
