import Link from "next/link";

import { resetPasswordAction } from "@/app/actions/auth";
import { ResetPasswordForm } from "@/components/reset-password-form";
import { SetupNotice } from "@/components/setup-notice";
import { getSupabaseConfig } from "@/lib/supabase/config";

export default function ResetPasswordPage() {
  return (
    <div className="w-full space-y-4">
      {getSupabaseConfig() ? null : <SetupNotice />}
      <ResetPasswordForm action={resetPasswordAction} />
      <div className="px-1 text-sm text-stone-300">
        <Link href="/login" className="transition hover:text-white">
          Volver al login
        </Link>
      </div>
    </div>
  );
}
