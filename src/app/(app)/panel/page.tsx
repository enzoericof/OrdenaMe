import Link from "next/link";

import { EmptyState } from "@/components/empty-state";
import { MetricCard } from "@/components/metric-card";
import { getCurrentUserContext, getDashboardData } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

export default async function DashboardPage() {
  const userContext = await getCurrentUserContext();

  if (!userContext) {
    return null;
  }

  const dashboard = await getDashboardData(userContext.user.id);

  if (!dashboard) {
    return null;
  }

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Habitos activos"
          value={dashboard.activeHabits.length}
          caption={`Tu plan actual admite hasta ${userContext.plan.habit_limit}.`}
        />
        <MetricCard
          label="Metas activas"
          value={dashboard.activeGoals.length}
          caption={`Puedes tener ${userContext.plan.goal_limit} metas activas al mismo tiempo.`}
        />
        <MetricCard
          label="Progreso semanal"
          value={`${dashboard.weeklyProgressPercent}%`}
          caption={`${dashboard.weeklyCompletionCount} registros en los ultimos 7 dias.`}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <article className="rounded-[28px] border border-white/10 bg-white/6 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Habitos de hoy</h3>
              <p className="mt-1 text-sm text-stone-300">
                {dashboard.completedTodayCount} completados hoy.
              </p>
            </div>
            <Link
              href="/panel/habits"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Gestionar
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {dashboard.activeHabits.length === 0 ? (
              <EmptyState
                title="Sin habitos activos"
                description="Crea tus primeras rutinas para empezar a registrar progreso desde hoy."
              />
            ) : (
              dashboard.activeHabits.slice(0, 5).map((habit) => (
                <div key={habit.id} className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-white">{habit.title}</p>
                      <p className="mt-1 text-sm text-stone-400">
                        Frecuencia {habit.frequency === "daily" ? "diaria" : "semanal"}
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100">
                      Activo
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </article>

        <article className="rounded-[28px] border border-white/10 bg-white/6 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Metas activas</h3>
              <p className="mt-1 text-sm text-stone-300">
                Pendientes o en progreso, listas para mover.
              </p>
            </div>
            <Link
              href="/panel/goals"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Ver metas
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {dashboard.activeGoals.length === 0 ? (
              <EmptyState
                title="Sin metas activas"
                description="Crea una meta con fecha limite para convertir tus ideas en seguimiento real."
              />
            ) : (
              dashboard.activeGoals.slice(0, 5).map((goal) => (
                <div key={goal.id} className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4">
                  <p className="font-medium text-white">{goal.title}</p>
                  <div className="mt-2 flex items-center justify-between gap-4 text-sm text-stone-400">
                    <span>{goal.status === "pending" ? "Pendiente" : "En progreso"}</span>
                    <span>{formatDate(goal.deadline)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </article>
      </section>
    </div>
  );
}
