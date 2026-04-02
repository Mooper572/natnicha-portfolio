import ProjectsHero from "@/components/sections/ProjectsHero";
import ProjectList from "@/components/sections/ProjectList";
import ProjectCTA from "@/components/sections/ProjectCTA";
import { projects } from "@/lib";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectList data={projects} basePath="/projects" />
      <ProjectCTA />
    </main>
  );
}