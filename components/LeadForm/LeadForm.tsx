"use client";

import { useActionState, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LeadFormState } from "@/types/lead";
import { leadFormInitialState, submitLead } from "@/app/actions/submitLead";

export function LeadForm() {
  const t = useTranslations("leadFormSection");
  const [state, formAction, pending] = useActionState<LeadFormState, FormData>(
    submitLead,
    leadFormInitialState
  );

  const fields = [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "workshopName", type: "text", required: true },
    { name: "phone", type: "tel", required: false },
    { name: "city", type: "text", required: true },
  ] as const;

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={cn(field.name === "workshopName" && "sm:col-span-2")}
          >
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-foreground"
            >
              {t(`fields.${field.name}`)}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={t(`placeholders.${field.name}`)}
              disabled={pending}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-60"
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            {t("fields.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={t("placeholders.message")}
            disabled={pending}
            className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-60"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {pending ? t("submitting") : t("submit")}
        </button>

        {state.ok && (
          <p className="text-sm font-medium text-success-strong">
            {t("success")}
          </p>
        )}
        {state.error === "server" && (
          <p className="text-sm font-medium text-destructive">
            {t("serverError")}
          </p>
        )}
      </div>
    </form>
  );
}
