export function SetupNotice() {
  return (
    <div className="rounded-[28px] border border-amber-500/30 bg-amber-500/10 p-6 text-sm text-amber-100">
      <p className="font-medium text-amber-50">Acceso temporalmente no disponible.</p>
      <p className="mt-2 text-amber-100/80">
        En este momento no es posible iniciar sesión. Intentá nuevamente más tarde.
      </p>
    </div>
  );
}
