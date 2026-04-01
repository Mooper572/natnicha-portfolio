import Image from "next/image";

export default function ProjectSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-3 gap-6">

        <div className="bg-gray-200 rounded-xl overflow-hidden">
          <Image src="/p1.png" alt="p1" width={500} height={300} className="w-full" />
        </div>

        <div className="bg-gray-200 rounded-xl overflow-hidden">
          <Image src="/p2.png" alt="p2" width={500} height={300} className="w-full" />
        </div>

        <div className="bg-gray-200 rounded-xl overflow-hidden">
          <Image src="/p3.png" alt="p3" width={500} height={300} className="w-full" />
        </div>

      </div>
    </section>
  );
}