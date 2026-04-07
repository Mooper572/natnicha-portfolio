"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "[HOME]", href: "/", section: "#home" },
  { label: "[PROJECTS]", href: "/projects", section: null },
  { label: "[INTERNSHIP]", href: "/internship", section: null },
  { label: "[ABOUT]", href: "/about", section: null },
  { label: "[CONTACT]", href: "/", section: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const mobileOpenRef = useRef(false);
  const navigatingRef = useRef(false);
  const pendingSectionRef = useRef<string | null>(null); // ← เพิ่ม: เก็บ section ที่รอ scroll
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
    if (mobileOpen) {
      setVisible(true);
      lastY.current = window.scrollY;
    }
  }, [mobileOpen]);

  // ← แก้: หลัง pathname เปลี่ยน ให้ scroll ไป pendingSection
  useEffect(() => {
    lastY.current = 0;
    setVisible(true);
    setMobileOpen(false);

    if (pendingSectionRef.current) {
      const section = pendingSectionRef.current;
      pendingSectionRef.current = null;

      setTimeout(() => {
        if (section === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.querySelector(section);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        navigatingRef.current = false;
        lastY.current = window.scrollY;
      }, 100);
    } else {
      navigatingRef.current = false;
    }
  }, [pathname]);

  useEffect(() => {
    const handler = () => {
      if (mobileOpenRef.current) return;
      if (navigatingRef.current) return;
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
    setMobileOpen(false);

    if (section) {
      if (pathname !== "/") {
        // ← แก้: เก็บ section ไว้ใน ref แล้ว navigate ไป "/"
        navigatingRef.current = true;
        pendingSectionRef.current = section;
        router.push("/");
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

    if (pathname !== href) {
      navigatingRef.current = true;
      router.push(href);
    }
  };

  return (
    <nav
      className="bg-white sticky top-0 z-50"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="max-w-[1400px] mx-auto flex items-center justify-between px-5 lg:px-10 py-2.5"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C6C6C6 50%, transparent 50%)",
          backgroundSize: "8px 1px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="text-black font-semibold text-[16px] tracking-wide font-manrope"
        >
          NATNICHA.MO
        </Link>

        {/* NAV LINKS — desktop only (lg and above) */}
        <div className="hidden lg:flex gap-10">
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

        {/* STATUS — desktop only (lg and above) */}
        <div className="hidden lg:flex items-center gap-3 px-5 py-3 text-[12px] text-[#666666] border border-gray-300 bg-gray-100 font-grotesk">
          <span className="relative flex items-center justify-center w-3 h-3 radar-modern">
            <span className="radar-core w-2 h-2 rounded-full bg-green-500"></span>
          </span>
          <span className="tracking-wide">[STATUS: READY]</span>
        </div>

        {/* Hamburger — mobile & tablet (below lg) */}
        <button
          className="lg:hidden flex flex-col gap-[5px] justify-center items-center w-9 h-9 cursor-pointer"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-[1.5px] bg-[#2a2a28] transition-all duration-300"
            style={{
              transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-[1.5px] bg-[#2a2a28] transition-all duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[1.5px] bg-[#2a2a28] transition-all duration-300"
            style={{
              transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Drawer — mobile & tablet (below lg) */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 relative z-50 bg-white"
        style={{ maxHeight: mobileOpen ? "320px" : "0px" }}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-5 pt-2">
          <div className="flex flex-col gap-1 border-t border-gray-100 pt-2">
            {/* STATUS badge - mobile/tablet */}
            <div className="flex items-center gap-2 px-3 py-2 text-[11px] text-[#666666] bg-gray-100 border border-gray-200 font-grotesk mb-2 w-fit">
              <span className="relative flex items-center justify-center w-2.5 h-2.5 radar-modern">
                <span className="radar-core w-1.5 h-1.5 rounded-full bg-green-500"></span>
              </span>
              <span className="tracking-wide">[STATUS: READY]</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.section ?? link.href}
                onClick={(e) => handleNavClick(e, link.href, link.section)}
                className="text-xs tracking-[0.15em] py-3 border-b border-gray-100 font-grotesk text-[#666666] hover:text-black transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}