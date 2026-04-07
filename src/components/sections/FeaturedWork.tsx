"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  src: string;
  desc: string;
  zoom: boolean;
  position?: string;
  slug: string;
  isInternship?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Internship Platform",
    category: "INTERN",
    tags: ["FULL-STACK DEVELOPER"],
    src: "/p7.webp",
    desc: "A full-stack internship recruitment platform featuring AI-powered resume parsing, data validation, and responsive user interfaces.",
    zoom: true,
    slug: "internship-platform",
    isInternship: true,
  },
  {
    id: 2,
    title: "Trinity Website",
    category: "PROJECTS",
    tags: ["FRONT-END DEVELOPER"],
    src: "/p4.webp",
    desc: "Redesigned UX/UI and developed responsive frontend components to improve usability and align with business workflows.",
    zoom: true,
    slug: "trinity-website",
    isInternship: true,
  },
  {
    id: 3,
    title: "Zoo Interactive Map",
    category: "PROJECTS",
    tags: ["UX/UI DESIGNER", "FULL-STACK DEVELOPER"],
    src: "/p1.webp",
    desc: "An interactive map system with GPS navigation, real-time updates, and filtering features, designed for seamless user experience.",
    zoom: true,
    slug: "zoo-interactive-map",
  },
  {
    id: 4,
    title: "Hertz Rental Application",
    category: "PROJECTS",
    tags: ["UX/UI DESIGNER", "FRONT-END DEVELOPER"],
    src: "/p10.webp",
    desc: "A mobile application for car rental with intuitive UX/UI, supporting browsing, booking, and rental management.",
    zoom: false,
    slug: "hertz-rental-app",
  },
  {
    id: 5,
    title: "Just Match Website",
    category: "PROJECTS",
    tags: ["UX/UI DESIGNER", "FULL-STACK DEVELOPER"],
    src: "/p12.webp",
    desc: "A full-stack movie rental platform with user, staff, and provider roles, featuring search, management, and seamless user flows.",
    zoom: true,
    slug: "just-match-website",
  },
  {
    id: 6,
    title: "Jum Pop Application",
    category: "PROJECTS",
    tags: ["UX/UI DESIGNER"],
    src: "/p13.webp",
    desc: "A mystery box (gacha) application designed in Figma, with e-commerce flows for ordering and shipping, and multi-role admin interfaces.",
    zoom: false,
    slug: "jum-pop-app",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

const colDelay = (i: number) => (i % 3) * 0.08;

export default function FeaturedWork() {
  return (
    <section
      id="projects"
      style={{ maxWidth: "1250px" }}
      className="mx-auto px-5 md:px-6 pt-16 md:pt-24 pb-20 md:pb-28"
    >
      {/* Header */}
      <div className="mb-14 text-center">
        <motion.h2
          className="text-[28px] md:text-[36px] font-semibold font-code"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          Featured Work
        </motion.h2>
        <motion.p
          className="text-gray-500 text-[14px] md:text-[15px] mt-3 max-w-xl mx-auto leading-relaxed"
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          A curated selection of projects showcasing my work across UX/UI
          design, front-end, and full-stack development.
        </motion.p>
      </div>

      {/* 1→2→3 col Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={
              project.isInternship
                ? `/internship/${project.slug}`
                : `/projects/${project.slug}`
            }
            style={{ textDecoration: "none" }}
          >
            <motion.div
              className="group cursor-pointer overflow-hidden rounded-xl relative"
              style={{ backgroundColor: "#2a2a28" }}
              variants={fadeUp}
              custom={colDelay(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="overflow-hidden h-[200px] md:h-[230px] relative">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                  className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    project.zoom
                      ? "scale-[1.08] group-hover:scale-[1.15]"
                      : "group-hover:scale-105"
                  } ${project.position ?? "object-center"}`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Ring border on hover */}
              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-1 ring-white/20 transition-all duration-300 pointer-events-none z-10" />

              {/* Info */}
              <div className="p-5 text-gray-200">
                {/* Tags */}
                <div className="flex gap-2 mb-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 border border-gray-600 group-hover:border-gray-500 text-gray-400 group-hover:text-gray-300 tracking-wide heading-mono transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold heading-mono mb-2 leading-snug group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* View link */}
                <span
                  style={{ color: "#6b7280" }}
                  className="text-[13px] flex items-center gap-1.5 tracking-wider heading-mono group-hover:text-white transition-colors duration-300"
                >
                  View Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5 inline-block">
                    →
                  </span>
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}