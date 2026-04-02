import ProjectsHero from "@/components/sections/ProjectsHero";
import ProjectList from "@/components/sections/ProjectList";
import ProjectCTA from "@/components/sections/ProjectCTA";
import { internships } from "@/lib";

export default function InternshipPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectList data={internships} basePath="/internship" />
      <ProjectCTA />
    </main>
  );
}