import { deleteGoalAction, saveGoalAction } from "@/app/actions/goals";
import { EmptyState } from "@/components/empty-state";
import { FlashBanner } from "@/components/flash-banner";
import { GoalForm } from "@/components/goal-form";
import { GOAL_STATUS_LABELS } from "@/lib/constants";
import { getCurrentUserContext, getGoalsPageData } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

const statusStyles = {
  pending: "bg-[rgba(249,115,22,0.14)] text-amber-100",
  in_progress: "bg-[rgba(168,85,247,0.16)] text-fuchsia-100",
  completed: "bg-[rgba(34,197,94,0.14)] text-emerald-100",
  cancelled: "bg-[var(--surface)] text-[var(--text-muted)]",
} as const;

export default async function GoalsPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; tone?: string }>;
}) {
  const userContext = await getCurrentUserContext();

  if (!userContext) {
    return null;
  }

  const [{ message, tone }, goalsData] = await Promise.all([
    searchParams,
    getGoalsPageData(userContext.user.id),
  ]);
  const goals = goalsData ?? [];
  const activeGoalsCount = goals.filter((goal) => ["pending", "in_progress"].includes(goal.status)).length;

  return (
    <div className="space-y-6">
      <FlashBanner message={message} tone={tone} />

      <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="space-y-4">
          <div className="rounded-[26px] bg-[var(--card)] p-5 shadow-[0_20px_44px_rgba(0,0,0,0.24)]">
            <p className="text-sm text-[var(--text-muted)]">Metas activas</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight text-[#c084fc]">
              {activeGoalsCount}/{userContext.plan.goal_limit}
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              Solo cuentan pendiente y en progreso.
            </p>
          </div>
          <GoalForm action={saveGoalAction} submitLabel="Crear meta" />
        </div>

        <div className="space-y-4">
          {goals.length === 0 ? (
            <EmptyState
              title="Todavía no creaste metas"
              description="Definí objetivos con estado y fecha límite para darle dirección a tu semana."
            />
          ) : (
            goals.map((goal) => (
              <article key={goal.id} className="rounded-[28px] bg-[var(--card)] p-5 shadow-[0_20px_44px_rgba(0,0,0,0.24)]">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-white">{goal.title}</h3>
                      <span className={`rounded-full px-3 py-1 text-xs ${statusStyles[goal.status]}`}>
                        {GOAL_STATUS_LABELS[goal.status]}
                      </span>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)]">
                      {goal.description || "Sin descripción detallada."}
                    </p>
                    <p className="text-sm text-[var(--text-soft)]">Fecha límite: {formatDate(goal.deadline)}</p>
                  </div>

                  <div className="grid gap-4 xl:w-[360px]">
                    <GoalForm
                      action={saveGoalAction}
                      submitLabel="Guardar cambios"
                      defaultValues={{
                        id: goal.id,
                        title: goal.title,
                        description: goal.description,
                        status: goal.status,
                        deadline: goal.deadline,
                      }}
                    />
                    <form action={deleteGoalAction}>
                      <input type="hidden" name="goal_id" value={goal.id} />
                      <button
                        type="submit"
                        className="w-full rounded-[18px] bg-[rgba(225,29,72,0.14)] px-4 py-3 text-sm font-medium text-rose-100 hover:bg-[rgba(225,29,72,0.22)]"
                      >
                        Eliminar meta
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
