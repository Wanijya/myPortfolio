import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const navLinks = ["Home", "About", "Work", "Skills", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={() => scrollTo("home")}
        >
          WB<span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link}>
              <button className="navbar__link" onClick={() => scrollTo(link)}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="retro-btn navbar__cta"
          onClick={() => scrollTo("contact")}
        >
          Let&apos;s Talk
        </button>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <button
                    className="navbar__mobile-link"
                    onClick={() => scrollTo(link)}
                  >
                    {link}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
