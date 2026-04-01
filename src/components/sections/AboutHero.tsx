"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function AboutHero() {
  return (
    <section className="pt-24 pb-28 max-w-[1400px] mx-auto px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C6C6C6 50%, transparent 50%), linear-gradient(to right, #C6C6C6 50%, transparent 50%), linear-gradient(to bottom, #C6C6C6 50%, transparent 50%), linear-gradient(to bottom, #C6C6C6 50%, transparent 50%)",
          backgroundSize: "8px 1px, 8px 1px, 1px 8px, 1px 8px",
          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
          backgroundPosition: "top, bottom, left, right",
        }}
      >
        {/* Left — Photo */}
        <div className="relative w-[460px] flex-shrink-0 min-h-[540px]">
          <Image
            src="/profile.png"
            alt="Natnicha Inkongngam"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col justify-center px-14 py-10">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[12px] tracking-[0.25em] text-[#777777] font-bold font-manrope mb-3"
          >
            ABOUT ME
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-code text-[52px] font-medium leading-[1.1] text-[#2A2A28] mb-6"
          >
            Natnicha
            <br />
            Inkongngam
          </motion.h1>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] text-gray-500 font-manrope leading-relaxed mb-6 max-w-[620px] space-y-3"
          >
            <p>
              I&apos;m a Computer Engineering student with a strong passion for
              UX/UI design, focused on creating intuitive and user-centered
              digital experiences.
            </p>
            <p>
              With a background in full-stack development, I&apos;m able to
              design clear user flows and translate them into functional,
              responsive applications. My technical foundation allows me to
              bridge the gap between design and development effectively.
            </p>
            <p>
              I enjoy working on real-world projects that solve meaningful
              problems and continuously improving my skills to deliver better
              user experiences.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex gap-3 mb-8"
          >
            {[
              {
                icon: <FaLinkedinIn size={14} />,
                label: "LinkedIn",
                href: "#",
              },
              { icon: <SiLine size={17} />, label: "Line", href: "#" },
              {
                icon: <FaInstagram size={18} />,
                label: "Instagram",
                href: "#",
              },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 border border-[#E8E8E8] rounded-full flex items-center justify-center text-[#1A1C1C] hover:bg-[#2a2a28] hover:border-[#2a2a28] hover:text-white transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </motion.div>

          {/* READ CV Button */}
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-[1.3px] border-[#2a2a28] px-16 py-4 text-[12px] tracking-[0.25em] font-medium font-manrope text-[#2a2a28] hover:bg-[#2a2a28] hover:text-white transition-all duration-300 w-fit"
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
