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

function CellValue({ value }) {
  if (value === '✓') return <span className="text-green-400 text-base">✓</span>;
  if (value === '✗') return <span className="text-red-400/60 text-base">✗</span>;
  if (value === 'None' || value === '< 24 hrs') return <span className="text-green-400 font-semibold text-sm">{value}</span>;
  if (value === 'Limited' || value === 'Manual' || value === 'Weeks') return <span className="text-yellow-400/80 text-xs">{value}</span>;
  if (value === 'High' || value === 'Very High' || value === 'Months') return <span className="text-red-400/80 text-xs">{value}</span>;
  return <span>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="py-28 relative" id="compare">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Why Switch?</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            otomoAI vs. <span className="gradient-text">The Rest</span>
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-sm text-gray-500 text-center mb-3 sm:hidden">Swipe to compare →</p>
          <div className="glass-strong rounded-2xl overflow-hidden overflow-x-auto">
            <div className="grid grid-cols-4 gap-0 text-sm min-w-[500px]">
              {/* Header */}
              <div className="p-4 font-medium text-gray-500 border-b border-white/5 text-xs uppercase tracking-wider">Feature</div>
              <div className="p-4 font-bold text-center text-white border-b border-white/5 bg-brand-600/8">
                <span className="gradient-text-subtle">otomoAI</span>
              </div>
              <div className="p-4 font-medium text-center text-gray-500 border-b border-white/5 text-xs uppercase tracking-wider">TUHU</div>
              <div className="p-4 font-medium text-center text-gray-500 border-b border-white/5 text-xs uppercase tracking-wider">Franchise</div>

              {/* Rows */}
              {rows.map((row, i) => {
                const isLast = i === rows.length - 1;
                const isEven = i % 2 === 1;
                const borderClass = isLast ? '' : 'border-b border-white/[0.03]';
                const evenBg = isEven ? 'bg-white/[0.015]' : '';

                return (
                  <div key={row.feature} className="contents group">
                    <div className={`p-4 text-gray-400 text-[13px] ${borderClass} ${evenBg} transition-colors duration-200 group-hover:bg-white/[0.03]`}>{row.feature}</div>
                    <div className={`p-4 text-center ${borderClass} bg-brand-600/[0.04] transition-colors duration-200 group-hover:bg-brand-600/[0.08]`}>
                      <CellValue value={row.otomo} />
                    </div>
                    <div className={`p-4 text-center ${borderClass} ${evenBg} transition-colors duration-200 group-hover:bg-white/[0.03]`}>
                      <CellValue value={row.tuhu} />
                    </div>
                    <div className={`p-4 text-center ${borderClass} ${evenBg} transition-colors duration-200 group-hover:bg-white/[0.03]`}>
                      <CellValue value={row.franchise} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
