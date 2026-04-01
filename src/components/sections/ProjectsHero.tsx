"use client";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="max-w-[1400px] mx-auto px-10 pt-16 pb-10">
      <motion.p
        className="text-[12px] tracking-[0.25em] text-[#777777] font-bold font-manrope mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        PROJECTS // 2023-2025
      </motion.p>

      <motion.h1
        className="font-code text-[56px] font-medium text-[#2A2A28] leading-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Project
      </motion.h1>

      <motion.p
        className="font-manrope text-gray-500 text-[16px] leading-relaxed max-w-[500px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A selection of projects developed during my academic journey, showcasing
        my work in UX/UI design and full-stack development.
      </motion.p>
    </section>
  );
}