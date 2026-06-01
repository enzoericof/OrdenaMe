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
    <form action={action} className="space-y-4 rounded-[28px] border border-white/10 bg-white/6 p-5">
      <input type="hidden" name="id" defaultValue={defaultValues?.id} />

      <label className="block text-sm text-stone-200">
        Hábito
        <input
          name="title"
          required
          minLength={2}
          maxLength={120}
          defaultValue={defaultValues?.title}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-emerald-300"
          placeholder="Ej. Tomar agua"
        />
      </label>

      <label className="block text-sm text-stone-200">
        Frecuencia
        <select
          name="frequency"
          defaultValue={defaultValues?.frequency ?? "daily"}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-emerald-300"
        >
          <option value="daily">Diario</option>
          <option value="weekly">Semanal</option>
        </select>
      </label>

      <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-stone-200">
        <input
          type="checkbox"
          name="is_active"
          defaultChecked={defaultValues?.isActive ?? true}
          className="size-4"
        />
        Mantener como hábito activo
      </label>

      <button
        type="submit"
        className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#0a1611] transition hover:bg-stone-200"
      >
        {submitLabel}
      </button>
    </form>
  );
}
