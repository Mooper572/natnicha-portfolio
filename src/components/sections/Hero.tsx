"use client";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  type Variants,
} from "framer-motion";
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

// Variants สำหรับ card แต่ละใบ (ใช้ stagger ผ่าน parent)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: { index: number; baseDelay: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: custom.baseDelay + custom.index * 0.07,
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export default function Hero() {
  const [filter, setFilter] = useState<FilterType>("ALL");
  const [filterKey, setFilterKey] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [speed, setSpeed] = useState(60);
  const [isDragging, setIsDragging] = useState(false);

  const filtered =
    filter === "ALL" ? projects : projects.filter((p) => p.category === filter);

  // เมื่อกด filter ให้ reset x และเพิ่ม key เพื่อ re-animate cards
  const handleFilterChange = (f: FilterType) => {
    setFilter(f);
    setFilterKey((k) => k + 1);
    setIsFirstLoad(false);
    x.set(0);
  };

  useEffect(() => {
    if (rowRef.current) {
      const fullWidth = rowRef.current.scrollWidth;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWidth(filter === "ALL" ? fullWidth / 2 : fullWidth);
    }
  }, [filtered, filter]);

  // Track container width via ResizeObserver to avoid ref access during render
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerWidth(el.offsetWidth);
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (isDragging || filter !== "ALL") return;

    const moveBy = (speed * delta) / 1000;
    let next = x.get() - moveBy;

    if (next <= -width) {
      next += width;
    }

    x.set(next);
  });

  // cards ที่จะ render (ALL = duplicate สำหรับ loop)
  const displayedProjects =
    filter === "ALL" ? [...filtered, ...filtered] : filtered;

  return (
    <section id="home" className="pt-10 md:pt-16 pb-16 md:pb-24 max-w-[1400px] mx-auto px-5 md:px-10">
      {/* Profile Photo — fade + scale เหมือนเดิม */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden">
          <Image
            src="/profile.png"
            alt="Natnicha Inkongngam profile photo"
            fill
            sizes="(max-width: 768px) 120px, 180px"
            className="object-cover scale-125 object-[center_90%]"
            priority
          />
        </div>
      </motion.div>

      {/* Heading — fade + slide up */}
      <motion.h1
        className="font-code text-[28px] md:text-[38px] lg:text-[48px] text-[#2A2A28] font-medium leading-[1.15] max-w-[1100px] mb-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi - I&apos;m Natnicha Inkongngam a UX/UI designer and full-stack
        developer
      </motion.h1>

      {/* Description — fade + slide up */}
      <motion.p
        className="font-manrope text-gray-500 text-[14px] md:text-[16px] leading-relaxed max-w-[1200px] mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        This website is a personal project that I designed and developed from
        scratch to showcase my work and experiences across UX/UI design and
        full-stack development. It reflects my ability to design intuitive user
        experiences, build scalable interfaces, and transform ideas into
        functional, responsive applications.
      </motion.p>

      {/* Filter Buttons — fade + slide up พร้อม stagger */}
      <motion.div
        className="flex gap-2 md:gap-3 mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {(["ALL", "INTERNSHIP", "PROJECTS"] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => handleFilterChange(f)}
            className={
              "px-3 md:px-5 py-1.5 md:py-2 text-[10px] md:text-xs tracking-widest cursor-pointer transition-all duration-200 " +
              (filter === f
                ? "bg-black text-white border border-black"
                : "text-gray-500 border border-gray-300 hover:border-gray-500 hover:text-gray-700")
            }
          >
            [{f}]
          </button>
        ))}
      </motion.div>

      {/* Slider */}
      <div>
        <div ref={containerRef} className="overflow-hidden pb-4">
          <motion.div
            ref={rowRef}
            key={filterKey} // เปลี่ยน key ทุกครั้งที่ filter เปลี่ยน เพื่อ remount + re-animate
            className="flex gap-5 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={
              filter === "ALL"
                ? { left: -width, right: 0 }
                 : {
                    left: -Math.max(
                      width - containerWidth,
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
            {displayedProjects.map((project, index) => {
              const cardIndex =
                filter === "ALL" ? Math.min(index, filtered.length - 1) : index;
              return (
                <motion.div
                  key={`${filterKey}-${index}`}
                  custom={{
                    index: cardIndex,
                    baseDelay: isFirstLoad ? 0.4 : 0,
                  }}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="rounded-xl overflow-hidden bg-gray-200 flex-shrink-0 w-[280px] md:w-[340px] lg:w-[420px]"
                >
                  <div className="relative w-full h-[190px] md:h-[230px] lg:h-[280px]">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="420px" 
                      className={`object-cover pointer-events-none select-none ${
                        project.zoom ? zoomConfig.zoom : ""
                      } ${project.zoom ? "translate-y-10" : ""}`}
                      draggable={false}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
