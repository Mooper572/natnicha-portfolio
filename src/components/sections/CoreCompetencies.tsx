"use client";
import { motion } from "framer-motion";

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

export default function CoreCompetencies() {
  return (
    <section id="about" className="bg-gray-100 pt-24 pb-28">
      <div className="mx-auto px-6" style={{ maxWidth: '1250px' }}>

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-[36px] font-semibold font-code">Core Competencies</h2>
          <p className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-relaxed">
            Combining technical skills with design thinking to create comprehensive
            digital solutions that are both beautiful and functional.
          </p>
        </div>

        {/* Cards */}
        <div className="border border-[#C6C6C6]" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {competencies.map((c, i) => (
            <motion.div
              key={c.num}
              className="p-7 flex flex-col gap-4"
              style={{ borderRight: i < competencies.length - 1 ? '1px solid #C6C6C6' : 'none' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
        </div>

      </div>
    </section>
  );
}
