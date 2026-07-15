import Image from "next/image";
import type { Project } from "@/lib/data/site-content";

export function ProjectCard({ project }: { project: Project }) {
  const { title, type, year, description, stack, image, liveUrl } = project;

  const imageEl = (
    <div className="relative aspect-[16/10] overflow-hidden rounded-none border border-border">
      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={
          liveUrl
            ? "object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            : "object-cover"
        }
      />
      {liveUrl && (
        <span className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-none border border-border bg-background/80 font-sans text-base text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
          ↗
        </span>
      )}
    </div>
  );

  return (
    <article className="flex flex-col gap-4">
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {imageEl}
        </a>
      ) : (
        imageEl
      )}

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-2xl leading-none tracking-tight text-foreground sm:text-[1.75rem]">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {type} &middot; {year}
        </p>
        <p className="text-sm text-foreground/80">{description}</p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {stack.map((item) => (
            <li
              key={item}
              className="label rounded-none border border-border px-2.5 py-0.5"
            >
              {item}
            </li>
          ))}
        </ul>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-invert mt-1 inline-flex w-fit items-center gap-1 text-sm font-medium text-foreground"
          >
            Visit site
            <span className="font-sans" aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
