import { cn } from "@/lib/utils";

const toneClasses = {
  success: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
  error: "border-rose-400/30 bg-rose-500/10 text-rose-100",
  info: "border-sky-400/30 bg-sky-500/10 text-sky-100",
} as const;

type FlashBannerProps = {
  message?: string;
  tone?: string;
};

export function FlashBanner({ message, tone = "info" }: FlashBannerProps) {
  if (!message) return null;

  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3 text-sm",
        toneClasses[tone as keyof typeof toneClasses] ?? toneClasses.info,
      )}
    >
      {message}
    </div>
  );
}
