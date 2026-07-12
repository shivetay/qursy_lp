import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-soft",
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
