import { SectionLabel } from "@/components/ui/SectionLabel";
import { home } from "@/lib/data/site-content";

export function HowIHelp() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
      <SectionLabel index="01">How I help</SectionLabel>

      <div className="mt-12 divide-y divide-border border-y border-border">
        {home.pillars.map((pillar) => (
          <div
            key={pillar.index}
            className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-12 sm:gap-8"
          >
            <div className="sm:col-span-4">
              <span className="label mb-3 block">{pillar.index}</span>
              <h2 className="font-display text-h2 leading-none tracking-tight text-foreground">
                {pillar.title}
              </h2>
            </div>
            <p className="max-w-[60ch] text-body text-muted-foreground sm:col-span-7 sm:col-start-6">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
