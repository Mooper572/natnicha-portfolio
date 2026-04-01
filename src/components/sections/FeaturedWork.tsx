"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  src: string;
  desc: string;
  zoom: boolean;
  position?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Internship Platform",
    category: "INTERN",
    tags: ["FULL-STACK DEVELOPER"],
    src: "/p7.png",
    desc: "A full-stack internship recruitment platform featuring AI-powered resume parsing, data validation, and responsive user interfaces.",
    zoom: true,
  },
  {
    id: 2,
    title: "Trinity Website",
    category: "PROJECTS",
    tags: ["FRONT-END DEVELOPER"],
    src: "/p4.png",
    desc: "Redesigned UX/UI and developed responsive frontend components to improve usability and align with business workflows.",
    zoom: true,
  },
  {
    id: 3,
    title: "Zoo Interactive Map",
    category: "PROJECTS",
    tags: ["UX/UI DESIGNER", "FULL-STACK DEVELOPER"],
    src: "/p1.png",
    desc: "An interactive map system with GPS navigation, real-time updates, and filtering features, designed for seamless user experience.",
    zoom: true,
  },
  {
    id: 4,
    title: "Hertz Rental Application",
    category: "PROJECTS",
    tags: ["UX/UI DESIGNER", "FRONT-END DEVELOPER"],
    src: "/p10.png",
    desc: "A mobile application for car rental with intuitive UX/UI, supporting browsing, booking, and rental management.",
    zoom: false,
  },
  {
    id: 5,
    title: "Just Match Website",
    category: "PROJECTS",
    tags: ["UX/UI DESIGNER", "FULL-STACK DEVELOPER"],
    src: "/p12.png",
    desc: "A full-stack movie rental platform with user, staff, and provider roles, featuring search, management, and seamless user flows.",
    zoom: true,
  },
  {
    id: 6,
    title: "Jum Pop Application",
    category: "PROJECTS",
    tags: ["UX/UI DESIGNER"],
    src: "/p13.png",
    desc: "A mystery box (gacha) application designed in Figma, with e-commerce flows for ordering and shipping, and multi-role admin interfaces.",
    zoom: false,
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="projects"
      style={{ maxWidth: "1250px" }}
      className="mx-auto px-6 pt-24 pb-28"
    >
      {/* Header */}
      <div className="mb-14 text-center">
        <h2 className="text-[36px] font-semibold font-code">Featured Work</h2>
        <p className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-relaxed">
          A curated selection of projects showcasing design and development
          capabilities across web and mobile platforms.
        </p>
      </div>

      {/* 3×2 Project Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer overflow-hidden rounded-xl"
            style={{ backgroundColor: "#2a2a28" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            {/* Image */}
            <div className="overflow-hidden h-[230px]">
              <Image
                src={project.src}
                alt={project.title}
                width={500}
                height={300}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  project.zoom
                    ? "scale-[1.1] group-hover:scale-[1.15]"
                    : "group-hover:scale-105"
                } ${project.position ?? "object-center"}`}
              />
            </div>

            {/* Info */}
            <div className="p-5 text-gray-200">
              {/* Tags */}
              <div className="flex gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 border border-gray-600 text-gray-400 tracking-wide heading-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-bold heading-mono mb-2 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-400 leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* View link */}
              <a
                href="#"
                style={{ color: "#6b7280", textDecoration: "none" }}
                className="text-[13px] flex items-center gap-1.5 tracking-wider heading-mono transition-colors hover:opacity-100"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#6b7280";
                }}
              >
                View Project
                <span className="transition-transform group-hover:translate-x-1 inline-block">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
