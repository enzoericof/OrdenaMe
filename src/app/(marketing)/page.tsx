import Image from "next/image";
import Link from "next/link";

import { MarketingScrollProgress } from "@/components/marketing-scroll-progress";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";
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
    highlight: "Validación simple",
    description: "Para empezar con hábitos, metas y acceso privado a tu sistema personal.",
    items: ["Login privado", "Dashboard personal", "Gestión de hábitos", "Gestión de metas", "Límites y seguridad"],
    accent: "bg-[var(--primary)]",
    featured: false,
  },
  {
    name: "Fundador",
    price: 75000,
    highlight: "Oferta inicial",
    description: "Para quienes quieren entrar temprano, acompañar el producto y tener más cercanía.",
    items: ["Cupo limitado", "Configuración inicial incluida", "Feedback directo contigo", "Prioridad en mejoras", "Mínimo 3 meses"],
    accent: "bg-[var(--warning)]",
    featured: true,
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

export default function MarketingHome() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="mx-auto flex min-h-screen max-w-[1560px] flex-col bg-[var(--background)] px-4 pb-8 sm:px-6">
        <header className="sticky top-0 z-40 -mx-4 bg-[var(--background)] px-4 sm:-mx-6 sm:px-6">
          <div className="mx-auto grid max-w-[1720px] grid-cols-[auto_1fr_auto] items-center gap-6 py-4">
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

        <main className="flex-1 pt-8">
          <section className="flex min-h-[calc(100svh-8.5rem)] items-center pt-4">
            <div className="grid w-full gap-7 lg:grid-cols-[1.02fr_0.98fr] lg:items-center xl:gap-8">
              <div className="max-w-[780px]">
                <span className="inline-flex rounded-full border border-[#3a2230] bg-[var(--primary-soft)] px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-[#ff7ba8]">
                  Sistema personal para hábitos y metas
                </span>
                <h1 className="mt-5 text-[4.15rem] font-semibold leading-[0.93] tracking-[-0.05em] text-white sm:text-[4.6rem] xl:text-[4.85rem]">
                  Convertí tu vida en un dashboard.
                </h1>
                <p className="mt-5 max-w-[700px] text-[1.32rem] leading-[2.45rem] text-[var(--text-muted)] xl:text-[1.38rem] xl:leading-[2.55rem]">
                  {APP_TAGLINE} {APP_NAME} te ayuda a ordenar hábitos, metas y progreso semanal desde una interfaz
                  privada, clara y firme.
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

              <div className="grid gap-4">
                <div className="rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[var(--surface)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.38)] xl:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--text-soft)]">Estado actual</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">Orden mental</p>
                    </div>
                    <div className="rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm font-semibold text-[#ff7ba8]">
                      En foco
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-[22px] bg-[var(--card)] p-5">
                      <p className="text-sm text-[var(--text-muted)]">Hábitos activos</p>
                      <p className="mt-2 text-4xl font-semibold text-white">06</p>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                        Seguimiento simple para sostener constancia sin perder contexto.
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[22px] bg-[var(--card)] p-5">
                        <p className="text-sm text-[var(--text-muted)]">Metas</p>
                        <p className="mt-2 text-2xl font-semibold text-[#fb7185]">Priorizadas</p>
                      </div>
                      <div className="rounded-[22px] bg-[var(--card)] p-5">
                        <p className="text-sm text-[var(--text-muted)]">Acceso</p>
                        <p className="mt-2 text-2xl font-semibold text-[#f59e0b]">Privado</p>
                      </div>
                    </div>
                  </div>
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
                  className={`rounded-[32px] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)] ${
                    plan.featured
                      ? "bg-[linear-gradient(180deg,#181018_0%,#120d14_100%)]"
                      : "bg-[var(--surface)]"
                  }`}
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
                  <ul className="mt-7 space-y-3 text-sm text-[var(--text-muted)]">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[20px] border border-[rgba(255,255,255,0.04)] bg-[var(--card)] px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
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
