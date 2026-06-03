import Image from "next/image";
import Link from "next/link";

import { MarketingScrollProgress } from "@/components/marketing-scroll-progress";
import { APP_NAME } from "@/lib/constants";
import { formatGuaranies } from "@/lib/utils";

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

const faqs = [
  {
    question: "¿Qué es OrdenaMe?",
    answer:
      "OrdenaMe es un sistema personal de productividad que te permite organizar hábitos, metas y progreso diario desde un dashboard privado.",
  },
  {
    question: "¿Necesito instalar algo?",
    answer:
      "No. OrdenaMe funciona desde el navegador, por lo que podés usarlo desde tu computadora, tablet o celular.",
  },
  {
    question: "¿Mis datos son privados?",
    answer:
      "Sí. Cada usuario accede con su propia cuenta y visualiza únicamente la información de su panel personal.",
  },
  {
    question: "¿Puedo usarlo desde el celular?",
    answer:
      "Sí. OrdenaMe está pensado para funcionar desde el navegador, tanto en celular como en computadora.",
  },
  {
    question: "¿OrdenaMe es una app móvil?",
    answer: "No por ahora. Es una plataforma web, por lo que no necesitás descargar una aplicación.",
  },
  {
    question: "¿Puedo registrar mis finanzas personales?",
    answer:
      "Sí, en el Plan Productividad podés registrar ingresos, gastos, categorías y ver un resumen simple de tus movimientos.",
  },
  {
    question: "¿OrdenaMe se conecta con mi banco?",
    answer:
      "No. El registro financiero es manual. No solicitamos credenciales bancarias ni acceso a cuentas financieras.",
  },
  {
    question: "¿Qué significa control de malos hábitos?",
    answer:
      "Es una función para hacer seguimiento de hábitos que querés reducir o evitar, como procrastinar, gastar de más o perder demasiado tiempo en redes.",
  },
  {
    question: "¿Puedo cancelar mi plan?",
    answer: "Sí. Podés cancelar tu plan mensual antes del siguiente período de cobro.",
  },
  {
    question: "¿Cómo empiezo a usar OrdenaMe?",
    answer:
      "Elegís un plan, solicitás tu acceso y creamos tu cuenta privada para que puedas empezar a usar tu dashboard.",
  },
  {
    question: "¿Puedo pedir funciones personalizadas?",
    answer:
      "Sí. Las funciones o ajustes personalizados pueden evaluarse y cotizarse aparte según el caso.",
  },
  {
    question: "¿Para quién está pensado OrdenaMe?",
    answer:
      "Está pensado para estudiantes, personas que trabajan y estudian, jóvenes profesionales y cualquier persona que quiera organizar mejor sus hábitos, metas y rutina diaria.",
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
    <div id="inicio" className="min-h-screen bg-transparent text-white">
      <div className="mx-auto flex min-h-screen max-w-[1560px] flex-col bg-[var(--background)] px-4 pb-8 sm:px-6">
        <header className="fixed inset-x-0 top-0 z-50 bg-[var(--background)] px-4 sm:px-6">
          <div className="relative mx-auto flex max-w-[1560px] items-center justify-between gap-6 py-4">
            <a href="#inicio" className="flex min-w-0 items-center gap-3 justify-self-start">
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
            </a>

            <nav
              aria-label="Principal"
              className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 md:items-center md:justify-center md:gap-3"
            >
              <a
                href="#info"
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:bg-[var(--card)] hover:text-white"
              >
                Info
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
              className="justify-self-end rounded-full bg-[var(--primary)] px-7 py-2.5 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(255,0,92,0.22)] hover:bg-[var(--primary-hover)]"
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

          <section id="info" className="py-10 xl:py-14">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#ff7ba8]">Info</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Una forma simple de ordenar tu vida diaria
              </h2>
            </div>

            <div className="mt-8 grid gap-4">
              <details className="group rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[var(--surface)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#ff7ba8]">Introducción</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      Una forma simple de ordenar tu vida diaria
                    </h3>
                  </div>
                  <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[#ff7ba8] transition-transform duration-200 group-open:rotate-180">
                    ˅
                  </span>
                </summary>
                <div className="mt-5 max-w-4xl space-y-4 text-sm leading-8 text-[var(--text-muted)] sm:text-base">
                  <p>
                    OrdenaMe es un sistema personal de productividad que te ayuda a organizar tus hábitos, metas y
                    progreso desde un solo dashboard privado.
                  </p>
                  <p>
                    En lugar de tener tus objetivos en notas sueltas, tus hábitos en la cabeza y tu progreso sin medir,
                    OrdenaMe centraliza todo en una interfaz clara, visual y fácil de usar.
                  </p>
                </div>
              </details>

              <details className="group rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[var(--surface)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#ff7ba8]">Beneficios</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">¿Por qué usar OrdenaMe?</h3>
                  </div>
                  <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[#ff7ba8] transition-transform duration-200 group-open:rotate-180">
                    ˅
                  </span>
                </summary>
                <div className="mt-5 max-w-4xl space-y-4 text-sm leading-8 text-[var(--text-muted)] sm:text-base">
                  <p>
                    Porque organizarse no se trata solo de anotar cosas, sino de poder ver tu avance, mantener
                    constancia y tomar mejores decisiones sobre tu día a día.
                  </p>
                  <p>Con OrdenaMe podés:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Tener una visión clara de tus hábitos y metas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Medir tu progreso diario y semanal.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Mantener el foco en lo que querés mejorar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Reducir la improvisación en tu rutina.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Organizar tu vida personal desde un solo lugar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Usar un sistema privado, accesible desde cualquier navegador.</span>
                    </li>
                  </ul>
                </div>
              </details>

              <details className="group rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[var(--surface)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#ff7ba8]">Perfil</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">¿Para quién es?</h3>
                  </div>
                  <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[#ff7ba8] transition-transform duration-200 group-open:rotate-180">
                    ˅
                  </span>
                </summary>
                <div className="mt-5 max-w-4xl space-y-4 text-sm leading-8 text-[var(--text-muted)] sm:text-base">
                  <p>
                    OrdenaMe está pensado para personas que quieren mejorar su organización personal sin usar
                    herramientas complicadas.
                  </p>
                  <p>Es ideal para:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Estudiantes que quieren organizar hábitos, metas y responsabilidades.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Personas que trabajan y estudian.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Jóvenes profesionales con varias obligaciones.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Personas que quieren construir mejores rutinas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>Quienes desean medir su progreso personal con más claridad.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff4d86]" />
                      <span>
                        Personas que buscan dejar de tener su organización repartida entre notas, listas y aplicaciones
                        distintas.
                      </span>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          <section id="planes" className="py-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#ff7ba8]">Planes</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Elegí cómo querés empezar a ordenar tu sistema.
              </h2>
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
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#ff7ba8]">Preguntas</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[var(--surface)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.22)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{faq.question}</h3>
                    <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[#ff7ba8] transition-transform duration-200 group-open:rotate-180">
                      ˅
                    </span>
                  </summary>
                  <p className="mt-5 max-w-4xl text-sm leading-8 text-[var(--text-muted)] sm:text-base">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="py-10">
            <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(155deg,#130d14_0%,#1b0c16_50%,#2d0d19_100%)] px-7 py-12 shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:px-10 sm:py-16">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#ff9abb]">Empezá ahora</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Menos caos suelto. Más estructura diaria.
                </h2>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-hover)]"
                  >
                    Ir al acceso privado
                  </Link>
                  <a
                    href="#inicio"
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
          <div className="flex flex-col gap-6 text-sm text-[var(--text-muted)] lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-semibold text-white">{APP_NAME}</p>
              <p className="mt-1">Sistema personal privado para organizar hábitos, metas y progreso.</p>
              <p className="mt-1">Somos de Asunción, Paraguay.</p>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#ff7ba8]">
                Hecho por ingenieros informáticos
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              <a
                href="https://wa.me/?text=Hola%20OrdenaMe%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[var(--surface)] px-5 py-3 font-semibold text-white hover:bg-[var(--card)]"
              >
                Contacto por WhatsApp
              </a>
              <a
                href="mailto:contacto@ordename.app?subject=Consulta%20sobre%20OrdenaMe"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[var(--surface)] px-5 py-3 font-semibold text-white hover:bg-[var(--card)]"
              >
                Contacto por correo
              </a>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold text-[#ff7ba8] hover:text-[#ff9bbb]"
              >
                Ir al acceso privado
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
