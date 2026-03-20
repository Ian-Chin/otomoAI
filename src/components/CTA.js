import FadeUp from './FadeUp';

export default function CTA() {
  return (
    <section className="py-24 relative" id="cta">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/15 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Put Your Workshop<br /><span className="gradient-text">On Autopilot?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Join the next generation of workshop owners who are closing more deals, earning more reviews, and spending zero time on admin. Setup takes less than 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#" className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-600 to-fire-500 text-white text-lg font-bold hover:opacity-90 transition shadow-lg cta-glow pulse-glow">
              Book a Free Demo →
            </a>
            <a href="#" className="px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 text-lg font-bold hover:border-white hover:text-white transition">
              Contact Sales
            </a>
          </div>
          <p className="text-sm text-gray-600">No franchise fees. No long-term contracts. Cancel anytime.</p>
        </FadeUp>
      </div>
    </section>
  );
}
