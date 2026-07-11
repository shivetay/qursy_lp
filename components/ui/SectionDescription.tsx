import { cn } from "@/lib/utils";

type SectionDescriptionProps = {
  children: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionDescription({
  children,
  align = "left",
  className,
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty",
        align === "center" && "mx-auto",
        className
      )}
    >
      {children}
    </p>
  );
}
