import Link from "next/link";

import { APP_NAME, APP_TAGLINE } from "@/lib/constants";
import { formatGuaranies } from "@/lib/utils";

const plans = [
  {
    name: "Básico",
    price: 50000,
    highlight: "Validación simple",
    items: ["Login privado", "Dashboard", "Hábitos", "Metas", "Límites y seguridad"],
  },
  {
    name: "Fundador",
    price: 75000,
    highlight: "Oferta inicial",
    items: [
      "Cupo limitado",
      "Configuración inicial incluida",
      "Feedback directo contigo",
      "Mínimo 3 meses",
    ],
  },
];

const audience = [
  "Estudiantes con materias y exámenes",
  "Personas que trabajan y estudian",
  "Freelancers con rutinas dispersas",
  "Jóvenes que quieren construir disciplina",
];

export default function MarketingHome() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <section className="rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div>
              <span className="inline-flex rounded-full border border-[#3a2230] bg-[var(--primary-soft)] px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-[#ff7ba8]">
                Sistema personal privado
              </span>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-7xl">
                {APP_NAME}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--text-muted)] sm:text-xl">
                {APP_TAGLINE} Centralizá tu día entre hábitos, metas y progreso semanal desde un solo panel.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/login"
                  className="rounded-full border border-[#ff4d86] bg-[#101018] px-7 py-3.5 text-sm font-semibold text-[#ffe7ef] hover:border-[#ff6a9b] hover:bg-[#151520]"
                >
                  Entrar al panel
                </Link>
                <a
                  href="#planes"
                  className="rounded-full border border-[#8b5cf6] bg-[#101018] px-7 py-3.5 text-sm font-semibold text-[#efe7ff] hover:border-[#a78bfa] hover:bg-[#151520]"
                >
                  Ver planes
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] bg-[var(--card)] p-6">
                <p className="text-sm text-[var(--text-muted)]">Lo que resuelve</p>
                <p className="mt-4 text-4xl font-semibold leading-none text-[#ff6a9b]">Orden mental</p>
                <p className="mt-4 text-sm leading-8 text-[var(--text-muted)]">
                  Menos cosas sueltas en WhatsApp, notas y hojas separadas.
                </p>
              </div>
              <div className="rounded-[28px] bg-[var(--card)] p-6">
                <p className="text-sm text-[var(--text-muted)]">Modelo inicial</p>
                <p className="mt-4 text-4xl font-semibold leading-none text-[#c084fc]">Acceso privado</p>
                <p className="mt-4 text-sm leading-8 text-[var(--text-muted)]">
                  Sin registro público. Cada cuenta se crea manualmente para cuidar soporte y calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] bg-[var(--surface)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-soft)]">Para quién es</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Hecho para personas con demasiadas cosas en la cabeza.
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {audience.map((item) => (
                <div key={item} className="rounded-[22px] bg-[var(--card)] px-4 py-4 text-sm leading-7 text-[var(--text-muted)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-[var(--card)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-soft)]">Posicionamiento</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#fb923c]">Convertí tu vida en un dashboard.</h2>
            <p className="mt-5 text-sm leading-8 text-[var(--text-muted)]">
              OrdenaMe se presenta como un sistema personal para organizar hábitos, metas, tiempo y foco diario desde
              una interfaz privada, clara y firme.
            </p>
          </div>
        </section>

        <section id="planes" className="grid gap-6 pb-14 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-[32px] bg-[var(--surface)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--text-soft)]">{plan.highlight}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{plan.name}</h3>
                </div>
                <div className={`rounded-full px-4 py-2 text-sm font-medium text-white ${
                  plan.name === "Básico" ? "bg-[var(--primary)]" : "bg-[var(--warning)]"
                }`}>
                  {formatGuaranies(plan.price)} Gs/mes
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
                {plan.items.map((item) => (
                  <li key={item} className="rounded-[20px] bg-[var(--card)] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
