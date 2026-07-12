import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

export function SectionBadge({ children, icon, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
