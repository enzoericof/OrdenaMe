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
    <form action={action} className="space-y-4 rounded-[28px] border border-white/10 bg-white/6 p-5">
      <input type="hidden" name="id" defaultValue={defaultValues?.id} />

      <label className="block text-sm text-stone-200">
        Meta
        <input
          name="title"
          required
          minLength={2}
          maxLength={140}
          defaultValue={defaultValues?.title}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-emerald-300"
          placeholder="Ej. Aprobar calculo"
        />
      </label>

      <label className="block text-sm text-stone-200">
        Descripcion
        <textarea
          name="description"
          rows={4}
          defaultValue={defaultValues?.description ?? ""}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-emerald-300"
          placeholder="Que significa completar esta meta"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-stone-200">
          Estado
          <select
            name="status"
            defaultValue={defaultValues?.status ?? "pending"}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-emerald-300"
          >
            {Object.entries(GOAL_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm text-stone-200">
          Fecha limite
          <input
            name="deadline"
            type="date"
            defaultValue={defaultValues?.deadline ?? ""}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-emerald-300"
          />
        </label>
      </div>

      <button
        type="submit"
        className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#0a1611] transition hover:bg-stone-200"
      >
        {submitLabel}
      </button>
    </form>
  );
}
