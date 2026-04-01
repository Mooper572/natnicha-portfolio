"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignApproach() {
  return (
    <section className="bg-[#2a2a28] text-white overflow-hidden">
      <div className="flex items-stretch min-h-[520px]">
        {/* Left — Text */}
        <motion.div
          className="flex flex-col justify-center pl-[calc((100vw-1400px)/2+30px)] pr-24 py-24 w-[50%] flex-shrink-0"

          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[52px] font-medium font-code leading-tight mb-6">
            Design
            <br />
            Approach
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
            Every great product starts with understanding people. I approach
            design with empathy, curiosity, and a commitment to solving real
            problems — bridging the gap between aesthetics and functionality.
          </p>
        </motion.div>

        {/* Right — Full bleed image */}
        <motion.div
          className="flex-1 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Image
            src="/design-approach.png"
            alt="Design approach showcase"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
