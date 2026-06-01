import { redirect } from "next/navigation";

import { signOutAction } from "@/app/actions/auth";
import { AppShell } from "@/components/app-shell";
import { SetupNotice } from "@/components/setup-notice";
import { getCurrentUserContext } from "@/lib/queries";
import { getSupabaseConfig } from "@/lib/supabase/config";

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = getSupabaseConfig();
  const userContext = await getCurrentUserContext();

  if (!userContext) {
    redirect("/login");
  }

  return (
    <AppShell
      heading="Panel privado"
      description="Organizá tu foco diario, revisá tu progreso y mantené tus hábitos y metas en un solo sistema."
      profileName={userContext.profile.full_name ?? userContext.user.email ?? "Usuario"}
      planName={userContext.plan.name}
      signOutAction={signOutAction}
    >
      {!config ? (
        <div className="mb-6">
          <SetupNotice />
        </div>
      ) : null}
      {children}
    </AppShell>
  );
}
