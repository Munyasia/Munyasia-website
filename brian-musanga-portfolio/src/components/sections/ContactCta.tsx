import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EmphasisText } from "@/components/ui/EmphasisText";
import { home, personal } from "@/lib/data/site-content";

export function ContactCta() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
      <SectionLabel index="03">Contact</SectionLabel>

      <div className="mt-12 flex flex-col gap-6">
        <h2 className="max-w-3xl font-display text-h1 leading-none tracking-tight text-foreground">
          <EmphasisText text={home.ctaHeading} emphasis={home.ctaEmphasis} />
        </h2>
        <p className="max-w-[55ch] text-body text-muted-foreground">
          {home.ctaBody}
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-4">
          <Link href="/contact" className="btn-invert">
            Let&rsquo;s talk
          </Link>
          <a href={`mailto:${personal.email}`} className="link-invert label">
            {personal.email}
          </a>
        </div>
      </div>

      <div className="mt-16 border-t border-border" />
    </section>
  );
}
