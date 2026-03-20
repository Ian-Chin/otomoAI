import FadeUp from './FadeUp';

const cards = [
  {
    emoji: '📸',
    title: 'Upload & Visualize',
    desc: 'Customer uploads a photo of their vehicle. AI renders realistic previews of proposed modifications — bodykit, wheels, paint, exhaust, and more.',
    border: false,
  },
  {
    emoji: '⚖️',
    title: 'Pros, Cons & Risks',
    desc: 'AI provides a full breakdown of every modification — performance impact, warranty implications, legal compliance, and cost analysis.',
    border: true,
  },
  {
    emoji: '💰',
    title: 'Transparent Upselling',
    desc: 'Customers buy with confidence when they can see and understand the mod. Your workshop earns trust and higher revenue per job.',
    border: false,
  },
];

export default function ModVisualizer() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/10 via-transparent to-brand-900/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/15 border border-brand-500/20 text-sm text-brand-400 mb-4">
            <span>✨</span> Unique Feature — Powered by Gemini
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            AI Modification<br /><span className="gradient-text">Visualizer</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let customers see their car with proposed modifications before they buy. Upsell with full transparency — and watch your ticket size soar.
          </p>
        </FadeUp>
        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <FadeUp
              key={card.title}
              className={`glass rounded-2xl p-8 card-hover text-center ${card.border ? 'border border-brand-500/20' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600/20 to-fire-500/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">{card.emoji}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
