export default function SectionSkeleton() {
  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-6 animate-pulse">
        <div className="h-8 w-48 rounded-lg bg-white/[0.04] mx-auto" />
        <div className="h-4 w-72 rounded bg-white/[0.03] mx-auto" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="h-40 rounded-2xl bg-white/[0.03]" />
          <div className="h-40 rounded-2xl bg-white/[0.03]" />
          <div className="h-40 rounded-2xl bg-white/[0.03] hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
