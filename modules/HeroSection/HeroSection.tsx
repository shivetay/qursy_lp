import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { SectionDescription } from "@/components/ui/SectionDescription";
import { qursyRichText } from "@/lib/qursyRichText";

export async function HeroSection() {
  const t = await getTranslations("heroSection");

  return (
    <SectionContainer>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div>
          <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-foreground text-balance sm:text-5xl lg:text-6xl">
            {t("titlePrefix")}{" "}
            <span className="font-script font-bold text-primary">
              {t("titleHighlight")}
            </span>
          </h1>
          <SectionDescription className="mt-5">
            {t.rich("description", qursyRichText)}
          </SectionDescription>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink
              href="#zgloszenie"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              {t("primaryCta")}
            </ButtonLink>
            <ButtonLink href="#czym-jest" variant="secondary">
              {t("secondaryCta")}
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-soft-lg">
            <Image
              src="/assetes/images/hero.png"
              alt={t("imageAlt")}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
