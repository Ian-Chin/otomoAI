import FadeUp from './FadeUp';

export default function CTA() {
  return (
    <section className="py-28 relative" id="cta">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/10 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Put Your Workshop<br /><span className="gradient-text">On Autopilot?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join the next generation of workshop owners who are closing more deals, earning more reviews, and spending zero time on admin. Setup takes less than 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="#" className="btn-primary cta-glow text-lg group">
              Book a Free Demo
              <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a href="#" className="btn-secondary text-lg">
              Contact Sales
            </a>
          </div>
          <p className="text-sm text-gray-600">No franchise fees. No long-term contracts. Cancel anytime.</p>
        </FadeUp>
      </div>
    </section>
  );
}
