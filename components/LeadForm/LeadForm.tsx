"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const t = useTranslations("leadFormSection");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setState("success");
      event.currentTarget.reset();
    } catch {
      setState("error");
    }
  }

  const fields = [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "workshopName", type: "text", required: true },
    { name: "phone", type: "tel", required: false },
    { name: "city", type: "text", required: true },
  ] as const;

  return (
    <form
      onSubmit={handleSubmit}
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
              disabled={state === "submitting" || state === "success"}
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
            disabled={state === "submitting" || state === "success"}
            className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-60"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <button
          type="submit"
          disabled={state === "submitting" || state === "success"}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {state === "submitting" ? t("submitting") : t("submit")}
        </button>

        {state === "success" && (
          <p className="text-sm font-medium text-success-strong">
            {t("success")}
          </p>
        )}
        {state === "error" && (
          <p className="text-sm font-medium text-destructive">{t("error")}</p>
        )}
      </div>
    </form>
  );
}
