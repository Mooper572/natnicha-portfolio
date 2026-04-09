"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLine } from "react-icons/si";

const footerLinks = [
  { label: "[HOME]", href: "/", section: "#home" },
  { label: "[PROJECTS]", href: "/projects", section: null },
  { label: "[INTERNSHIP]", href: "/internship", section: null },
  { label: "[ABOUT]", href: "/about", section: null },
  { label: "[CONTACT]", href: "/", section: "#contact" },
];

const scrollToSection = (section: string) => {
  if (section === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const el = document.querySelector(section) as HTMLElement | null;
    if (el) {
      const navbar = document.querySelector("nav") as HTMLElement | null;
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight + 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const pendingSectionRef = useRef<string | null>(null);

  useEffect(() => {
    if (pendingSectionRef.current) {
      const section = pendingSectionRef.current;
      pendingSectionRef.current = null;

      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    }
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    section: string | null
  ) => {
    e.preventDefault();

    if (section) {
      if (pathname !== "/") {
        pendingSectionRef.current = section;
        router.push("/");
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("closeMobileMenu"));
        }, 200);
      } else {
        window.dispatchEvent(new CustomEvent("closeMobileMenu"));
        scrollToSection(section);
      }
      return;
    }

    router.push(href);
  };

  return (
    <footer className="bg-[#2a2a28] text-gray-400">
      <div style={{ maxWidth: "1400px" }} className="mx-auto px-5 md:px-10 py-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-b border-gray-700 pb-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "/", "#home")}
            style={{ textDecoration: "none" }}
            className="text-[16px] font-semibold tracking-wide text-white font-manrope"
          >
            NATNICHA.MO
          </Link>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:gap-10">
            {footerLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.section ?? link.href}
                onClick={(e) => handleNavClick(e, link.href, link.section)}
                style={{ color: "#9ca3af", textDecoration: "none" }}
                className="text-xs tracking-[0.1em] transition-all duration-300 font-grotesk relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#9ca3af] after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/natnicha-inkongngnam-75672a401"
              aria-label="LinkedIn"
              style={{ color: "#9ca3af", textDecoration: "none" }}
              className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:border-white hover:text-[#2a2a28] transition-all duration-300"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="https://line.me/ti/p/~line_id_gumosud"
              aria-label="Line"
              style={{ color: "#9ca3af", textDecoration: "none" }}
              className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:border-white hover:text-[#2a2a28] transition-all duration-300"
            >
              <SiLine size={16} />
            </a>
            <a
              href="https://instagram.com/sal._mo"
              aria-label="Instagram"
              style={{ color: "#9ca3af", textDecoration: "none" }}
              className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:border-white hover:text-[#2a2a28] transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-center text-[12px] mt-8 md:mt-10 tracking-[0.1em] font-Regular font-grotesk">
          © 2026 NATNICHA.MO ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}