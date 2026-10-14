import { EXPERIENCE, SKILLS } from "./data";
import SectionHeading from "./SectionHeading";
import "./Experience.css";

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="exp-inner">
        <SectionHeading title="Experience" subtitle="My professional journey." />

        <div className="exp-grid">
          {EXPERIENCE.map((job) => (
            <article className="card" key={job.role + job.company}>
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
              {job.location && <p className="place">{job.location}</p>}
              {job.summary && <p className="summary">{job.summary}</p>}
              <Tags items={job.tags} />
              <p className="dates">{job.dates}</p>
            </article>
          ))}
        </div>

        <div id="skills" className="arsenal">
          <SectionHeading title="Tech Arsenal" subtitle="Skills and tools I work with." />

          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div className="card" key={s.group}>
                <h3 className="group">{s.group}</h3>
                <Tags items={s.tags} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
