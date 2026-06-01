"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { buildFlashParams } from "@/lib/messages";
import { getCurrentUserContext } from "@/lib/queries";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getTodayDate } from "@/lib/utils";

const habitSchema = z.object({
  id: z.string().uuid().optional().or(z.literal("")),
  title: z.string().trim().min(2).max(120),
  frequency: z.enum(["daily", "weekly"]),
  isActive: z.boolean(),
});

function redirectWithMessage(
  message: string,
  tone: "success" | "error" = "success",
): never {
  redirect(`/panel/habits?${buildFlashParams(tone, message).toString()}`);
}

export async function saveHabitAction(formData: FormData) {
  const userContext = await getCurrentUserContext();
  const supabase = await getSupabaseServerClient();

  if (!userContext || !supabase) {
    redirectWithMessage("Necesitás iniciar sesión para editar hábitos.", "error");
  }

  const parsed = habitSchema.safeParse({
    id: formData.get("id"),
    title: formData.get("title"),
    frequency: formData.get("frequency"),
    isActive: formData.get("is_active") === "on",
  });

  if (!parsed.success) {
    redirectWithMessage("Revisa los datos del habito.", "error");
  }

  const { user, plan } = userContext;
  const id = parsed.data.id || undefined;

  if (!id && parsed.data.isActive) {
    const { count } = await supabase
      .from("habits")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("is_active", true);

    if ((count ?? 0) >= plan.habit_limit) {
      redirectWithMessage(`Tu plan permite hasta ${plan.habit_limit} hábitos activos.`, "error");
    }
  }

  if (id) {
    const { error } = await supabase
      .from("habits")
      .update({
        title: parsed.data.title,
        frequency: parsed.data.frequency,
        is_active: parsed.data.isActive,
      })
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) {
      redirectWithMessage("No se pudo actualizar el habito.", "error");
    }

    revalidatePath("/panel/habits");
    redirectWithMessage("Habito actualizado.");
  }

  const { error } = await supabase.from("habits").insert({
    user_id: user.id,
    title: parsed.data.title,
    frequency: parsed.data.frequency,
    is_active: parsed.data.isActive,
  });

  if (error) {
    redirectWithMessage("No se pudo crear el habito.", "error");
  }

  revalidatePath("/panel");
  revalidatePath("/panel/habits");
  redirectWithMessage("Habito creado.");
}

export async function deleteHabitAction(formData: FormData) {
  const userContext = await getCurrentUserContext();
  const supabase = await getSupabaseServerClient();
  const habitId = formData.get("habit_id");

  if (!userContext || !supabase || typeof habitId !== "string") {
    redirectWithMessage("No se pudo eliminar el habito.", "error");
  }

  const { error } = await supabase
    .from("habits")
    .delete()
    .eq("id", habitId)
    .eq("user_id", userContext.user.id);

  if (error) {
    redirectWithMessage("No se pudo eliminar el habito.", "error");
  }

  revalidatePath("/panel");
  revalidatePath("/panel/habits");
  redirectWithMessage("Habito eliminado.");
}

export async function toggleHabitCompletionAction(formData: FormData) {
  const userContext = await getCurrentUserContext();
  const supabase = await getSupabaseServerClient();
  const habitId = formData.get("habit_id");

  if (!userContext || !supabase || typeof habitId !== "string") {
    redirectWithMessage("No se pudo registrar el progreso.", "error");
  }

  const today = getTodayDate();

  const { data: existingLog } = await supabase
    .from("habit_logs")
    .select("id")
    .eq("user_id", userContext.user.id)
    .eq("habit_id", habitId)
    .eq("log_date", today)
    .maybeSingle();

  if (existingLog) {
    const { error } = await supabase
      .from("habit_logs")
      .delete()
      .eq("id", existingLog.id)
      .eq("user_id", userContext.user.id);

    if (error) {
      redirectWithMessage("No se pudo actualizar el registro.", "error");
    }

    revalidatePath("/panel");
    revalidatePath("/panel/habits");
    redirectWithMessage("Registro diario eliminado.");
  }

  const { error } = await supabase.from("habit_logs").insert({
    user_id: userContext.user.id,
    habit_id: habitId,
    log_date: today,
  });

  if (error) {
    redirectWithMessage("No se pudo registrar el habito.", "error");
  }

  revalidatePath("/panel");
  revalidatePath("/panel/habits");
  redirectWithMessage("Habito marcado como completado.");
}
