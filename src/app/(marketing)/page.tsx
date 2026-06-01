import Link from "next/link";

import { APP_NAME, APP_TAGLINE } from "@/lib/constants";
import { formatGuaranies } from "@/lib/utils";

const plans = [
  {
    name: "Basico",
    price: 50000,
    highlight: "Validacion simple",
    items: ["Login privado", "Dashboard", "Habitos", "Metas", "Limites y seguridad"],
  },
  {
    name: "Fundador",
    price: 75000,
    highlight: "Oferta inicial",
    items: [
      "Cupo limitado",
      "Configuracion inicial incluida",
      "Feedback directo contigo",
      "Minimo 3 meses",
    ],
  },
];

export default function MarketingHome() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1612_0%,#102720_42%,#f5f0e8_42%,#f5f0e8_100%)] text-stone-950">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <section className="overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top_left,#6ee7b7_0%,#24554b_30%,#081311_78%)] px-6 py-8 text-white shadow-2xl shadow-black/30 sm:px-10 sm:py-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-100">
                Sistema personal privado
              </span>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                {APP_NAME}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
                {APP_TAGLINE} Centraliza tu dia entre habitos, metas y progreso semanal desde un solo panel.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/login"
                  className="rounded-full bg-[#d8ff96] px-6 py-3 text-sm font-semibold text-[#0a1611] transition hover:bg-[#e7ffbc]"
                >
                  Entrar al panel
                </Link>
                <a
                  href="#planes"
                  className="rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14"
                >
                  Ver planes
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:w-[420px]">
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-emerald-100/80">Lo que resuelve</p>
                <p className="mt-4 text-3xl font-semibold">Orden mental</p>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  Menos cosas sueltas en WhatsApp, notas y hojas separadas.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-emerald-100/80">Modelo inicial</p>
                <p className="mt-4 text-3xl font-semibold">Acceso privado</p>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  Sin registro publico. Cada cuenta se crea manualmente para cuidar soporte y calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 px-1 py-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-lg shadow-stone-300/20">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">Para quien es</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-950">Hecho para personas con demasiadas cosas en la cabeza.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Estudiantes con materias y examenes",
                "Personas que trabajan y estudian",
                "Freelancers con rutinas dispersas",
                "Jovenes que quieren construir disciplina",
              ].map((item) => (
                <div key={item} className="rounded-[24px] border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-stone-200 bg-[#ece6da] p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Demo comercial</p>
            <h2 className="mt-4 text-3xl font-semibold">Primer objetivo</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              Validar el producto con 3 clientes reales usando el panel durante 30 dias. OrdenaMe se vende como
              servicio cerrado, no como software ilimitado.
            </p>
          </div>
        </section>

        <section id="planes" className="grid gap-6 pb-14 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-[34px] border border-stone-200 bg-white p-8 shadow-lg shadow-stone-300/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">{plan.highlight}</p>
                  <h3 className="mt-3 text-3xl font-semibold">{plan.name}</h3>
                </div>
                <div className="rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white">
                  {formatGuaranies(plan.price)} Gs/mes
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-stone-700">
                {plan.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-stone-50 px-4 py-3">
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
