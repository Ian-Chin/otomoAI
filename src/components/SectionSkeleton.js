/** Skeleton loading placeholders for dynamically imported sections.
 *  Each variant mirrors the real component's layout to prevent layout shift. */

function Shimmer({ className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-white/[0.04] ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer-slide_1.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}

/* ── Generic: heading + subtitle + 3-col card grid ── */
export default function SectionSkeleton() {
  return (
    <div className="w-full py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Shimmer className="h-8 w-56 rounded-lg mx-auto" />
        <Shimmer className="h-4 w-80 rounded mx-auto mt-4" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[0, 1, 2].map((i) => (
            <Shimmer key={i} className="h-44 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 2-column split (AdminSuite, LeadGenFlow, PostServiceCRM) ── */
export function TwoColSkeleton() {
  return (
    <div className="w-full py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <Shimmer className="h-5 w-24 rounded-full" />
          <Shimmer className="h-9 w-72 rounded-lg" />
          <Shimmer className="h-4 w-full rounded mt-2" />
          <Shimmer className="h-4 w-5/6 rounded" />
          <Shimmer className="h-4 w-4/6 rounded" />
          <div className="space-y-3 mt-6">
            {[0, 1, 2].map((i) => (
              <Shimmer key={i} className="h-10 w-full rounded-xl" />
            ))}
          </div>
        </div>
        <Shimmer className="h-72 rounded-2xl" />
      </div>
    </div>
  );
}

/* ── 4-feature grid (SolutionIntro) ── */
export function FourGridSkeleton() {
  return (
    <div className="w-full py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Shimmer className="h-8 w-64 rounded-lg mx-auto" />
        <Shimmer className="h-4 w-96 rounded mx-auto mt-4 max-w-full" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[0, 1, 2, 3].map((i) => (
            <Shimmer key={i} className="h-48 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Centered narrow block (CTA, ROICalculator) ── */
export function CenteredSkeleton() {
  return (
    <div className="w-full py-28 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Shimmer className="h-10 w-80 rounded-lg mx-auto max-w-full" />
        <Shimmer className="h-4 w-96 rounded mx-auto max-w-full" />
        <Shimmer className="h-4 w-72 rounded mx-auto" />
        <div className="flex gap-4 justify-center mt-8">
          <Shimmer className="h-12 w-40 rounded-full" />
          <Shimmer className="h-12 w-40 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ── Testimonials: 3 tall cards ── */
export function TestimonialsSkeleton() {
  return (
    <div className="w-full py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Shimmer className="h-8 w-48 rounded-lg mx-auto" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-2xl bg-white/[0.03] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Shimmer className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Shimmer className="h-4 w-28 rounded" />
                  <Shimmer className="h-3 w-20 rounded" />
                </div>
              </div>
              <Shimmer className="h-3 w-full rounded" />
              <Shimmer className="h-3 w-5/6 rounded" />
              <Shimmer className="h-3 w-4/6 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── FAQ accordion ── */
export function FAQSkeleton() {
  return (
    <div className="w-full py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <Shimmer className="h-8 w-64 rounded-lg mx-auto" />
        <div className="space-y-3 mt-12">
          {[0, 1, 2, 3, 4].map((i) => (
            <Shimmer key={i} className="h-14 w-full rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Footer ── */
export function FooterSkeleton() {
  return (
    <div className="w-full pt-16 pb-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-3">
          <Shimmer className="h-8 w-28 rounded" />
          <Shimmer className="h-3 w-48 rounded" />
          <Shimmer className="h-3 w-40 rounded" />
        </div>
        {[0, 1].map((i) => (
          <div key={i} className="space-y-3">
            <Shimmer className="h-4 w-20 rounded" />
            <Shimmer className="h-3 w-32 rounded" />
            <Shimmer className="h-3 w-28 rounded" />
            <Shimmer className="h-3 w-24 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
