"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import { LOCAL_AUTH_COOKIE } from "@/lib/constants";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type ActionState = {
  error?: string;
  success?: string;
};

const loginSchema = z.object({
  email: z.union([z.email("Ingresa un email valido."), z.literal("admin")]),
  password: z.string().min(1, "Ingresa tu contrasena."),
});

const forgotPasswordSchema = z.object({
  email: z.email("Ingresa un email valido."),
});

const resetSchema = z.object({
  password: z.string().min(8, "La contrasena debe tener al menos 8 caracteres."),
});

export async function signInAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Datos invalidos." };
  }

  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    if (
      parsed.data.email === "admin" &&
      parsed.data.password === "admin"
    ) {
      const cookieStore = await cookies();
      cookieStore.set(LOCAL_AUTH_COOKIE, "admin", {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        path: "/",
      });

      revalidatePath("/panel");
      redirect("/panel");
    }

    return {
      error: "En modo local, usa admin como usuario y admin como contrasena.",
    };
  }

  const { error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error) {
    return { error: "No se pudo iniciar sesion. Verifica tus credenciales." };
  }

  revalidatePath("/panel");
  redirect("/panel");
}

export async function forgotPasswordAction(
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = forgotPasswordSchema.safeParse({
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Email invalido." };
  }

  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return {
      error: "La recuperacion de contrasena requiere Supabase configurado.",
    };
  }

  const { error } = await supabase.auth.resetPasswordForEmail(parsed.data.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback?next=/reset-password`,
  });

  if (error) {
    return { error: "No se pudo iniciar la recuperacion." };
  }

  return {
    success: "Te enviamos un correo para restablecer tu contrasena.",
  };
}

export async function resetPasswordAction(
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = resetSchema.safeParse({
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Contrasena invalida." };
  }

  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return {
      error: "La actualizacion de contrasena requiere Supabase configurado.",
    };
  }

  const { error } = await supabase.auth.updateUser({
    password: parsed.data.password,
  });

  if (error) {
    return { error: "No se pudo actualizar la contrasena." };
  }

  return { success: "Contrasena actualizada. Ya puedes volver a iniciar sesion." };
}

export async function signOutAction() {
  const supabase = await getSupabaseServerClient();

  if (supabase) {
    await supabase.auth.signOut();
  } else {
    const cookieStore = await cookies();
    cookieStore.delete(LOCAL_AUTH_COOKIE);
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
