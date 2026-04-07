"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Paintbrush2, Terminal, Layers } from "lucide-react";
import { Project } from "@/lib/types";
import { Lightbox } from "./Lightbox"; // ← import Lightbox

// ================= CATEGORY ICON MAP =================
function CategoryIcon({ title }: { title: string }) {
  const t = title.toUpperCase();
  if (t.includes("DESIGN") || t.includes("UX"))
    return <Paintbrush2 size={18} className="text-[#4a7c59] flex-shrink-0" />;
  if (t.includes("DEV") || t.includes("LOG") || t.includes("CODE"))
    return <Terminal size={18} className="text-[#4a7c59] flex-shrink-0" />;
  return <Layers size={18} className="text-[#4a7c59] flex-shrink-0" />;
}

// ================= IMAGE SLIDESHOW COMPONENT =================
function ImageSlideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 1,
      scale: 1,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 1,
      scale: 1,
    }),
  };

  return (
    <motion.section
      className="max-w-[1400px] mx-auto px-5 md:px-10 py-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full h-[220px] sm:h-[380px] md:h-[600px] overflow-hidden rounded-sm">
        <AnimatePresence mode="sync" custom={direction}>
          <motion.div
            key={current}
            className="absolute inset-0 cursor-zoom-in"
            style={{ zIndex: 1 }}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 26 },
            }}
            onClick={() => setLightboxIndex(current)}
          >
            <Image
              src={images[current]}
              alt=""
              fill
              className="object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-4 right-5 z-10 font-grotesk text-[11px] tracking-widest text-white/70">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo((current - 1 + images.length) % images.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-200 rounded-full text-white"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo((current + 1) % images.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-200 rounded-full text-white"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? "bg-[#2A2A28] w-5 h-2"
                : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

// ================= MOBILE SECTION COMPONENT =================
function MobileSection({ section }: { section: any }) {
  const images = section.images ?? (section.src ? [section.src] : []);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 1 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 1 }),
  };

  return (
    <motion.section
      className="max-w-[1400px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
        {/* Image slideshow */}
        <div className="flex-shrink-0 flex flex-col items-center gap-4 w-full md:w-auto">
          <div
            className="relative w-full md:w-[380px] lg:w-[580px] h-[360px] md:h-[460px] lg:h-[620px] overflow-hidden rounded-sm bg-[#3a3a38] cursor-zoom-in"
            onClick={() => setLightboxIndex(current)}
          >
            <AnimatePresence mode="sync" custom={direction}>
              <motion.div
                key={current}
                className="absolute inset-0"
                style={{ zIndex: 1 }}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 26 },
                }}
              >
                <Image
                  src={images[current]}
                  alt=""
                  fill
                  className="object-cover scale-125"
                />
              </motion.div>
            </AnimatePresence>

            {/* Counter มุมบนขวา */}
            <div className="absolute top-4 right-5 z-10 font-grotesk text-[11px] tracking-widest text-white/70">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>

            {/* ปุ่มซ้าย/ขวา */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo((current - 1 + images.length) % images.length);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-200 rounded-full text-white"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo((current + 1) % images.length);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-200 rounded-full text-white"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Dot pagination */}
          <div className="flex justify-center gap-2">
            {images.map((_: string, idx: number) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? "bg-[#2A2A28] w-5 h-2"
                    : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: text with inline border */}
        <div className="flex gap-8 items-start">
          {/* Vertical line */}
          <div className="hidden md:block w-px bg-gray-300 self-stretch" />

          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-code font-medium text-[24px] md:text-[26px] lg:text-[32px] mb-4 md:mb-6 text-[#2A2A28]">
              {section.title}
            </h2>
            <div className="space-y-4 mb-10 md:mb-16">
              {section.description
                .split("\n\n")
                .map((para: string, idx: number) => (
                  <p
                    key={idx}
                    className="font-manrope text-gray-500 max-w-[500px] leading-relaxed text-[14px]"
                  >
                    {para.trim()}
                  </p>
                ))}
            </div>

            {section.stats && section.stats.length > 0 && (
              <div className="flex flex-wrap gap-8 md:gap-16">
                {section.stats.map((stat: any, idx: number) => (
                  <div key={idx}>
                    <p className="font-code text-[32px] text-[#2A2A28] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase font-grotesk">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

// ================= DETAIL RENDERER =================
export default function DetailRenderer({ project }: { project: Project }) {
  if (!project) return null;

  return (
    <main className="bg-white text-[#2A2A28]">
      {project.sections?.map((section, i) => {
        // ================= HERO =================
        if (section.type === "hero") {
          return (
            <section
              key={i}
              className="max-w-[1400px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-8 md:pb-10"
            >
              <motion.p
                className="text-[11px] tracking-[0.25em] text-gray-400 mb-4 font-bold font-manrope uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                PROJECT // {project.year}
              </motion.p>

              <motion.h1
                className="font-code font-medium text-[36px] md:text-[48px] lg:text-[64px] leading-tight mb-8 md:mb-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {project.title}
              </motion.h1>

              <motion.div
                className="border-l-4 border-[#2A2A28] bg-[#F2F4F4] px-5 md:px-10 py-4 flex flex-col gap-y-3 md:flex-row md:gap-16 text-sm mb-10 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <p className="text-gray-400 text-[10px] font-grotesk tracking-widest uppercase mb-1">
                    YEAR
                  </p>
                  <p className="font-grotesk font-medium text-sm">
                    {project.year}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-grotesk tracking-widest uppercase mb-1">
                    ROLE
                  </p>
                  <p className="font-grotesk font-medium text-sm">
                    {project.roles.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-grotesk tracking-widest uppercase mb-1">
                    STACK
                  </p>
                  <p className="font-grotesk font-medium text-sm capitalize">
                    {project.techStack.join(", ")}
                  </p>
                </div>
                {project.client && (
                  <div>
                    <p className="text-gray-400 text-[10px] font-grotesk tracking-widest uppercase mb-1">
                      CLIENT
                    </p>
                    <p className="font-grotesk font-medium text-sm">
                      {project.client}
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="font-newsreader italic text-[#2A2A28] text-[17px] md:text-[20px] leading-relaxed">
                  {section.title}
                </p>
                <div className="space-y-4">
                  {section.description
                    .split("\n\n")
                    .map((para: string, idx: number) => (
                      <p
                        key={idx}
                        className="font-manrope text-gray-600 leading-relaxed text-[14px]"
                      >
                        {para.trim()}
                      </p>
                    ))}
                  {section.subDescription && (
                    <p className="font-manrope text-gray-600 leading-relaxed text-[14px]">
                      {section.subDescription}
                    </p>
                  )}
                </div>
              </motion.div>
            </section>
          );
        }

        // ================= IMAGE =================
        if (section.type === "image") {
          const images = section.images ?? (section.src ? [section.src] : []);
          return <ImageSlideshow key={i} images={images} />;
        }

        // ================= MOBILE =================
        if (section.type === "mobile") {
          return <MobileSection key={i} section={section} />;
        }

        // ================= FEATURES =================
        if (section.type === "features") {
          return (
            <motion.section
              key={i}
              className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="bg-[#f6f8f6] p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #C6C6C6 50%, transparent 50%), linear-gradient(to right, #C6C6C6 50%, transparent 50%), linear-gradient(to bottom, #C6C6C6 50%, transparent 50%), linear-gradient(to bottom, #C6C6C6 50%, transparent 50%)",
                  backgroundSize: "8px 1px, 8px 1px, 1px 8px, 1px 8px",
                  backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
                  backgroundPosition: "top, bottom, left, right",
                }}
              >
                {section.categories
                  ? section.categories.map((cat, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
                          <CategoryIcon title={cat.title} />
                          <p className="text-[14px] font-grotesk tracking-[0.2em] text-[#2A2A28] font-bold uppercase">
                            {cat.title}
                          </p>
                        </div>
                        <ul className="space-y-3">
                          {cat.items.map((item, iidx) => (
                            <li
                              key={iidx}
                              className="flex items-start gap-3 font-manrope text-gray-500 text-[13px] leading-relaxed"
                            >
                              <span className="flex-shrink-0 text-[#2D3435] text-[13px] leading-[1.6] font-light">
                                –
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : section.items?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-3 h-px bg-[#4a7c59]" />
                        <p className="font-manrope text-gray-500 text-[13px] leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
              </div>
            </motion.section>
          );
        }

        return null;
      })}
    </main>
  );
}