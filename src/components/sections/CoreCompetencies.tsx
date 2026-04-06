"use client";
import { motion } from "framer-motion";
import { type Variants } from "framer-motion";

const competencies = [
  {
    num: "01",
    title: "UI Interface",
    desc: "Creating visually stunning, pixel-perfect interfaces with a keen eye for balance, hierarchy, and aesthetic.",
    skills: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    num: "02",
    title: "UX Journey",
    desc: "Crafting seamless user experiences through research, wireframing, and intuitive information architecture.",
    skills: ["User Research", "Wireframing", "Usability Testing"],
  },
  {
    num: "03",
    title: "Frontend Engineering",
    desc: "Building responsive, performant web apps with modern frameworks and clean, maintainable code.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    num: "04",
    title: "Full Stack Development",
    desc: "Developing end-to-end solutions from database design to API integration and cloud deployment.",
    skills: ["Node.js", "PostgreSQL", "REST APIs"],
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

export default function CoreCompetencies() {
  return (
    <section id="about" className="bg-gray-100 pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="mx-auto px-5 md:px-6" style={{ maxWidth: "1250px" }}>

        {/* Header */}
        <div className="mb-14 text-center">
          <motion.h2
            className="text-[36px] font-semibold font-code"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Core Competencies
          </motion.h2>
          <motion.p
            className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-relaxed"
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Combining technical skills with design thinking to create comprehensive
            digital solutions that are both beautiful and functional.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#C6C6C6]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {competencies.map((c, i) => (
            <motion.div
              key={c.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="p-6 md:p-7 flex flex-col gap-4 border-b border-[#C6C6C6] last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:last:border-b sm:last:border-r-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <span className="text-xs text-gray-400 tracking-widest heading-mono">
                {c.num}
              </span>
              <h3 className="text-[18px] font-bold heading-mono leading-snug">
                {c.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed flex-1">
                {c.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#C6C6C6]">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] border border-[#C6C6C6] px-2 py-0.5 text-gray-400 tracking-wide"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}