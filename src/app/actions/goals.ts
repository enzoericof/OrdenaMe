"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { buildFlashParams } from "@/lib/messages";
import { getCurrentUserContext } from "@/lib/queries";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const goalSchema = z.object({
  id: z.string().uuid().optional().or(z.literal("")),
  title: z.string().trim().min(2).max(140),
  description: z.string().trim().max(400).optional().or(z.literal("")),
  status: z.enum(["pending", "in_progress", "completed", "cancelled"]),
  deadline: z.string().optional().or(z.literal("")),
});

function redirectWithMessage(
  message: string,
  tone: "success" | "error" = "success",
): never {
  redirect(`/panel/goals?${buildFlashParams(tone, message).toString()}`);
}

export async function saveGoalAction(formData: FormData) {
  const userContext = await getCurrentUserContext();
  const supabase = await getSupabaseServerClient();

  if (!userContext || !supabase) {
    redirectWithMessage("Necesitas iniciar sesion para editar metas.", "error");
  }

  const parsed = goalSchema.safeParse({
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
    status: formData.get("status"),
    deadline: formData.get("deadline"),
  });

  if (!parsed.success) {
    redirectWithMessage("Revisa los datos de la meta.", "error");
  }

  const { user, plan } = userContext;
  const id = parsed.data.id || undefined;
  const activeStatus: Array<"pending" | "in_progress"> = ["pending", "in_progress"];
  const nextStatusIsActive = activeStatus.some((status) => status === parsed.data.status);

  if (!id && nextStatusIsActive) {
    const { count } = await supabase
      .from("goals")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .in("status", activeStatus);

    if ((count ?? 0) >= plan.goal_limit) {
      redirectWithMessage(`Tu plan permite hasta ${plan.goal_limit} metas activas.`, "error");
    }
  }

  if (id) {
    const { data: currentGoal } = await supabase
      .from("goals")
      .select("status")
      .eq("id", id)
      .eq("user_id", user.id)
      .maybeSingle();

    const currentIsActive = currentGoal
      ? activeStatus.some((status) => status === currentGoal.status)
      : false;

    if (!currentIsActive && nextStatusIsActive) {
      const { count } = await supabase
        .from("goals")
        .select("id", { count: "exact", head: true })
        .eq("user_id", user.id)
        .in("status", activeStatus);

      if ((count ?? 0) >= plan.goal_limit) {
        redirectWithMessage(`Tu plan permite hasta ${plan.goal_limit} metas activas.`, "error");
      }
    }

    const { error } = await supabase
      .from("goals")
      .update({
        title: parsed.data.title,
        description: parsed.data.description || null,
        status: parsed.data.status,
        deadline: parsed.data.deadline || null,
      })
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) {
      redirectWithMessage("No se pudo actualizar la meta.", "error");
    }

    revalidatePath("/panel");
    revalidatePath("/panel/goals");
    redirectWithMessage("Meta actualizada.");
  }

  const { error } = await supabase.from("goals").insert({
    user_id: user.id,
    title: parsed.data.title,
    description: parsed.data.description || null,
    status: parsed.data.status,
    deadline: parsed.data.deadline || null,
  });

  if (error) {
    redirectWithMessage("No se pudo crear la meta.", "error");
  }

  revalidatePath("/panel");
  revalidatePath("/panel/goals");
  redirectWithMessage("Meta creada.");
}

export async function deleteGoalAction(formData: FormData) {
  const userContext = await getCurrentUserContext();
  const supabase = await getSupabaseServerClient();
  const goalId = formData.get("goal_id");

  if (!userContext || !supabase || typeof goalId !== "string") {
    redirectWithMessage("No se pudo eliminar la meta.", "error");
  }

  const { error } = await supabase
    .from("goals")
    .delete()
    .eq("id", goalId)
    .eq("user_id", userContext.user.id);

  if (error) {
    redirectWithMessage("No se pudo eliminar la meta.", "error");
  }

  revalidatePath("/panel");
  revalidatePath("/panel/goals");
  redirectWithMessage("Meta eliminada.");
}
