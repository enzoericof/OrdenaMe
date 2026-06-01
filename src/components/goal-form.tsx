import { GOAL_STATUS_LABELS } from "@/lib/constants";

type GoalFormProps = {
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
  defaultValues?: {
    id?: string;
    title?: string;
    description?: string | null;
    status?: keyof typeof GOAL_STATUS_LABELS;
    deadline?: string | null;
  };
};

export function GoalForm({ action, submitLabel, defaultValues }: GoalFormProps) {
  return (
    <form action={action} className="space-y-4 rounded-[26px] bg-[var(--card)] p-5">
      <input type="hidden" name="id" defaultValue={defaultValues?.id} />

      <label className="block text-sm text-[var(--text-muted)]">
        Meta
        <input
          name="title"
          required
          minLength={2}
          maxLength={140}
          defaultValue={defaultValues?.title}
          className="mt-2 w-full rounded-[18px] border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-white outline-none focus:border-[#5b2439]"
          placeholder="Ej. Aprobar cálculo"
        />
      </label>

      <label className="block text-sm text-[var(--text-muted)]">
        Descripción
        <textarea
          name="description"
          rows={4}
          defaultValue={defaultValues?.description ?? ""}
          className="mt-2 w-full rounded-[18px] border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-white outline-none focus:border-[#5b2439]"
          placeholder="Qué significa completar esta meta"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-[var(--text-muted)]">
          Estado
          <select
            name="status"
            defaultValue={defaultValues?.status ?? "pending"}
            className="mt-2 w-full rounded-[18px] border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-white outline-none focus:border-[#5b2439]"
          >
            {Object.entries(GOAL_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm text-[var(--text-muted)]">
          Fecha límite
          <input
            name="deadline"
            type="date"
            defaultValue={defaultValues?.deadline ?? ""}
            className="mt-2 w-full rounded-[18px] border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-white outline-none focus:border-[#5b2439]"
          />
        </label>
      </div>

      <button
        type="submit"
        className="rounded-[18px] border border-[#3c2330] bg-[#0d0d12] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_34px_rgba(255,0,92,0.16)] hover:border-[#6a2943] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_44px_rgba(255,0,92,0.24)]"
      >
        {submitLabel}
      </button>
    </form>
  );
}
