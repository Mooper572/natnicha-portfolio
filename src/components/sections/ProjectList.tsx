"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project, FilterType } from "@/lib/types";

const dashedBorder: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(to right, #C6C6C6 50%, transparent 50%),
    linear-gradient(to right, #C6C6C6 50%, transparent 50%),
    linear-gradient(to bottom, #C6C6C6 50%, transparent 50%),
    linear-gradient(to bottom, #C6C6C6 50%, transparent 50%)
  `,
  backgroundSize: "8px 1px, 8px 1px, 1px 8px, 1px 8px",
  backgroundPosition: "top, bottom, left, right",
  backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
};

const cardVariantsInitial: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4 + i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const cardVariantsScroll: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.15 + i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export default function ProjectList({
  data,
  basePath = "/projects",
}: {
  data: Project[];
  basePath?: string;
}) {
  // ✅ เปลี่ยน type ให้ flexible
  const [active, setActive] = useState<string>("ALL");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // ✅ dynamic filters จาก data จริง
  const roleFilters = [
    "ALL",
    ...Array.from(new Set(data.flatMap((p) => p.filters))),
  ];

  const filtered =
    active === "ALL"
      ? data
      : data.filter((p) => p.filters.includes(active as FilterType));

  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-16">
      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {roleFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={
              "px-3 md:px-5 py-1.5 md:py-2 text-[10px] md:text-xs tracking-widest cursor-pointer transition-all duration-200 font-grotesk " +
              (active === f
                ? "bg-black text-white border border-black"
                : "text-gray-500 border border-gray-300 hover:border-gray-500 hover:text-gray-700")
            }
          >
            [{f}]
          </button>
        ))}
      </motion.div>

      {/* Project Cards */}
      <div className="flex flex-col gap-6" key={active}>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={isFirstLoad ? cardVariantsInitial : cardVariantsScroll}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.05 }}
              className="flex flex-col md:flex-row gap-0 overflow-hidden bg-white"
              style={dashedBorder}
            >
              {/* Image */}
              <div className="relative w-full md:w-[300px] lg:w-[460px] xl:w-[500px] 2xl:w-[620px] md:flex-shrink-0 h-[220px] md:h-auto self-stretch overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ease-[0.22,1,0.36,1] ${
                    project.imageScale
                      ? "scale-110 object-[center_30%] group-hover:scale-[1.15]"
                      : "group-hover:scale-105"
                  }`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.15)_100%)] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:p-7 lg:p-8 xl:p-10 flex-1">
                <div>
                  <h2 className="font-code text-[24px] md:text-[20px] lg:text-[26px] xl:text-[32px] font-medium text-[#2A2A28] mb-3 md:mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <p className="font-manrope text-gray-500 text-[13px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-relaxed mb-5 md:mb-6 max-w-[520px]">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-5 md:mb-6">
                    <p className="text-[10px] tracking-[0.15em] text-gray-400 font-grotesk mb-2">
                      TECH STACK
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] tracking-widest text-gray-500 border border-gray-300 px-3 py-1 font-grotesk uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 mb-5 md:mb-6" />

                <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-4 xl:gap-6">
                  <div className="flex gap-8 md:gap-10 xl:gap-14">
                    <div className="min-w-[90px]">
                      <p className="text-[10px] tracking-[0.15em] text-gray-400 font-grotesk mb-1">
                        YEAR
                      </p>
                      <p className="font-manrope text-[13px] text-[#2A2A28] font-medium leading-snug">
                        {project.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.15em] text-gray-400 font-grotesk mb-1">
                        ROLE
                      </p>
                      <p className="font-manrope text-[13px] text-[#2A2A28] font-medium leading-snug">
                        {project.roles.join(", ")}
                      </p>
                    </div>
                  </div>

                  <Link href={`${basePath}/${project.slug}`} className="self-end">
                    <motion.div
                      className="flex items-center gap-3 border border-gray-300 px-8 md:px-10 py-3 text-xs tracking-widest font-grotesk text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer w-auto"
                      whileHover="hovered"
                    >
                      SEE
                      <motion.span
                        className="inline-block"
                        variants={{ hovered: { x: 4 } }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Back to top */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[11px] tracking-[0.15em] text-gray-400 hover:text-gray-700 transition-colors font-grotesk"
        >
          ↑ BACK TO TOP
        </button>
      </div>
    </section>
  );
}