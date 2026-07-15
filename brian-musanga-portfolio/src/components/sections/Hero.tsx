import Image from "next/image";
import Link from "next/link";
import { EmphasisText } from "@/components/ui/EmphasisText";
import { home, personal } from "@/lib/data/site-content";

const rise = "motion-safe:animate-[hero-rise_0.8s_cubic-bezier(0.16,1,0.3,1)_both]";

export function Hero() {
  return (
    <section className="flex flex-col lg:min-h-screen">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
        <div className="flex items-baseline justify-between gap-4 pt-8">
          <span className="font-mono text-sm tracking-tight text-foreground sm:text-base lg:text-lg">
            {personal.name}
          </span>
          <span className="label">{personal.location}</span>
        </div>
        <div className="border-t border-border" />

        <div className="flex flex-1 flex-col gap-12 py-12 lg:flex-row lg:items-center lg:gap-14 lg:py-20 xl:mr-[calc(34rem_-_50vw)]">
          <div className="flex flex-col items-center lg:shrink-0 lg:items-start xl:ml-[calc(34rem_-_50vw)]">
            <div
              className={`relative aspect-square w-full max-w-sm overflow-hidden rounded-full border border-border lg:w-96 lg:max-w-none ${rise}`}
            >
              <Image
                src={personal.photoUrl}
                alt={personal.name}
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover grayscale"
                priority
              />
            </div>
            <p
              className={`label mt-4 text-center lg:text-left ${rise}`}
              style={{ animationDelay: "100ms" }}
            >
              {personal.role}
            </p>
          </div>

          <div className="flex flex-1 flex-col">
            <h1
              className={`font-display text-display text-foreground ${rise}`}
              style={{ animationDelay: "160ms" }}
            >
              <EmphasisText
                text={home.heroHeading.join(" ")}
                emphasis={home.heroEmphasis}
              />
            </h1>
            <p
              className={`mt-5 max-w-[55ch] text-body text-muted-foreground lg:mt-6 ${rise}`}
              style={{ animationDelay: "280ms" }}
            >
              {home.heroSubline}
            </p>
            <div
              className={`mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 lg:mt-14 ${rise}`}
              style={{ animationDelay: "380ms" }}
            >
              <Link href="/work" className="btn-invert">
                View work
              </Link>
              <Link
                href="/contact"
                className="link-invert inline-flex items-center gap-1.5 text-foreground"
              >
                Let&rsquo;s talk
                <span className="font-sans" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border" />
        <div className="flex justify-end py-6">
          <span className="label">{home.scrollHint} / 01</span>
        </div>
      </div>
    </section>
  );
}
