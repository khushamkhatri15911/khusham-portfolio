import { PROFILE } from "./data";
import "./Hero.css";

const icon = { width: 22, height: 22, "aria-hidden": true };

const PinIcon = () => (
  <svg {...icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ArrowIcon = () => (
  <svg {...icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const DownloadIcon = () => (
  <svg {...icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />
  </svg>
);
const GithubIcon = () => (
  <svg {...icon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg {...icon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>

);

export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-label">Portfolio</p>
      <h1>{PROFILE.name}</h1>
      <h2 className="hero-headline">{PROFILE.headline}</h2>
      <p className="hero-blurb">{PROFILE.blurb}</p>

      <div className="hero-buttons">
        <a className="hero-btn primary" href="#projects">
          View Projects <ArrowIcon />
        </a>
        <a className="hero-btn outline" href={PROFILE.resume} download>
          <DownloadIcon /> Download Resume
        </a>
      </div>

      <div className="hero-meta">
        <span className="hero-location"><PinIcon /> {PROFILE.location}</span>
        <span className="hero-divider" aria-hidden="true" />
        <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
        
      </div>
    </section>
  );
}
