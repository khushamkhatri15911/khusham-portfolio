import { PROFILE } from "./data";
import "./Footer.css";

const NAV = ["Home", "About", "Experience", "Projects", "Contact"];

export default function Footer() {
  const firstName = PROFILE.name.split(" ")[0];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-cta">
            <p>Open to software, data, and project roles.</p>
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h3>Navigate</h3>
            {NAV.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`}>{label}</a>
            ))}
          </nav>

          <div className="footer-col">
            <h3>Elsewhere</h3>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={PROFILE.resume} download>Resume</a>
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">{}</div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}</span>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
