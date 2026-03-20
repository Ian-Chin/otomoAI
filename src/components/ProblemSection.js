import FadeUp from './FadeUp';

const problems = [
  {
    icon: (
      <svg className="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636a9 9 0 11-12.728 0M12 9v4m0 4h.01" />
      </svg>
    ),
    iconBg: 'bg-brand-600/15',
    title: 'Leads Slipping Through the Cracks',
    desc: "You're too busy under the hood to answer every WhatsApp message. By the time you reply, they've already gone to the competition.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-fire-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    iconBg: 'bg-fire-500/15',
    title: 'Invoicing & Scheduling Chaos',
    desc: "Handwritten quotes, forgotten follow-ups, double-booked slots. You're running a premium shop with spreadsheet-era tools.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    iconBg: 'bg-yellow-500/15',
    title: 'Zero Post-Service Follow-Up',
    desc: "The job's done, the customer leaves, and you never hear from them again. No review. No referral. No repeat revenue.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Running a Workshop Shouldn&apos;t Mean<br /><span className="gradient-text">Drowning in Admin</span>
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <FadeUp key={p.title} className="glass rounded-2xl p-8 card-hover">
              <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center mb-5`}>
                {p.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
