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
      className="rounded-2xl bg-[#baff6c] px-4 py-3 text-sm font-semibold text-[#0a1611] transition hover:bg-[#d5ff9f] disabled:cursor-not-allowed disabled:opacity-70"
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
    <form action={formAction} className="space-y-4 rounded-[28px] border border-white/10 bg-white/6 p-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm text-stone-300">{description}</p>
      </div>

      <label className="block text-sm text-stone-200">
        Email
        <input
          name="email"
          type="text"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-stone-500 focus:border-emerald-300"
          placeholder="vos@ejemplo.com o admin"
        />
      </label>

      {!emailOnly ? (
        <label className="block text-sm text-stone-200">
          Contrasena
          <input
            name="password"
            type="password"
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-stone-500 focus:border-emerald-300"
            placeholder="********"
          />
        </label>
      ) : null}

      {state.error ? (
        <p className="rounded-2xl border border-rose-400/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
          {state.error}
        </p>
      ) : null}

      {state.success ? (
        <p className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
          {state.success}
        </p>
      ) : null}

      <SubmitButton label={submitLabel} />
    </form>
  );
}
