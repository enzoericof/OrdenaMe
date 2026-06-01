export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent px-4 py-8 text-white">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[36px] bg-[var(--surface)] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-soft)]">OrdenaMe</p>
          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-tight tracking-tight text-white">
            Un panel privado para ordenar tu vida con claridad y control.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            Hábitos, metas y seguimiento diario en un solo lugar. Acceso privado, estructura clara y una interfaz
            pensada para enfocarte.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Hábitos", "Rutinas claras cada día."],
              ["Metas", "Seguimiento real de objetivos."],
              ["Privacidad", "Cada usuario ve solo lo suyo."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[24px] bg-[var(--card)] p-4">
                <p className="text-lg font-medium text-white">{title}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flex items-center">{children}</section>
      </div>
    </div>
  );
}
