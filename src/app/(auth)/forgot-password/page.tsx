import Link from "next/link";

import { AuthForm } from "@/components/auth-form";
import { SetupNotice } from "@/components/setup-notice";
import { forgotPasswordAction } from "@/app/actions/auth";
import { getSupabaseConfig } from "@/lib/supabase/config";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full space-y-4">
      {getSupabaseConfig() ? null : <SetupNotice />}
      <AuthForm
        action={forgotPasswordAction}
        title="Recuperar contraseña"
        description="Te enviaremos un correo con el enlace para crear una nueva contraseña."
        submitLabel="Enviar enlace"
        emailOnly
      />
      <div className="px-1 text-sm text-stone-300">
        <Link href="/login" className="transition hover:text-white">
          Volver al login
        </Link>
      </div>
    </div>
  );
}
