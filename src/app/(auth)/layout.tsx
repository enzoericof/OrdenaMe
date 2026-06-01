export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#275b4f_0%,#112923_32%,#07110f_72%)] px-4 py-8 text-white">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[36px] border border-white/10 bg-white/6 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/75">OrdenaMe</p>
          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-tight">
            Un panel privado para dejar de vivir entre recordatorios sueltos.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
            Hábitos, metas y seguimiento diario en un solo lugar. Acceso privado, cuentas creadas manualmente y foco
            total en simplicidad.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Hábitos", "Rutinas claras cada día."],
              ["Metas", "Seguimiento real de objetivos."],
              ["Privacidad", "Cada usuario ve solo lo suyo."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-lg font-medium">{title}</p>
                <p className="mt-2 text-sm text-stone-300">{body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flex items-center">{children}</section>
      </div>
    </div>
  );
}
