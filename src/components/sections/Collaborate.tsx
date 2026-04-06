"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Collaborate() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [lastSent, setLastSent] = useState(0);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (e.target.company.value) return;

    const now = Date.now();
    if (now - lastSent < 10000) {
      alert("Please wait a moment before sending again.");
      return;
    }

    setLastSent(now);
    setStatus("loading");

    emailjs
      .sendForm(
        "service_9gjwr7d",
        "template_0aoyqvb",
        e.target,
        "fIhM2iFPs-zeUCh4i"
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 2500);
      })
      .catch(() => {
        setStatus("idle");
        alert("Failed to send ❌");
      });
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div style={{ maxWidth: "1400px" }} className="mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left */}
          <div>
            <motion.p
              className="text-[12px] text-[#777777] tracking-[0.25em] mb-5 font-bold font-manrope"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              GET IN TOUCH
            </motion.p>

            <motion.h2
              className="text-[36px] md:text-[48px] font-medium font-code leading-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              Let&apos;s
              <br />
              Collaborate
            </motion.h2>

            <motion.p
              className="text-gray-500 text-[14px] leading-relaxed mb-10 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              If you&apos;re interested in my work or have any questions, feel
              free to reach out via this form or email. I&apos;d be happy to
              discuss opportunities and how I can contribute to your team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.21, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[12px] text-[#1A1C1C] tracking-[0.2em] mb-4 font-bold font-manrope">
                CONNECT
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 text-[12px] font-bold font-manrope text-gray-800 tracking-widest">
                <a href="#" className="hover:text-black underline underline-offset-4">INSTAGRAM</a>
                <a href="#" className="hover:text-black underline underline-offset-4">LINKEDIN</a>
                <a href="#" className="hover:text-black underline underline-offset-4">READCV</a>
                <a href="#" className="hover:text-black underline underline-offset-4">+66 82-761-5156</a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 md:p-8"
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
            <form onSubmit={sendEmail}>
              <input type="text" name="company" style={{ display: "none" }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
  <div>
    <label className="text-[10px] tracking-widest text-[#777777] font-semibold font-manrope mb-1.5 block">
      FULL NAME
    </label>
    <input
      type="text"
      name="user_name"
      placeholder="Enter name"
      required
      className="w-full border border-[#d1d5db] px-3 py-2.5 text-[13px] text-gray-700 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
    />
  </div>
  <div>
    <label className="text-[10px] tracking-widest text-[#777777] font-semibold font-manrope mb-1.5 block">
      EMAIL ADDRESS
    </label>
    <input
      type="email"
      name="user_email"
      placeholder="Email@example.com"
      required
      className="w-full border border-[#d1d5db] px-3 py-2.5 text-[13px] text-gray-700 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
    />
  </div>
</div>

<div className="mb-6">
  <label className="text-[10px] tracking-widest text-[#777777] font-semibold font-manrope mb-1.5 block">
    MESSAGE
  </label>
  <textarea
    name="message"
    placeholder="Tell me about your inquiry..."
    rows={8}
    required
    className="w-full border border-[#d1d5db] px-3 py-2.5 text-[13px] text-gray-700 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors resize-none"
  />
</div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-black text-white px-8 py-3.5 text-[11px] tracking-[0.2em] font-semibold font-manrope flex items-center justify-center gap-2 min-w-[180px]"
              >
                <AnimatePresence mode="wait">
                  {status === "loading" && (
                    <motion.div
                      key="loading"
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    />
                  )}
                  {status === "success" && (
                    <motion.span
                      key="success"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      SENT ✓
                    </motion.span>
                  )}
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      GET IN TOUCH
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}