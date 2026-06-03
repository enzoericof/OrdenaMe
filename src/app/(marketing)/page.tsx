import Image from "next/image";
import Link from "next/link";

import { MarketingScrollProgress } from "@/components/marketing-scroll-progress";
import { APP_NAME } from "@/lib/constants";
import { formatGuaranies } from "@/lib/utils";

const features = [
  {
    eyebrow: "HÁBITOS",
    title: "Tu rutina en un solo lugar",
    description:
      "Registrá hábitos, mantené constancia y mirá tu avance sin depender de notas sueltas o recordatorios perdidos.",
  },
  {
    eyebrow: "METAS",
    title: "Objetivos con seguimiento real",
    description:
      "Separá metas grandes en progreso visible para que tu semana tenga dirección y no quede solo en intención.",
  },
  {
    eyebrow: "FOCO",
    title: "Menos ruido, más control",
    description:
      "OrdenaMe junta tus prioridades en un panel privado para que sepas qué sostener, qué ajustar y qué atacar hoy.",
  },
];

const audience = [
  "Estudiantes con materias, entregas y exámenes",
  "Personas que trabajan y estudian al mismo tiempo",
  "Freelancers con horarios y energía variables",
  "Jóvenes que quieren construir disciplina sin fricción",
];

const plans = [
  {
    name: "Básico",
    price: 50000,
    highlight: "Plan Básico",
    description: "Para quienes quieren empezar a organizar sus hábitos y metas personales de forma simple.",
    cta: "Empezar con Básico",
    items: [
      "Acceso privado con login",
      "Dashboard con resumen general",
      "Registro y seguimiento de hábitos",
      "Organización de metas personales",
      "Panel de frases motivacionales",
      "Soporte básico",
    ],
    accent: "bg-[var(--primary)]",
  },
  {
    name: "Productividad",
    price: 100000,
    highlight: "Plan Productividad",
    description: "Para quienes quieren un control más completo de su organización diaria.",
    cta: "Empezar con Productividad",
    items: [
      "Todo lo incluido en el Plan Básico",
      "Notas personales",
      "Lista de tareas / To-do list",
      "Control de finanzas personales",
      "Seguimiento de malos hábitos",
    ],
    accent: "bg-[var(--warning)]",
  },
];

const extras = [
  {
    title: "Acceso privado",
    description:
      "No hay registro abierto. Cada cuenta se habilita manualmente para mantener calidad, soporte y una experiencia más cuidada.",
  },
  {
    title: "Sistema simple",
    description:
      "Nada de menús infinitos ni herramientas frías. La idea es ordenar tu vida, no agregarte otra app pesada.",
  },
];

const faqs = [
  {
    question: "¿Qué resuelve OrdenaMe?",
    answer:
      "Centraliza hábitos, metas y seguimiento semanal para que dejes de repartir tu organización entre WhatsApp, notas, hojas y memoria.",
  },
  {
    question: "¿Es una app pública?",
    answer:
      "No. El acceso es privado y controlado. La idea es trabajar con una base chica al principio para cuidar la experiencia y construir mejor el producto.",
  },
  {
    question: "¿Para quién está pensado?",
    answer:
      "Para personas con muchas cosas en la cabeza: estudio, trabajo, objetivos personales, rutinas y necesidad de sostener foco en el día a día.",
  },
  {
    question: "¿Qué incluye el plan inicial?",
    answer:
      "Incluye acceso al panel, módulos de hábitos y metas, seguimiento básico y acompañamiento según el plan que elijas.",
  },
];

const comparisonRows = [
  ["Acceso privado con login", "Sí", "Sí"],
  ["Dashboard con resumen general", "Sí", "Sí"],
  ["Registro y seguimiento de hábitos", "Sí", "Sí"],
  ["Organización de metas personales", "Sí", "Sí"],
  ["Panel de frases motivacionales", "Sí", "Sí"],
  ["Notas personales", "No", "Sí"],
  ["Lista de tareas / To-do list", "No", "Sí"],
  ["Control de finanzas personales", "No", "Sí"],
  ["Seguimiento de malos hábitos", "No", "Sí"],
  ["Soporte básico", "Sí", "Sí"],
  ["Precio", "50.000 Gs/mes", "100.000 Gs/mes"],
];

