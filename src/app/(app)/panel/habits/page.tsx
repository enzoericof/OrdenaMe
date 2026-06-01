import { deleteHabitAction, saveHabitAction, toggleHabitCompletionAction } from "@/app/actions/habits";
import { EmptyState } from "@/components/empty-state";
import { FlashBanner } from "@/components/flash-banner";
import { HabitForm } from "@/components/habit-form";
import { HABIT_FREQUENCY_LABELS } from "@/lib/constants";
import { getCurrentUserContext, getHabitsPageData } from "@/lib/queries";
import { formatDate, getTodayDate } from "@/lib/utils";

export default async function HabitsPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; tone?: string }>;
}) {
  const userContext = await getCurrentUserContext();

  if (!userContext) {
    return null;
  }

  const [{ message, tone }, habitsData] = await Promise.all([
    searchParams,
    getHabitsPageData(userContext.user.id),
  ]);

  if (!habitsData) {
    return null;
  }

  const today = getTodayDate();
  const completedToday = new Set(
    habitsData.recentLogs.filter((log) => log.log_date === today).map((log) => log.habit_id),
  );

  return (
    <div className="space-y-6">
      <FlashBanner message={message} tone={tone} />

      <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="space-y-4">
          <div className="rounded-[26px] bg-[var(--card)] p-5 shadow-[0_20px_44px_rgba(0,0,0,0.24)]">
            <p className="text-sm text-[var(--text-muted)]">Límite del plan</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight text-[#ff6a9b]">
              {userContext.plan.habit_limit}
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              Hábitos activos permitidos en tu cuenta.
            </p>
          </div>
          <HabitForm action={saveHabitAction} submitLabel="Crear hábito" />
        </div>

        <div className="space-y-4">
          {habitsData.habits.length === 0 ? (
            <EmptyState
              title="Todavía no creaste hábitos"
              description="Agregá tus primeras rutinas y empezá a registrar cumplimiento diario o semanal."
            />
          ) : (
            habitsData.habits.map((habit) => {
              const logCount = habitsData.recentLogs.filter((log) => log.habit_id === habit.id).length;

              return (
                <article key={habit.id} className="rounded-[28px] bg-[var(--card)] p-5 shadow-[0_20px_44px_rgba(0,0,0,0.24)]">
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-white">{habit.title}</h3>
                        <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text-muted)]">
                          {HABIT_FREQUENCY_LABELS[habit.frequency]}
                        </span>
                        <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text-muted)]">
                          {habit.is_active ? "Activo" : "Pausado"}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-soft)]">
                        Creado el {formatDate(habit.created_at.slice(0, 10))}. {logCount} registros en los últimos 7 días.
                      </p>
                      <form action={toggleHabitCompletionAction}>
                        <input type="hidden" name="habit_id" value={habit.id} />
                        <button
                          type="submit"
                          className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--primary-hover)]"
                        >
                          {completedToday.has(habit.id) ? "Desmarcar hoy" : "Marcar hoy"}
                        </button>
                      </form>
                    </div>

                    <div className="grid gap-4 xl:w-[360px]">
                      <HabitForm
                        action={saveHabitAction}
                        submitLabel="Guardar cambios"
                        defaultValues={{
                          id: habit.id,
                          title: habit.title,
                          frequency: habit.frequency,
                          isActive: habit.is_active,
                        }}
                      />
                      <form action={deleteHabitAction}>
                        <input type="hidden" name="habit_id" value={habit.id} />
                        <button
                          type="submit"
                          className="w-full rounded-[18px] bg-[rgba(225,29,72,0.14)] px-4 py-3 text-sm font-medium text-rose-100 hover:bg-[rgba(225,29,72,0.22)]"
                        >
                          Eliminar hábito
                        </button>
                      </form>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
