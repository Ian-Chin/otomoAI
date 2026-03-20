import FadeUp from './FadeUp';

const rows = [
  { feature: 'AI Lead Generation', otomo: '✓', tuhu: '✗', franchise: '✗' },
  { feature: 'Automated CRM', otomo: '✓', tuhu: 'Limited', franchise: '✗' },
  { feature: 'AI Admin Suite', otomo: '✓', tuhu: '✗', franchise: 'Manual' },
  { feature: 'Mod Visualizer', otomo: '✓', tuhu: '✗', franchise: '✗' },
  { feature: 'WhatsApp Integration', otomo: '✓', tuhu: '✗', franchise: '✗' },
  { feature: 'Google Calendar Sync', otomo: '✓', tuhu: '✗', franchise: '✗' },
  { feature: 'Franchise Fees', otomo: 'None', tuhu: 'High', franchise: 'Very High' },
  { feature: 'Setup Time', otomo: '< 24 hrs', tuhu: 'Weeks', franchise: 'Months' },
];

function CellValue({ value, isOtomo }) {
  if (value === '✓') return <span className="text-green-400 text-lg">✓</span>;
  if (value === '✗') return <span className="text-red-400 text-lg">✗</span>;
  if (value === 'None' || value === '< 24 hrs') return <span className="text-green-400 font-bold">{value}</span>;
  if (value === 'Limited' || value === 'Manual' || value === 'Weeks') return <span className="text-yellow-400 text-xs">{value}</span>;
  if (value === 'High' || value === 'Very High' || value === 'Months') return <span className="text-red-400 text-xs">{value}</span>;
  return <span>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="py-24 relative" id="compare">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">Why Switch?</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            otomoAI vs. <span className="gradient-text">The Rest</span>
          </h2>
        </FadeUp>
        <FadeUp className="glass-strong rounded-2xl overflow-hidden">
          <div className="grid grid-cols-4 gap-0 text-sm">
            {/* Header */}
            <div className="p-4 font-semibold text-gray-500 border-b border-white/5">Feature</div>
            <div className="p-4 font-bold text-center text-white border-b border-white/5 bg-brand-600/10">otomoAI</div>
            <div className="p-4 font-semibold text-center text-gray-400 border-b border-white/5">TUHU</div>
            <div className="p-4 font-semibold text-center text-gray-400 border-b border-white/5">Franchise</div>

            {/* Rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              const isEven = i % 2 === 1;
              const borderClass = isLast ? '' : 'border-b border-white/5';
              const evenBg = isEven ? 'bg-white/[0.02]' : '';

              return (
                <div key={row.feature} className="contents">
                  <div className={`p-4 text-gray-400 ${borderClass} ${evenBg}`}>{row.feature}</div>
                  <div className={`p-4 text-center ${borderClass} bg-brand-600/5`}>
                    <CellValue value={row.otomo} isOtomo />
                  </div>
                  <div className={`p-4 text-center ${borderClass} ${evenBg}`}>
                    <CellValue value={row.tuhu} />
                  </div>
                  <div className={`p-4 text-center ${borderClass} ${evenBg}`}>
                    <CellValue value={row.franchise} />
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
