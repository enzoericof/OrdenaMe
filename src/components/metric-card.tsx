type MetricCardProps = {
  label: string;
  value: string | number;
  caption: string;
  tone?: "primary" | "violet" | "success" | "warning";
};

const toneStyles = {
  primary: "bg-[var(--card)]",
  violet: "bg-[var(--card)]",
  success: "bg-[var(--card)]",
  warning: "bg-[var(--card)]",
} as const;

const valueStyles = {
  primary: "text-[#ff6a9b]",
  violet: "text-[#c084fc]",
  success: "text-[#4ade80]",
  warning: "text-[#fb923c]",
} as const;

const badgeStyles = {
  primary: "bg-[rgba(255,0,92,0.14)] text-[#ff8bb1]",
  violet: "bg-[rgba(168,85,247,0.14)] text-[#d8b4fe]",
  success: "bg-[rgba(34,197,94,0.14)] text-[#86efac]",
  warning: "bg-[rgba(249,115,22,0.14)] text-[#fdba74]",
} as const;

export function MetricCard({
  label,
  value,
  caption,
  tone = "primary",
}: MetricCardProps) {
  return (
    <article
      className={`rounded-[26px] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.28)] ${toneStyles[tone]}`}
    >
      <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${badgeStyles[tone]}`}>
        {label}
      </span>
      <p className={`mt-4 text-4xl font-semibold tracking-tight ${valueStyles[tone]}`}>{value}</p>
      <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{caption}</p>
    </article>
  );
}
