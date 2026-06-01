import Link from "next/link";
import { redirect } from "next/navigation";

import { AuthForm } from "@/components/auth-form";
import { SetupNotice } from "@/components/setup-notice";
import { signInAction } from "@/app/actions/auth";
import { getCurrentUserContext } from "@/lib/queries";
import { getSupabaseConfig } from "@/lib/supabase/config";

export default async function LoginPage() {
  const userContext = await getCurrentUserContext();

  if (userContext) {
    redirect("/panel");
  }

  return (
    <div className="w-full space-y-4">
      {getSupabaseConfig() ? null : <SetupNotice />}
      <AuthForm
        action={signInAction}
        title="Entrar a tu panel"
        description="Iniciá sesión con la cuenta que fue creada para vos."
        submitLabel="Iniciar sesión"
      />
      <div className="flex items-center justify-between px-1 text-sm text-stone-300">
        <Link href="/forgot-password" className="transition hover:text-white">
          Olvidé mi contraseña
        </Link>
        <Link href="/" className="transition hover:text-white">
          Ver presentación
        </Link>
      </div>
    </div>
  );
}
