import { PROFILE } from "./data";
import SectionHeading from "./SectionHeading";
import "./Resume.css";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

const DocIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
    <path d="M14 3v5h5M9 13h6M9 17h6M9 9h2" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />
  </svg>
);



export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-inner">
        <SectionHeading title="Resume" subtitle="My whole story on a single page." />

        <div className="resume-card">
          <span className="resume-icon"><DocIcon /></span>
          <h3>Want the full picture?</h3>
          <p>
            Download my resume for a complete overview of my experience,
            technical skills, education, and projects.
          </p>
          <div className="resume-actions">
            <a className="resume-btn primary" href={PROFILE.resume} download>
              <DownloadIcon /> Download Resume (PDF)
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
