import FadeUp from './FadeUp';

const features = [
  {
    title: 'Lead Generation',
    desc: 'Capture & convert on autopilot',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'AI Admin Suite',
    desc: 'Proposals, invoices, AP/AR',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Smart CRM',
    desc: 'Automated follow-ups & reviews',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Mod Visualizer',
    desc: 'AI-powered before/after previews',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function SolutionIntro() {
  return (
    <section className="py-24 relative" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">The Solution</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet <span className="gradient-text">otomoAI</span> — Your Workshop&apos;s<br />AI Back-Office
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A complete suite of AI-powered tools designed specifically for auto workshops and premium bike mechanics. From the first ad click to the five-star review.
          </p>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((f) => (
            <FadeUp key={f.title} className="glass rounded-2xl p-6 card-hover text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-fire-500 flex items-center justify-center mx-auto mb-4">
                {f.icon}
              </div>
              <h3 className="font-heading font-bold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
