import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFIT_ITEMS } from "@/lib/benefitItems";

export async function BenefitsSection() {
  const t = await getTranslations("benefitsSection");

  return (
    <section
      id="dla-organizatorow"
      className="scroll-mt-20 border-y border-border bg-secondary/40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border shadow-soft-lg">
            <Image
              src="/assetes/images/organizer.png"
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            align="left"
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {BENEFIT_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.key} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {t(`items.${item.key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t(`items.${item.key}.text`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
