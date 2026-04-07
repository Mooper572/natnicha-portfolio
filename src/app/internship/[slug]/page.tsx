import DetailRenderer from "@/components/sections/DetailRenderer";
import { internships } from "@/lib";
import { notFound } from "next/navigation";

export default async function InternshipDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = internships.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main>
      <DetailRenderer project={project} />
    </main>
  );
}