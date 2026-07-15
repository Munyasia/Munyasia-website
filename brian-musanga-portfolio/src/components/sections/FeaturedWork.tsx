import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeaturedProject } from "@/components/ui/FeaturedProject";
import { projects } from "@/lib/data/site-content";

export function FeaturedWork() {
  const featured = projects.filter((project) => project.featured);
  const total = String(projects.length).padStart(2, "0");

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
      <SectionLabel index="02">Selected work</SectionLabel>

      <div className="mt-16 flex flex-col gap-24 sm:gap-32">
        {featured.map((project, i) => (
          <FeaturedProject key={project.slug} project={project} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-16">
        <Link href="/work" className="link-invert label">
          All projects / {total}
        </Link>
      </div>
    </section>
  );
}
