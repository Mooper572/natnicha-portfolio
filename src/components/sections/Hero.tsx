"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";

type FilterType = "ALL" | "INTERNSHIP" | "PROJECTS";

const projects = [
  {
    id: 1,
    src: "/p1.png",
    alt: "Zoo Interactive Map",
    title: "Zoo Interactive Map",
    category: "PROJECTS" as FilterType,
    zoom: true,
  },
  {
    id: 2,
    src: "/p2.png",
    alt: "Zoo Interactive Map",
    title: "Zoo Interactive Map",
    category: "PROJECTS" as FilterType,
    zoom: false,
  },
  {
    id: 3,
    src: "/p3.png",
    alt: "Zoo Interactive Map",
    title: "Zoo Interactive Map",
    category: "PROJECTS" as FilterType,
    zoom: true,
  },
  {
    id: 4,
    src: "/p4.png",
    alt: "Trinity Website",
    title: "Trinity Website",
    category: "INTERNSHIP" as FilterType,
    zoom: true,
  },
  {
    id: 5,
    src: "/p5.png",
    alt: "Trinity Website",
    title: "Trinity Website",
    category: "INTERNSHIP" as FilterType,
    zoom: false,
  },
  {
    id: 6,
    src: "/p6.png",
    alt: "Trinity Website",
    title: "Trinity Website",
    category: "INTERNSHIP" as FilterType,
    zoom: true,
  },
  {
    id: 7,
    src: "/p7.png",
    alt: "Internship Dashboard",
    title: "Internship Dashboard",
    category: "INTERNSHIP" as FilterType,
    zoom: true,
  },
  {
    id: 8,
    src: "/p8.png",
    alt: "Internship Dashboard",
    title: "Internship Dashboard",
    category: "INTERNSHIP" as FilterType,
    zoom: false,
  },
  {
    id: 9,
    src: "/p9.png",
    alt: "Internship Dashboard",
    title: "Internship Dashboard",
    category: "INTERNSHIP" as FilterType,
    zoom: true,
  },
  {
    id: 10,
    src: "/p10.png",
    alt: "Hertz Rental Application",
    title: "Hertz Rental Application",
    category: "PROJECTS" as FilterType,
    zoom: false,
  },
  {
    id: 11,
    src: "/p11.png",
    alt: "Just Watch Website",
    title: "Just Watch Website",
    category: "PROJECTS" as FilterType,
    zoom: true,
  },
  {
    id: 12,
    src: "/p12.png",
    alt: "Just Watch Website",
    title: "Just Watch Website",
    category: "PROJECTS" as FilterType,
    zoom: true,
  },
  {
    id: 13,
    src: "/p13.png",
    alt: "Jum Pop Application",
    title: "Jum Pop Application",
    category: "PROJECTS" as FilterType,
    zoom: false,
  },
];

const zoomConfig = {
  zoom: "scale-[1.8]",
  position: "object-[center_100%]",
};

export default function Hero() {
  const [filter, setFilter] = useState<FilterType>("ALL");

  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [speed, setSpeed] = useState(60);
  const [isDragging, setIsDragging] = useState(false);

  const filtered =
    filter === "ALL" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (rowRef.current) {
      const fullWidth = rowRef.current.scrollWidth;
      setWidth(filter === "ALL" ? fullWidth / 2 : fullWidth);
    }
  }, [filtered, filter]);

  useEffect(() => {
    x.set(0);
  }, [filter]);

  useAnimationFrame((_, delta) => {
    if (isDragging || filter !== "ALL") return;

    let moveBy = (speed * delta) / 1000;
    let next = x.get() - moveBy;

    if (next <= -width) {
      next += width;
    }

    x.set(next);
  });

  return (
    <section id="home" className="pt-16 pb-24 max-w-[1400px] mx-auto px-10">
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Natnicha Inkongngam profile photo"
            fill
            className="object-cover scale-125 object-[center_90%]"
            priority
          />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="font-code text-[48px] text-[#2A2A28] font-medium leading-[1.15] max-w-[1100px] mb-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi - I&apos;m Natnicha Inkongngam a UX/UI designer and full-stack
        developer
      </motion.h1>

      {/* Description */}
      <motion.p
        className="font-manrope text-gray-500 text-[16px] leading-relaxed max-w-[1200px] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A Computer Engineering student passionate about UX/UI design, focused on
        creating intuitive and user-centered digital experiences. I enjoy
        designing clear user flows and turning ideas into functional, responsive
        applications through code.
      </motion.p>

      {/* Filter Buttons */}
      <motion.div className="flex gap-3 mb-8">
        {(["ALL", "INTERNSHIP", "PROJECTS"] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={
              "px-5 py-2 text-xs tracking-widest cursor-pointer " +
              (filter === f
                ? "bg-black text-white border border-black"
                : "text-gray-500 border border-gray-300")
            }
          >
            [{f}]
          </button>
        ))}
      </motion.div>

      {/* Slider */}
      <div ref={containerRef} className="overflow-hidden pb-4">
        <motion.div
          ref={rowRef}
          className="flex gap-5 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={
            filter === "ALL"
              ? { left: -width, right: 0 }
              : {
                  left: -Math.max(
                    width - (containerRef.current?.offsetWidth || 0),
                    0,
                  ),
                  right: 0,
                }
          }
          dragElastic={0.1}
          dragMomentum={true}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onMouseEnter={() => setSpeed(30)}
          onMouseLeave={() => setSpeed(60)}
        >
          {(filter === "ALL" ? [...filtered, ...filtered] : filtered).map(
            (project, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-gray-200 flex-shrink-0 w-[420px]"
              >
                <div className="relative w-full h-[280px]">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className={`object-cover pointer-events-none select-none ${
                      project.zoom ? zoomConfig.zoom : ""
                    } ${project.zoom ? "translate-y-10" : ""}`}
                    draggable={false}
                  />
                </div>
              </div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}