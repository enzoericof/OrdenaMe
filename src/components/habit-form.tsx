type HabitFormProps = {
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
  defaultValues?: {
    id?: string;
    title?: string;
    frequency?: "daily" | "weekly";
    isActive?: boolean;
  };
};

export function HabitForm({ action, submitLabel, defaultValues }: HabitFormProps) {
  return (
    <form action={action} className="space-y-4 rounded-[26px] bg-[var(--card)] p-5">
      <input type="hidden" name="id" defaultValue={defaultValues?.id} />

      <label className="block text-sm text-[var(--text-muted)]">
        Hábito
        <input
          name="title"
          required
          minLength={2}
          maxLength={120}
          defaultValue={defaultValues?.title}
          className="mt-2 w-full rounded-[18px] border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-white outline-none focus:border-[#5b2439]"
          placeholder="Ej. Tomar agua"
        />
      </label>

      <label className="block text-sm text-[var(--text-muted)]">
        Frecuencia
        <select
          name="frequency"
          defaultValue={defaultValues?.frequency ?? "daily"}
          className="mt-2 w-full rounded-[18px] border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-white outline-none focus:border-[#5b2439]"
        >
          <option value="daily">Diario</option>
          <option value="weekly">Semanal</option>
        </select>
      </label>

      <label className="flex items-center gap-3 rounded-[18px] bg-[var(--input)] px-4 py-3 text-sm text-[var(--text-muted)]">
        <input
          type="checkbox"
          name="is_active"
          defaultChecked={defaultValues?.isActive ?? true}
          className="size-4 accent-[var(--primary)]"
        />
        Mantener como hábito activo
      </label>

      <button
        type="submit"
        className="rounded-[18px] border border-[#3c2330] bg-[#0d0d12] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_34px_rgba(255,0,92,0.16)] hover:border-[#6a2943] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_44px_rgba(255,0,92,0.24)]"
      >
        {submitLabel}
      </button>
    </form>
  );
}
