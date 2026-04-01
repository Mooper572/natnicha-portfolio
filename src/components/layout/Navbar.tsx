"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "[HOME]", href: "#home" },
  { label: "[PROJECTS]", href: "#projects" },
  { label: "[INTERNSHIP]", href: "#intern" },
  { label: "[ABOUT]", href: "#about" },
  { label: "[CONTACT]", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = 0;
    const handler = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="bg-white sticky top-0 z-50"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        backgroundImage:
          "linear-gradient(to right, #C6C6C6 50%, transparent 50%)",
        backgroundSize: "8px 1px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-10 py-2.5">
        {/* LOGO */}
        <a
          href="#home"
          className="text-black font-semibold text-[16px] tracking-wide font-manrope"
        >
          NATNICHA.MO
        </a>

        {/* NAV LINKS */}
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-regular text-[#666666] tracking-[0.1em] transition-all duration-300 font-grotesk relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#666666] after:transition-all after:duration-300 hover:text-black hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-3 px-5 py-3 text-[12px] text-[#666666] border border-gray-300 bg-gray-100 font-grotesk">
          <span className="relative flex items-center justify-center w-3 h-3 radar-modern">
            <span className="radar-core w-2 h-2 rounded-full bg-green-500"></span>
          </span>
          <span className="tracking-wide">[STATUS: READY]</span>
        </div>
      </div>
    </nav>
  );
}