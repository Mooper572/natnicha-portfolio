import InternshipHero from "@/components/sections/InternshipHero";
import ProjectList from "@/components/sections/ProjectList";
import ProjectCTA from "@/components/sections/ProjectCTA";
import { internships } from "@/lib";

export default function InternshipPage() {
  return (
    <main>
      <InternshipHero />
      <ProjectList data={internships} basePath="/internship" />
      <ProjectCTA />
    </main>
  );
}