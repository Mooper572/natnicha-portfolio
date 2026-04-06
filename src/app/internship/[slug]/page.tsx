import DetailRenderer from "@/components/sections/DetailRenderer";
import { internships } from "@/lib";
import { notFound } from "next/navigation";

export default function InternshipDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = internships.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main>
      <DetailRenderer project={project} />
    </main>
  );
}