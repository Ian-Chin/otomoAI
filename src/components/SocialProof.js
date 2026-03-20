import FadeUp from './FadeUp';

export default function SocialProof() {
  const stats = [
    { value: '10×', label: 'Faster Lead Response' },
    { value: '87%', label: 'Lead-to-Booking Rate' },
    { value: '0 hrs', label: 'Admin Overhead / Week' },
    { value: '5 ★', label: 'Automated CRM Loop' },
  ];

  return (
    <section className="relative z-10 py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <FadeUp key={stat.label}>
            <p className="text-3xl font-heading font-bold gradient-text">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
