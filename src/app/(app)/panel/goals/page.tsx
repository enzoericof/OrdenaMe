import { deleteGoalAction, saveGoalAction } from "@/app/actions/goals";
import { EmptyState } from "@/components/empty-state";
import { FlashBanner } from "@/components/flash-banner";
import { GoalForm } from "@/components/goal-form";
import { GOAL_STATUS_LABELS } from "@/lib/constants";
import { getCurrentUserContext, getGoalsPageData } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

const statusStyles = {
  pending: "bg-amber-500/10 text-amber-100",
  in_progress: "bg-sky-500/10 text-sky-100",
  completed: "bg-emerald-500/10 text-emerald-100",
  cancelled: "bg-stone-500/15 text-stone-200",
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

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="rounded-[28px] border border-white/10 bg-white/6 p-5">
            <p className="text-sm text-stone-300">Metas activas</p>
            <p className="mt-3 text-4xl font-semibold text-white">
              {activeGoalsCount}/{userContext.plan.goal_limit}
            </p>
            <p className="mt-2 text-sm text-stone-400">Solo cuentan pendiente y en progreso.</p>
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
              <article key={goal.id} className="rounded-[28px] border border-white/10 bg-white/6 p-5">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-white">{goal.title}</h3>
                      <span className={`rounded-full px-3 py-1 text-xs ${statusStyles[goal.status]}`}>
                        {GOAL_STATUS_LABELS[goal.status]}
                      </span>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-stone-300">
                      {goal.description || "Sin descripción detallada."}
                    </p>
                    <p className="text-sm text-stone-400">Fecha límite: {formatDate(goal.deadline)}</p>
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
                        className="w-full rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-100 transition hover:bg-rose-500/20"
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
