import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";

const navLinks = [
  { label: "Home", path: "/", type: "internal" },
  { label: "About", path: "#about", type: "scroll" },
  { label: "Products", path: "#products", type: "scroll" },
  { label: "Contact", path: "#contact", type: "scroll" },
  { label: "Careers", path: "/careers", type: "internal" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // LOCK body scroll while menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    }
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e, link) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      if (link.type === "scroll" && window.location.pathname === "/") {
        const el = document.querySelector(link.path);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(link.path.startsWith("/") ? link.path : "/" + link.path);
      }
    }
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <div className="brand">
          <Link to="/">
            AUTOMEL<span className="amp">Automations</span>Inc.
          </Link>
        </div>

        {/* Burger Menu */}
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav */}
        <nav id="mobile-nav" aria-hidden={!menuOpen}>
          <ul className={`main-nav ${menuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.type === "internal" ? (
                  <Link to={link.path} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.path} onClick={(e) => handleNavClick(e, link)}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape" || e.key === "Enter") setMenuOpen(false);
          }}
        />
      )}
    </header>
  );
}
