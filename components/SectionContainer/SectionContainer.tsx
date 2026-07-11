export function SectionContainer({
  children,
  sectionId,
}: {
  children: React.ReactNode;
  sectionId?: string;
}) {
  return (
    <section
      id={sectionId}
      className="relative overflow-hidden border-b border-border bg-secondary/40"
    >
      {children}
    </section>
  );
}