export default function MarketingHome() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="mx-auto flex min-h-screen max-w-[1560px] flex-col bg-[var(--background)] px-4 pb-8 sm:px-6">
        <header className="fixed inset-x-0 top-0 z-50 bg-[var(--background)] px-4 sm:px-6">
          <div className="mx-auto grid max-w-[1560px] grid-cols-[auto_1fr_auto] items-center gap-6 py-4">
            <Link href="/" className="flex min-w-0 items-center gap-3 justify-self-start">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden">
                <Image
                  src="/brand/logo-solo.png"
                  alt={`${APP_NAME} isotipo`}
                  fill
                  className="scale-[1.55] object-cover object-center mix-blend-screen"
                  priority
                />
              </div>
              <div className="min-w-0">
                <span className="block text-[1.95rem] font-semibold leading-none tracking-[-0.05em] text-white">
                  Ordena<span className="text-[#ff2a75]">Me</span>
                </span>
                <span className="block pt-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#ff7ba8]">
                  Sistema personal privado
                </span>
              </div>
            </Link>

            <nav aria-label="Principal" className="hidden items-center justify-center gap-3 md:flex">
              <a
                href="#como-funciona"
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:bg-[var(--card)] hover:text-white"
              >
                Cómo funciona
              </a>
              <a
                href="#planes"
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:bg-[var(--card)] hover:text-white"
              >
                Planes
              </a>
              <a
                href="#preguntas"
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:bg-[var(--card)] hover:text-white"
              >
                Preguntas
              </a>
            </nav>

            <Link
              href="/login"
              className="justify-self-end rounded-full border border-[#ff4d86] bg-[#101018] px-7 py-2.5 text-sm font-semibold text-[#ffe7ef] hover:border-[#ff6a9b] hover:bg-[#151520]"
            >
              Entrar
            </Link>
          </div>
          <div className="relative left-1/2 w-screen -translate-x-1/2 border-t border-[rgba(255,255,255,0.02)]">
            <MarketingScrollProgress />
          </div>
        </header>

        <main className="flex-1 pt-[7.75rem]">
          <section className="flex min-h-[calc(100svh-8.5rem)] items-center pt-0">
            <div className="-translate-y-4 grid w-full gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center xl:-translate-y-5 xl:gap-10">
              <div className="mx-auto flex max-w-[760px] flex-col items-start text-left">
                <span className="inline-flex rounded-full border border-[#3a2230] bg-[var(--primary-soft)] px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-[#ff7ba8]">
                  Sistema personal de productividad
                </span>
                <h1 className="mt-5 text-[4.15rem] font-semibold leading-[0.93] tracking-[-0.05em] text-white sm:text-[4.6rem] xl:text-[4.85rem]">
                  Tomá el control de tu vida.
                </h1>
                <p className="mt-5 max-w-[700px] text-[1.32rem] leading-[2.45rem] text-[var(--text-muted)] xl:text-[1.38rem] xl:leading-[2.55rem]">
                  Un sistema personal para ver tu progreso, mantener el foco y ordenar tu día a día.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(255,0,92,0.22)] hover:bg-[var(--primary-hover)]"
                  >
                    Entrar al panel
                  </Link>
                  <a
                    href="#planes"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--card)]"
                  >
                    Ver planes
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[1060px]">
                <div className="pointer-events-none absolute inset-x-14 bottom-8 top-16 rounded-[56px] bg-[radial-gradient(circle,rgba(255,0,92,0.18)_0%,rgba(255,0,92,0.05)_42%,transparent_76%)] blur-3xl" />
                <div className="relative">
                  <Image
                    src="/brand/hero-visual.png"
                    alt="Vista previa de OrdenaMe en laptop y móvil"
                    width={1680}
                    height={1120}
                    className="h-auto w-full object-contain drop-shadow-[0_30px_90px_rgba(0,0,0,0.5)] [mask-image:linear-gradient(180deg,black_0%,black_72%,rgba(0,0,0,0.92)_82%,transparent_100%)]"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,transparent_8%,transparent_82%,var(--background)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_7%,transparent_93%,var(--background)_100%)]" />
                </div>
              </div>
            </div>
          </section>

          <section id="como-funciona" className="pt-12 pb-10 xl:pt-16">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#ff7ba8]">Cómo funciona</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Una estructura clara para bajar el ruido mental.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                La referencia de Presenza tiene una secuencia comercial muy clara. Acá la adaptamos a OrdenaMe para que
                se sienta más sistema que landing, pero con el mismo orden narrativo.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[var(--surface)] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#ff7ba8]">{feature.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-[var(--text-muted)]">{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="py-10">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[32px] bg-[var(--surface)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-soft)]">Para quién es</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  Hecho para personas con demasiadas cosas en la cabeza.
                </h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {audience.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-[rgba(255,255,255,0.04)] bg-[var(--card)] px-4 py-4 text-sm leading-7 text-[var(--text-muted)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] bg-[var(--card)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-soft)]">Posicionamiento</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#fb923c]">
                  Productividad con sensación de control.
                </h2>
                <p className="mt-5 text-sm leading-8 text-[var(--text-muted)]">
                  OrdenaMe no busca verse como una app genérica de productividad. Se presenta como un sistema personal,
                  privado y serio para sostener disciplina con más estructura y menos improvisación.
                </p>

                <div className="mt-8 space-y-3">
                  {extras.map((extra) => (
                    <div
                      key={extra.title}
                      className="rounded-[22px] border border-[rgba(255,255,255,0.04)] bg-[rgba(5,5,7,0.35)] p-5"
                    >
                      <h3 className="text-base font-semibold text-white">{extra.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{extra.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="planes" className="py-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#ff7ba8]">Planes</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Elegí cómo querés empezar a ordenar tu sistema.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                Tomamos la idea de planes bien visibles de la landing de referencia, pero con una lectura más sobria y
                compacta para el tono de OrdenaMe.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className="flex h-full flex-col rounded-[32px] bg-[var(--surface)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--text-soft)]">{plan.highlight}</p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{plan.name}</h3>
                      <p className="mt-4 max-w-md text-sm leading-8 text-[var(--text-muted)]">{plan.description}</p>
                    </div>
                    <div className={`rounded-full px-4 py-2 text-sm font-medium text-white ${plan.accent}`}>
                      {formatGuaranies(plan.price)} Gs/mes
                    </div>
                  </div>
                  <ul className="mt-7 flex-1 space-y-3 text-sm text-[var(--text-muted)]">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[20px] border border-[rgba(255,255,255,0.04)] bg-[var(--card)] px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/login"
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 ${
                      plan.accent === "bg-[var(--primary)]"
                        ? "bg-[var(--primary)] hover:bg-[var(--primary-hover)]"
                        : "bg-[var(--warning)] hover:brightness-110"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-6">
              <details className="group rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[var(--surface)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--text-soft)]">Comparación</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Compará los planes</h3>
                  </div>
                  <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[#ff7ba8] transition-transform duration-200 group-open:rotate-180">
                    ˅
                  </span>
                </summary>

                <div className="mt-6 overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm text-[var(--text-muted)]">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-[var(--text-soft)]">
                          Característica
                        </th>
                        <th className="px-4 py-3 text-right text-[11px] uppercase tracking-[0.24em] text-[var(--text-soft)]">
                          Básico
                        </th>
                        <th className="px-4 py-3 text-right text-[11px] uppercase tracking-[0.24em] text-[var(--text-soft)]">
                          Productividad
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map(([feature, basic, productivity]) => (
                        <tr key={feature}>
                          <td className="rounded-l-[18px] border border-[rgba(255,255,255,0.04)] bg-[var(--card)] px-4 py-4 text-white">
                            {feature}
                          </td>
                          <td className="border-y border-[rgba(255,255,255,0.04)] bg-[var(--card)] px-4 py-4 text-right">
                            {basic}
                          </td>
                          <td className="rounded-r-[18px] border border-[rgba(255,255,255,0.04)] bg-[var(--card)] px-4 py-4 text-right">
                            {productivity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </details>
            </div>
          </section>

          <section id="preguntas" className="py-10">
            <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#ff7ba8]">Preguntas</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Lo que casi siempre te vas a preguntar.
                </h2>
                <p className="mt-5 max-w-md text-base leading-8 text-[var(--text-muted)]">
                  Mantuvimos la idea del bloque FAQ de Presenza para cerrar objeciones, pero adaptado a esta etapa del
                  producto.
                </p>
              </div>

              <div className="grid gap-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-[24px] border border-[rgba(255,255,255,0.05)] bg-[var(--surface)] p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-8 text-[var(--text-muted)]">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(155deg,#130d14_0%,#1b0c16_50%,#2d0d19_100%)] px-7 py-12 shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:px-10 sm:py-16">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#ff9abb]">Empezá ahora</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Menos caos suelto. Más estructura diaria.
                </h2>
                <p className="mt-5 text-base leading-8 text-[rgba(248,250,252,0.76)] sm:text-lg">
                  Si querés organizar hábitos, metas y progreso desde un panel serio y privado, OrdenaMe ya tiene una
                  base lista para arrancar.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-hover)]"
                  >
                    Ir al acceso privado
                  </Link>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[rgba(255,255,255,0.08)]"
                  >
                    Volver arriba
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-8 border-t border-[rgba(255,255,255,0.05)] pt-6">
          <div className="flex flex-col gap-4 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">{APP_NAME}</p>
              <p className="mt-1">Sistema personal privado para organizar hábitos, metas y progreso.</p>
            </div>
            <Link href="/login" className="font-semibold text-[#ff7ba8] hover:text-[#ff9bbb]">
              Ir al acceso privado
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
