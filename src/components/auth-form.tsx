"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

type ActionState = {
  error?: string;
  success?: string;
};

type AuthFormProps = {
  action: (
    prevState: ActionState,
    formData: FormData,
  ) => Promise<ActionState>;
  title: string;
  description: string;
  submitLabel: string;
  emailOnly?: boolean;
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-[18px] border border-[#3c2330] bg-[#0d0d12] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_34px_rgba(255,0,92,0.18)] hover:border-[#6a2943] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_44px_rgba(255,0,92,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Procesando..." : label}
    </button>
  );
}

export function AuthForm({
  action,
  title,
  description,
  submitLabel,
  emailOnly = false,
}: AuthFormProps) {
  const [state, formAction] = useActionState(action, {});

  return (
    <form action={formAction} className="space-y-4 rounded-[30px] bg-[var(--surface)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
        <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{description}</p>
      </div>

      <label className="block text-sm text-[var(--text-muted)]">
        Email
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-[18px] border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-white outline-none placeholder:text-[var(--text-soft)] focus:border-[#5b2439]"
          placeholder="vos@ejemplo.com"
        />
      </label>

      {!emailOnly ? (
        <label className="block text-sm text-[var(--text-muted)]">
          Contraseña
          <input
            name="password"
            type="password"
            required
            className="mt-2 w-full rounded-[18px] border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-white outline-none placeholder:text-[var(--text-soft)] focus:border-[#5b2439]"
            placeholder="********"
          />
        </label>
      ) : null}

      {state.error ? (
        <p className="rounded-[18px] bg-[rgba(225,29,72,0.14)] px-4 py-3 text-sm text-rose-100">
          {state.error}
        </p>
      ) : null}

      {state.success ? (
        <p className="rounded-[18px] bg-[rgba(34,197,94,0.14)] px-4 py-3 text-sm text-emerald-100">
          {state.success}
        </p>
      ) : null}

      <SubmitButton label={submitLabel} />
    </form>
  );
}
