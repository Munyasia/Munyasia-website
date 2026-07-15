import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/site-content";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1>Home</h1>

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
