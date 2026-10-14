import { useState } from "react";
import "./Header.css";

const LINKS = ["Home", "About", "Experience", "Projects", "Resume", "Contact"];

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="#home" aria-label="Khusham, home">
          <span className="logo-mark">K</span>
          <span className="logo-name">Khusham</span>
        </a>

        <nav className={`pill ${open ? "open" : ""}`} aria-label="Main">
          {LINKS.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="actions">
          <button
            className="icon-btn sun"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
