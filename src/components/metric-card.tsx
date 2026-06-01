type MetricCardProps = {
  label: string;
  value: string | number;
  caption: string;
};

export function MetricCard({ label, value, caption }: MetricCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/6 p-5">
      <p className="text-sm text-stone-300">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm text-stone-400">{caption}</p>
    </article>
  );
}
