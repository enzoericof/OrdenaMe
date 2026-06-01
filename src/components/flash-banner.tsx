import { cn } from "@/lib/utils";

const toneClasses = {
  success: "bg-[rgba(34,197,94,0.12)] text-emerald-100",
  error: "bg-[rgba(225,29,72,0.14)] text-rose-100",
  info: "bg-[rgba(6,182,212,0.14)] text-sky-100",
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
        "rounded-[20px] px-4 py-3 text-sm shadow-[0_12px_24px_rgba(0,0,0,0.2)]",
        toneClasses[tone as keyof typeof toneClasses] ?? toneClasses.info,
      )}
    >
      {message}
    </div>
  );
}
