"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignApproach() {
  return (
    <section className="bg-[#2a2a28] text-white overflow-hidden">
      <div className="flex items-stretch min-h-[520px]">
        {/* Left — Text */}
        <div className="flex flex-col justify-center pl-[calc((100vw-1400px)/2+30px)] pr-24 py-24 w-[50%] flex-shrink-0">
          {/* Title */}
          <motion.h2
            className="text-[52px] font-medium font-code leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Design
            <br />
            Approach
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-gray-400 text-[15px] leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Every great product starts with understanding people. I approach
            design with empathy and curiosity, focusing on solving real problems
            through intuitive, user-centered experiences. I bridge design and
            front-end development to create interfaces that are both functional
            and visually refined.
          </motion.p>
        </div>

        {/* Right — Image */}
        <motion.div
          className="flex-1 relative overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Image zoom subtle */}
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src="/design-approach.png"
              alt="Design approach showcase"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Gradient overlay (cinematic look) */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
