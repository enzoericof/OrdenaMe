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
          label="Hábitos activos"
          value={dashboard.activeHabits.length}
          caption={`Tu plan actual admite hasta ${userContext.plan.habit_limit}.`}
          tone="primary"
        />
        <MetricCard
          label="Metas activas"
          value={dashboard.activeGoals.length}
          caption={`Podés tener ${userContext.plan.goal_limit} metas activas al mismo tiempo.`}
          tone="violet"
        />
        <MetricCard
          label="Progreso semanal"
          value={`${dashboard.weeklyProgressPercent}%`}
          caption={`${dashboard.weeklyCompletionCount} registros en los últimos 7 días.`}
          tone="success"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <article className="rounded-[28px] bg-[var(--card)] p-5 shadow-[0_20px_44px_rgba(0,0,0,0.24)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Hábitos de hoy</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {dashboard.completedTodayCount} completados hoy.
              </p>
            </div>
            <Link
              href="/panel/habits"
              className="rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm font-medium text-[#ff8bb1] hover:bg-[rgba(255,0,92,0.24)]"
            >
              Gestionar
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {dashboard.activeHabits.length === 0 ? (
              <EmptyState
                title="Sin hábitos activos"
                description="Creá tus primeras rutinas para empezar a registrar progreso desde hoy."
              />
            ) : (
              dashboard.activeHabits.slice(0, 5).map((habit) => (
                <div key={habit.id} className="rounded-[22px] bg-[var(--surface)] px-4 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-white">{habit.title}</p>
                      <p className="mt-1 text-sm text-[var(--text-soft)]">
                        Frecuencia {habit.frequency === "daily" ? "diaria" : "semanal"}
                      </p>
                    </div>
                    <span className="rounded-full bg-[rgba(34,197,94,0.14)] px-3 py-1 text-xs text-emerald-100">
                      Activo
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </article>

        <article className="rounded-[28px] bg-[var(--card)] p-5 shadow-[0_20px_44px_rgba(0,0,0,0.24)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Metas activas</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Pendientes o en progreso, listas para mover.
              </p>
            </div>
            <Link
              href="/panel/goals"
              className="rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm font-medium text-[#ff8bb1] hover:bg-[rgba(255,0,92,0.24)]"
            >
              Ver metas
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {dashboard.activeGoals.length === 0 ? (
              <EmptyState
                title="Sin metas activas"
                description="Creá una meta con fecha límite para convertir tus ideas en seguimiento real."
              />
            ) : (
              dashboard.activeGoals.slice(0, 5).map((goal) => (
                <div key={goal.id} className="rounded-[22px] bg-[var(--surface)] px-4 py-4">
                  <p className="font-medium text-white">{goal.title}</p>
                  <div className="mt-2 flex items-center justify-between gap-4 text-sm text-[var(--text-soft)]">
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
