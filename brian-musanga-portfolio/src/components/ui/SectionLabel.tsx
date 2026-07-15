export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 bg-foreground" aria-hidden="true" />
      <span className="label">
        {index} / {children}
      </span>
    </div>
  );
}
