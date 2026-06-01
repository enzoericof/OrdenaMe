export function SetupNotice() {
  return (
    <div className="rounded-[24px] bg-[rgba(249,115,22,0.14)] p-6 text-sm text-amber-100 shadow-[0_16px_32px_rgba(0,0,0,0.22)]">
      <p className="font-medium text-amber-50">Acceso temporalmente no disponible.</p>
      <p className="mt-2 leading-7 text-amber-100/80">
        En este momento no es posible iniciar sesión. Intentá nuevamente más tarde.
      </p>
    </div>
  );
}
