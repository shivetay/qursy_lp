import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STEP_ITEMS } from "@/lib/stepItems";

export async function HowItWorksSection() {
  const t = await getTranslations("howItWorksSection");

  return (
    <section id="jak-dolaczyc" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {STEP_ITEMS.map((step) => (
            <div
              key={step.key}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="font-serif text-3xl font-semibold text-primary/40">
                {step.n}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                {t(`items.${step.key}.title`)}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {t(`items.${step.key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
