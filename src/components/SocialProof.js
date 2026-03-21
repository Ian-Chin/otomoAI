import FadeUp from './FadeUp';

export default function SocialProof() {
  const stats = [
    { value: '10×', label: 'Faster Lead Response' },
    { value: '87%', label: 'Lead-to-Booking Rate' },
    { value: '0 hrs', label: 'Admin Overhead / Week' },
    { value: '5 ★', label: 'Automated CRM Loop' },
  ];

  return (
    <section className="relative z-10 py-16">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
        {stats.map((stat) => (
          <FadeUp key={stat.label} className="text-center group">
            <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold gradient-text transition-transform duration-300 group-hover:scale-105">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-2 tracking-wide">{stat.label}</p>
          </FadeUp>
        ))}
      </div>
      <div className="section-divider mt-16" />
    </section>
  );
}
