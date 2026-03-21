import FadeUp from './FadeUp';

const testimonials = [
  {
    initials: 'AZ',
    name: 'Ahmad Zaidi',
    role: 'Owner, AZ Performance Garage',
    color: 'bg-brand-600/15 text-brand-400 ring-1 ring-brand-600/20',
    quote:
      '"We used to miss 60% of WhatsApp leads because we were too busy in the shop. Now the AI handles everything — we just show up to do the work. Revenue\'s up 40% in two months."',
  },
  {
    initials: 'DK',
    name: 'Danny Koh',
    role: 'Founder, DK Customs & Detailing',
    color: 'bg-fire-500/15 text-fire-400 ring-1 ring-fire-500/20',
    quote:
      '"The mod visualizer is a game-changer. Customers can actually see the bodykit on their car before committing. Our modification upsell rate tripled overnight."',
  },
  {
    initials: 'SR',
    name: 'Sarah Rahman',
    role: 'Manager, ProBike Workshop',
    color: 'bg-yellow-500/15 text-yellow-400 ring-1 ring-yellow-500/20',
    quote:
      '"I was spending 3 hours a day on invoicing and scheduling. Now it\'s literally zero. The AI admin suite pays for itself ten times over. Best investment we\'ve made."',
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 relative" id="testimonials">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-16">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Loved by <span className="gradient-text">Workshop Owners</span>
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t) => (
            <FadeUp key={t.initials} className="glass rounded-2xl p-5 sm:p-8 card-hover relative group">
              <div className="flex gap-0.5 mb-5 text-yellow-400 text-sm tracking-wider">★★★★★</div>
              <p className="text-gray-300 leading-relaxed mb-8 text-[15px]">{t.quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
