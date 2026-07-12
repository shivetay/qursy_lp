import Link from "next/link";
import type { Route } from "next";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: Route | `#${string}`;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  icon,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold",
        variant === "primary" &&
          "bg-primary text-primary-foreground transition-opacity hover:opacity-90",
        variant === "secondary" &&
          "border border-border bg-background text-foreground transition-colors hover:border-primary/50",
        className
      )}
    >
      {children}
      {icon}
    </Link>
  );
}
