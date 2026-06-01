export function SetupNotice() {
  return (
    <div className="rounded-[28px] border border-amber-500/30 bg-amber-500/10 p-6 text-sm text-amber-100">
      <p className="font-medium text-amber-50">Falta configurar Supabase.</p>
      <p className="mt-2 text-amber-100/80">
        Carga <code>NEXT_PUBLIC_SUPABASE_URL</code> y{" "}
        <code>NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY</code> para activar login, dashboard y datos reales.
      </p>
    </div>
  );
}
