type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-[28px] border border-dashed border-white/15 bg-black/10 p-6">
      <p className="text-lg font-medium text-white">{title}</p>
      <p className="mt-2 text-sm text-stone-300">{description}</p>
    </div>
  );
}
