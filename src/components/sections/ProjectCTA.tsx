"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function ProjectCTA() {
  const pathname = usePathname();
  const router = useRouter();

  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#contact");
    } else {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#eef0f0] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col items-center text-center">
        <motion.p
          className="text-[11px] tracking-[0.25em] text-gray-400 font-grotesk mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          AVAILABLE FOR OPPORTUNITIES
        </motion.p>

        <motion.h2
          className="font-newsreader text-[26px] md:text-[40px] italic font-regular text-[#2A2A28] leading-tight mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Turning ideas into intuitive digital experiences.
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="#contact"
            onClick={handleContact}
            className="px-10 md:px-16 py-4 bg-[#2a2a28] text-white text-xs tracking-[0.2em] font-Manrope hover:bg-gray-800 transition-colors duration-300 text-center"
          >
            CONTACT
          </Link>
          <Link
            href="/about"
            className="px-10 md:px-16 py-4 border border-gray-300 text-xs tracking-[0.2em] font-Manrope text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-all duration-300 text-center"
          >
            ABOUT
          </Link>
        </motion.div>
      </div>
    </section>
  );
}