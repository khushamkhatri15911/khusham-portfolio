import "./SectionHeading.css";

// Reused by every section: big title, muted subtitle, gradient bar.
export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <span className="section-bar" aria-hidden="true" />
    </div>
  );
}
