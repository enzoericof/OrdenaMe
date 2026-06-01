type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-[26px] bg-[var(--card)] p-6">
      <p className="text-lg font-medium text-white">{title}</p>
      <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{description}</p>
    </div>
  );
}
