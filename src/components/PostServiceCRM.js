import FadeUp from './FadeUp';

const bullets = [
  'Automatic follow-up after every service completion',
  'Pushes happy customers to Google Maps & Facebook reviews',
  'Flags unhappy customers for immediate intervention',
  'Builds trust, boosts revenue, creates repeat business',
];

export default function PostServiceCRM() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">Flow 2</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              Automated Post-Service<br /><span className="gradient-text">CRM Loop</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Turn every completed service into a 5-star review and a repeat customer. otomoAI follows up automatically, so your reputation grows on autopilot.
            </p>
            <div className="space-y-3 mb-8">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{b}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 italic">Build your reputation at scale. Automatically.</p>
          </FadeUp>
          <FadeUp className="relative">
            <div className="glass-strong rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <span className="text-xs text-gray-500 font-medium">CRM Automation</span>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span>✅</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Service Completed: Full Detail — BMW M4</p>
                    <p className="text-xs text-gray-500">AI triggered follow-up message</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span>💬</span>
                  </div>
                  <div>
                    <p className="text-sm text-white">Customer: &quot;Amazing work, car looks brand new!&quot;</p>
                    <p className="text-xs text-green-400 mt-1">Satisfaction: Positive ✓</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span>⭐</span>
                  </div>
                  <div>
                    <p className="text-sm text-white">Review request sent via WhatsApp</p>
                    <p className="text-xs text-gray-500">Links to Google Maps &amp; Facebook page</p>
                    <div className="flex gap-1 mt-2">
                      <span className="text-yellow-400 text-sm">★★★★★</span>
                      <span className="text-xs text-green-400 ml-2">Review posted!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500">This month&apos;s review stats</p>
                <div className="flex justify-around mt-2">
                  <div>
                    <p className="text-lg font-bold text-white">47</p>
                    <p className="text-xs text-gray-500">Reviews</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-yellow-400">4.9</p>
                    <p className="text-xs text-gray-500">Avg Rating</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-400">92%</p>
                    <p className="text-xs text-gray-500">Response Rate</p>
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
