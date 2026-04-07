"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import dynamic from "next/dynamic";

const FaLinkedinIn = dynamic(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaLinkedinIn }))
);
const FaInstagram = dynamic(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaInstagram }))
);
const SiLine = dynamic(() =>
  import("react-icons/si").then((m) => ({ default: m.SiLine }))
);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutHero() {
  return (
    <section className="pt-14 md:pt-24 pb-16 md:pb-28 max-w-[1400px] mx-auto px-5 md:px-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col md:flex-row overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C6C6C6 50%, transparent 50%), linear-gradient(to right, #C6C6C6 50%, transparent 50%), linear-gradient(to bottom, #C6C6C6 50%, transparent 50%), linear-gradient(to bottom, #C6C6C6 50%, transparent 50%)",
          backgroundSize: "8px 1px, 8px 1px, 1px 8px, 1px 8px",
          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
          backgroundPosition: "top, bottom, left, right",
        }}
      >
        {/* Top / Left — Photo */}
        <div className="w-full md:w-[360px] lg:w-[460px] md:flex-shrink-0 relative md:min-h-[480px] lg:min-h-[560px]">
          <Image
            src="/profile.png"
            alt="Natnicha Inkongngam"
            width={460}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 360px, 460px"
            className="w-full h-auto md:absolute md:inset-0 md:h-full md:object-cover md:object-top"
            priority
          />
        </div>

        {/* Bottom / Right — Content */}
        <div className="flex flex-col justify-center px-6 md:px-8 lg:px-14 py-8 md:py-10">
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-[12px] tracking-[0.25em] text-[#777777] font-bold font-manrope mb-3"
          >
            ABOUT ME
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-code text-[36px] md:text-[40px] lg:text-[52px] font-medium leading-[1.1] text-[#2A2A28] mb-5 md:mb-6"
          >
            Natnicha
            <br />
            Inkongngam
          </motion.h1>

          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="text-[14px] md:text-[15px] text-gray-500 font-manrope leading-relaxed mb-5 md:mb-6 max-w-[620px] space-y-3"
          >
            <p>
              I&apos;m Computer Engineering student with a strong passion for
              UX/UI design and front-end development, focused on creating
              intuitive and user-centered digital experiences.
            </p>
            <p>
              With a background in full-stack development, I&apos;m able to
              design clear user flows and transform them into responsive,
              interactive interfaces. My technical foundation enables me to
              effectively bridge the gap between design and development.
            </p>
            <p>
              I enjoy working on real-world projects that solve meaningful
              problems and continuously improving my skills to deliver
              high-quality user experiences.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-3 mb-6 md:mb-8">
            {[
              { Icon: FaLinkedinIn, size: 14, label: "LinkedIn", href: "https://www.linkedin.com/in/natnicha-inkongngnam-75672a401" },
              { Icon: SiLine, size: 17, label: "Line", href: "https://line.me/ti/p/~line_id_gumosud" },
              { Icon: FaInstagram, size: 18, label: "Instagram", href: "https://instagram.com/sal._mo" },
            ].map(({ Icon, size, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 border border-[#E8E8E8] rounded-full flex items-center justify-center text-[#1A1C1C] hover:bg-[#2a2a28] hover:border-[#2a2a28] hover:text-white transition-all duration-300"
              >
                <Icon size={size} />
              </a>
            ))}
          </motion.div>

          {/* READ CV Button */}
          <motion.a
            variants={itemVariants}
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-[1.3px] border-[#2a2a28] px-10 md:px-16 py-4 text-[12px] tracking-[0.25em] font-medium font-manrope text-[#2a2a28] hover:bg-[#2a2a28] hover:text-white transition-all duration-300 w-fit"
            whileHover="hovered"
          >
            READ CV
            <motion.span
              className="inline-block"
              variants={{ hovered: { x: 4 } }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <HiOutlineArrowRight size={14} />
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}