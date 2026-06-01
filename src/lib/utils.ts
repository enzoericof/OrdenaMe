export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatGuaranies(value: number) {
  return new Intl.NumberFormat("es-PY").format(value);
}

export function formatDate(date: string | null) {
  if (!date) return "Sin fecha";

  return new Intl.DateTimeFormat("es-PY", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export function getTodayDate() {
  return new Date().toISOString().slice(0, 10);
}

export function getDateDaysAgo(days: number) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
}
