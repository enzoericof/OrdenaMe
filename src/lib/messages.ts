export type FlashTone = "success" | "error" | "info";

export function buildFlashParams(tone: FlashTone, message: string) {
  return new URLSearchParams({
    tone,
    message,
  });
}
