import { useState } from "react";
import { EDUCATION } from "./data";
import SectionHeading from "./SectionHeading";
import "./About.css";

function CapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f6bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  );
}

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-inner">
        <SectionHeading title="About Me" subtitle="Who I am and what drives me." />

        <div className="about-grid">
          <div className="about-photo-wrap">
            {photoFailed ? (
              <div className="about-photo fallback" aria-label="Khusham">K</div>
            ) : (
              <img
                className="about-photo"
                src="/profile.jpeg"
                alt="Khusham Khatri"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>

          <div className="about-text">
            {/* ✏️ Edit the two paragraphs below in your own words. */}
            <p>
              I’m a <strong>Software Developer </strong>with experience in <strong>Data Science and IT Project Management</strong>, passionate about building practical, data-driven solutions. I enjoy developing web applications, working with data, and turning ideas into solutions that create real value for users.
            </p>
            <p>
             I bring together software development, data analysis, and project management to build reliable, user-focused technology solutions. I’m passionate about solving real-world problems, learning new technologies, and continuously improving the way I build and deliver software.
            </p>

            <div className="about-edu">
              <h3><CapIcon /> Education</h3>
              {EDUCATION.map((e) => (
                <div className="edu-item" key={e.school}>
                  <strong>{e.school}</strong>
                  <span>{e.degree}</span>
                  <span>{e.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
