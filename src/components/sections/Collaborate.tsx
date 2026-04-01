"use client";
import { motion } from "framer-motion";

export default function Collaborate() {
  return (
    <section id="contact" className="bg-white py-24">
      <div style={{ maxWidth: "1400px" }} className="mx-auto px-10">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] text-[#777777] tracking-[0.25em] mb-5 font-bold font-manrope">
              GET IN TOUCH
            </p>
            <h2 className="text-[48px] font-medium font-code leading-tight mb-6">
              Let&apos;s
              <br />
              Collaborate
            </h2>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-10 max-w-sm">
              If you&apos;re interested in my work or have any questions, feel
              free to reach out via this form or email. I&apos;d be happy to
              discuss opportunities and how I can contribute to your team.
            </p>

            {/* Connect */}
            <p className="text-[12px] text-[#1A1C1C] tracking-[0.2em] mb-4 font-bold font-manrope">
              CONNECT
            </p>
            <div className="flex gap-6 text-[12px] font-bold font-manrope text-gray-800 tracking-widest">
              <a href="#" className="hover:text-black underline underline-offset-4">
                INSTAGRAM
              </a>
              <a href="#" className="hover:text-black underline underline-offset-4">
                LINKEDIN
              </a>
              <a href="#" className="hover:text-black underline underline-offset-4">
                READCV
              </a>
              <a href="#" className="hover:text-black underline underline-offset-4">
                +66 82-761-5156
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8"
            style={{
              backgroundImage: `
    linear-gradient(to right, #d1d5db 50%, transparent 50%),
    linear-gradient(to right, #d1d5db 50%, transparent 50%),
    linear-gradient(to bottom, #d1d5db 50%, transparent 50%),
    linear-gradient(to bottom, #d1d5db 50%, transparent 50%)
  `,
              backgroundSize: "8px 1px, 8px 1px, 1px 8px, 1px 8px",
              backgroundPosition: "top, bottom, left, right",
              backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
            }}
          >
            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-[10px] tracking-widest text-[#777777] font-semibold font-manrope mb-1.5 block">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border border-[#d1d5db] px-3 py-2.5 text-[13px] text-gray-700 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest text-[#777777] font-semibold font-manrope mb-1.5 block">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="Email@example.com"
                  className="w-full border border-[#d1d5db] px-3 py-2.5 text-[13px] text-gray-700 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="text-[10px] tracking-widest text-[#777777] font-semibold font-manrope mb-1.5 block">
                MESSAGE
              </label>
              <textarea
                placeholder="Tell me about your inquiry, opportunity, or project..."
                rows={8}
                className="w-full border border-[#d1d5db] px-3 py-2.5 text-[13px] text-gray-700 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button className="bg-black text-white px-8 py-3.5 text-[11px] tracking-[0.2em] font-semibold font-manrope hover:bg-gray-800 transition-colors duration-200">
              GET IN TOUCH
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
