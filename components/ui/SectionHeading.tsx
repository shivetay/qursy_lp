import { cn } from "@/lib/utils";
import { SectionDescription } from "@/components/ui/SectionDescription";

type SectionHeadingProps = {
  eyebrow?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="font-script text-2xl font-bold text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <SectionDescription align={align} className="mt-4">
          {description}
        </SectionDescription>
      )}
    </div>
  );
}
