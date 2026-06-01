import Link from "next/link";

import { APP_NAME } from "@/lib/constants";

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
  { href: "/panel/habits", label: "Hábitos" },
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
    <div className="min-h-screen bg-transparent text-[var(--foreground)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-5 px-4 py-4 lg:flex-row lg:px-6">
        <aside className="w-full rounded-[30px] border border-[var(--border)] bg-[var(--sidebar)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-80">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-soft)]">
                Sistema privado
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">{APP_NAME}</h1>
            </div>
            <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {planName}
            </span>
          </div>

          <div className="mt-8 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-soft)]">Cuenta activa</p>
            <p className="mt-3 text-lg font-medium text-white">{profileName}</p>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
              Acceso privado. Tus datos están aislados y protegidos por usuario.
            </p>
          </div>

          <nav className="mt-8 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-[18px] border border-transparent bg-transparent px-4 py-3 text-sm text-[var(--text-muted)] hover:border-[var(--border)] hover:bg-[var(--card)] hover:text-white"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[var(--text-soft)]">0{index + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 rounded-[24px] bg-[var(--card)] p-4">
            <p className="text-sm font-medium text-white">Sistema personal</p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              Un panel para ordenar hábitos, metas y seguimiento diario con foco en claridad y control.
            </p>
          </div>

          <form action={signOutAction} className="mt-8">
            <button
              type="submit"
              className="w-full rounded-[18px] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-white hover:border-[#3a2230] hover:bg-[#1a1218]"
            >
              Cerrar sesión
            </button>
          </form>
        </aside>

        <main className="flex-1 rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="border-b border-[var(--border)] pb-6">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-soft)]">Panel de control</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">{heading}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">{description}</p>
          </div>
          <div className="mt-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
