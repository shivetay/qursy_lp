import { getTranslations } from "next-intl/server";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHAT_IS_ITEMS } from "@/lib/whatIsItems";
import { qursyRichText } from "@/lib/qursyRichText";

export async function WhatIsQursySection() {
  const t = await getTranslations("whatIsQursySection");

  return (
    <section id="czym-jest" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow={t.rich("eyebrow")}
          title={t("title")}
          description={t.rich("description", qursyRichText)}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_IS_ITEMS.map((item) => (
            <FeatureCard
              key={item.key}
              icon={item.icon}
              title={t(`items.${item.key}.title`)}
              description={t(`items.${item.key}.text`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
