import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLine } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#2a2a28] text-gray-400">
      <div style={{ maxWidth: "1400px" }} className="mx-auto px-10 py-8">
        {/* Top row */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-8">
          {/* Logo */}
          <p className="text-[16px] font-semibold tracking-wide text-white font-manrope">
            NATNICHA.MO
          </p>

          {/* Nav links */}
          <div className="flex gap-10">
            {[
              "[HOME]",
              "[PROJECTS]",
              "[INTERNSHIP]",
              "[ABOUT]",
              "[CONTACT]",
            ].map((link) => (
              <a
                key={link}
                href="#"
                style={{ color: "#9ca3af", textDecoration: "none" }}
                className="text-xs tracking-[0.1em] transition-all duration-300 font-grotesk relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#9ca3af] after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              style={{ color: "#9ca3af", textDecoration: "none" }}
              className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:border-white hover:text-[#2a2a28] transition-all duration-300"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="#"
              aria-label="Line"
              style={{ color: "#9ca3af", textDecoration: "none" }}
              className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:border-white hover:text-[#2a2a28] transition-all duration-300"
            >
              <SiLine size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              style={{ color: "#9ca3af", textDecoration: "none" }}
              className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:border-white hover:text-[#2a2a28] transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-center text-[12px] mt-10 tracking-[0.1em] font-Regular font-grotesk">
          © 2026 NATNICHA.MO ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
