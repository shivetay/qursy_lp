"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const NAV = [
  { key: "whatIs", href: "#czym-jest" },
  { key: "benefits", href: "#dla-organizatorow" },
  { key: "howToJoin", href: "#jak-dolaczyc" },
  { key: "apply", href: "#zgloszenie" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label={t("homeAria")}
        >
          <span className="font-script text-3xl font-bold leading-none tracking-tight text-foreground">
            qursy
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label={t("mainNav")}
        >
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(`organizers.${item.key}`)}
            </Link>
          ))}
          <Link
            href="#zgloszenie"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("organizers.cta")}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
          aria-label={t("mobileNav")}
        >
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {t(`organizers.${item.key}`)}
            </Link>
          ))}
          <Link
            href="#zgloszenie"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            {t("organizers.cta")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
