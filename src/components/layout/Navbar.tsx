"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "[HOME]", href: "/", section: "#home" },
  { label: "[PROJECTS]", href: "/", section: "#projects" },
  { label: "[INTERNSHIP]", href: "/", section: "#intern" },
  { label: "[ABOUT]", href: "/about", section: null },
  { label: "[CONTACT]", href: "/", section: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // reset เมื่อ navigate ใหม่
    lastY.current = 0;
    setVisible(true);
  }, [pathname]);

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY;
      if (currentY < 10) setVisible(true);
      else if (currentY > lastY.current) setVisible(false);
      else setVisible(true);
      lastY.current = currentY;
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    section: string | null
  ) => {
    e.preventDefault();
    if (section) {
      if (pathname !== "/") {
        router.push(`/${section}`);
      } else {
        if (section === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.querySelector(section);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
      return;
    }
    router.push(href);
  };

  return (
    <nav
      className="bg-white sticky top-0 z-50"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        backgroundImage: "linear-gradient(to right, #C6C6C6 50%, transparent 50%)",
        backgroundSize: "8px 1px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-10 py-2.5">
        {/* LOGO */}
        <Link
          href="/"
          className="text-black font-semibold text-[16px] tracking-wide font-manrope"
        >
          NATNICHA.MO
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href + link.label}
              href={link.section ?? link.href}
              onClick={(e) => handleNavClick(e, link.href, link.section)}
              className="text-xs font-regular tracking-[0.1em] transition-all duration-300 font-grotesk relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#666666] after:transition-all after:duration-300 hover:text-black hover:after:w-full text-[#666666]"
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