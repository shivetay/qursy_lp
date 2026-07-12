import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionDescription } from "@/components/ui/SectionDescription";
import { qursyRichText } from "@/lib/qursyRichText";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-script text-3xl font-bold leading-none text-foreground">
                qursy
              </span>
            </Link>
            <SectionDescription className="mt-4">
              {t("description")}
            </SectionDescription>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t("discover.title")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/?type=warsztat" className="hover:text-foreground">
                  {t("discover.workshops")}
                </Link>
              </li>
              <li>
                <Link href="/?type=kurs" className="hover:text-foreground">
                  {t("discover.courses")}
                </Link>
              </li>
              <li>
                <Link
                  href="/?type=wydarzenie"
                  className="hover:text-foreground"
                >
                  {t("discover.events")}
                </Link>
              </li>
              <li>
                <Link
                  href="#dla-organizatorow"
                  className="hover:text-foreground"
                >
                  {t("discover.organizers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t("info.title")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t("info.about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t("info.terms")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t("info.privacy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t("info.cookies")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t("contact.title")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="hover:text-foreground"
                >
                  {t("contact.email")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
                  className="hover:text-foreground"
                >
                  {t("contact.phone")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{t("contact.address")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            {t.rich("copyright", {
              year: new Date().getFullYear(),
              ...qursyRichText,
            })}
          </p>
          <p>{t.rich("dataAdmin", qursyRichText)}</p>
        </div>
      </div>
    </footer>
  );
}
