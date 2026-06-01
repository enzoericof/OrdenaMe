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

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="rounded-[28px] border border-white/10 bg-white/6 p-5">
            <p className="text-sm text-stone-300">Límite del plan</p>
            <p className="mt-3 text-4xl font-semibold text-white">{userContext.plan.habit_limit}</p>
            <p className="mt-2 text-sm text-stone-400">Hábitos activos permitidos en tu cuenta.</p>
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
                <article key={habit.id} className="rounded-[28px] border border-white/10 bg-white/6 p-5">
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-white">{habit.title}</h3>
                        <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-stone-300">
                          {HABIT_FREQUENCY_LABELS[habit.frequency]}
                        </span>
                        <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-stone-300">
                          {habit.is_active ? "Activo" : "Pausado"}
                        </span>
                      </div>
                      <p className="text-sm text-stone-400">
                        Creado el {formatDate(habit.created_at.slice(0, 10))}. {logCount} registros en los últimos 7 días.
                      </p>
                      <form action={toggleHabitCompletionAction}>
                        <input type="hidden" name="habit_id" value={habit.id} />
                        <button
                          type="submit"
                          className="rounded-full bg-[#d8ff96] px-4 py-2 text-sm font-semibold text-[#0a1611] transition hover:bg-[#e7ffbc]"
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
                          className="w-full rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-100 transition hover:bg-rose-500/20"
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
