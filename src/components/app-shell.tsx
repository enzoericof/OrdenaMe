import Link from "next/link";

import { APP_NAME, COMING_SOON_MODULES } from "@/lib/constants";

type AppShellProps = {
  children: React.ReactNode;
  heading: string;
  description: string;
  profileName: string;
  planName: string;
  signOutAction: () => Promise<void>;
};

const navItems = [
  { href: "/panel", label: "Dashboard" },
  { href: "/panel/habits", label: "Habitos" },
  { href: "/panel/goals", label: "Metas" },
];

export function AppShell({
  children,
  heading,
  description,
  profileName,
  planName,
  signOutAction,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#2f6a5c_0%,#12332d_36%,#081311_72%)] text-stone-50">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-4 lg:flex-row lg:px-6">
        <aside className="w-full rounded-[32px] border border-white/10 bg-white/6 p-5 backdrop-blur lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-80">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">Panel privado</p>
              <h1 className="mt-2 text-2xl font-semibold">{APP_NAME}</h1>
            </div>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-emerald-100">
              {planName}
            </span>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-emerald-100/70">Cuenta activa</p>
            <p className="mt-2 text-lg font-medium">{profileName}</p>
            <p className="mt-1 text-sm text-stone-300">
              Acceso privado. Tus datos estan aislados y protegidos por usuario.
            </p>
          </div>

          <nav className="mt-8 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm text-stone-200 transition hover:border-white/10 hover:bg-white/8 hover:text-white"
              >
                <span>{item.label}</span>
                <span className="text-stone-500">/</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 rounded-3xl border border-dashed border-white/15 p-4">
            <p className="text-sm font-medium text-white">Preparado para crecer</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {COMING_SOON_MODULES.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-stone-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <form action={signOutAction} className="mt-8">
            <button
              type="submit"
              className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/14"
            >
              Cerrar sesion
            </button>
          </form>
        </aside>

        <main className="flex-1 rounded-[32px] border border-white/10 bg-black/18 p-6 backdrop-blur">
          <div className="border-b border-white/10 pb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">Sistema personal</p>
            <h2 className="mt-3 text-3xl font-semibold">{heading}</h2>
            <p className="mt-2 max-w-2xl text-sm text-stone-300">{description}</p>
          </div>
          <div className="mt-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
