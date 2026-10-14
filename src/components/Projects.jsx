import { useCallback, useRef, useState } from "react";
import { PROJECTS } from "./data";
import SectionHeading from "./SectionHeading";
import "./Projects.css";

// All projects from every category, in order, shown in one carousel.
const ALL_PROJECTS = PROJECTS.flatMap((group) => group.items);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);
const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m15 5-7 7 7 7" />
  </svg>
);
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export default function Projects() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const last = ALL_PROJECTS.length - 1;

  // Scroll so card number `i` sits in the center of the track.
  const goTo = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const n = Math.max(0, Math.min(last, i));
    const card = track.children[n];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [last]);

  // Work out which card is closest to the center while scrolling or swiping.
  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const middle = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    Array.from(track.children).forEach((card, i) => {
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - middle);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });
    setActive(best);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(active - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <SectionHeading title="Projects" subtitle="A selection of my technical work." />
      </div>

      <div
        className="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects"
      >
        <div
          className="carousel-track"
          ref={trackRef}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {ALL_PROJECTS.map((p, i) => (
            <article
              className={`project-card ${i === active ? "active" : ""}`}
              key={p.name + i}
              aria-label={`Project ${i + 1} of ${ALL_PROJECTS.length}`}
            >
              <div className="project-head">
                <h4>{p.name}</h4>
                {p.date && <span className="project-date">{p.date}</span>}
              </div>
              <p className="project-desc">{p.description}</p>

              <ul className="ptags">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>

              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <GithubIcon /> GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <ExternalIcon /> Live demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {ALL_PROJECTS.length > 1 && (
          <div className="carousel-controls">
            <button
              type="button"
              className="arrow"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Previous project"
            >
              <ChevronLeft />
            </button>

            <div className="dots">
              {ALL_PROJECTS.map((p, i) => (
                <button
                  type="button"
                  key={p.name + i}
                  className={`dot ${i === active ? "on" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  aria-current={i === active}
                />
              ))}
            </div>

            <button
              type="button"
              className="arrow"
              onClick={() => goTo(active + 1)}
              disabled={active === last}
              aria-label="Next project"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
