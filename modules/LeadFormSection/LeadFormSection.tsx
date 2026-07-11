import { Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LeadForm } from "@/components/LeadForm/LeadForm";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionDescription } from "@/components/ui/SectionDescription";

export async function LeadFormSection() {
  const t = await getTranslations("leadFormSection");

  return (
    <section
      id="zgloszenie"
      className="scroll-mt-20 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <SectionBadge icon={<Sparkles className="h-4 w-4 text-primary" />}>
            {t("badge")}
          </SectionBadge>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            {t("title")}
          </h2>
          <SectionDescription align="center" className="mt-4">
            {t("description")}
          </SectionDescription>
        </div>

        <div className="mt-10">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
