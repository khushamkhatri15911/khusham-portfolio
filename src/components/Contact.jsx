import { useState } from "react";
import { PROFILE, FORM_ENDPOINT } from "./data";
import SectionHeading from "./SectionHeading";
import "./Contact.css";

const svg = { width: 24, height: 24, viewBox: "0 0 24 24", "aria-hidden": true };

const MailIcon = () => (
  <svg {...svg} fill="currentColor">
    <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v.32l-10 6.25L2 5.82V5.5zM2 8.17V18.5A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5V8.17l-9.47 5.92a1 1 0 0 1-1.06 0L2 8.17z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg {...svg} fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const GithubIcon = () => (
  <svg {...svg} fill="currentColor">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

// "https://github.com/khusham" -> "khusham"
const handle = (url) => url.replace(/\/$/, "").split("/").pop();

const CONTACTS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, Icon: MailIcon },
  { label: "LinkedIn", value: handle(PROFILE.linkedin), href: PROFILE.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", value: handle(PROFILE.github), href: PROFILE.github, Icon: GithubIcon },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const firstName = PROFILE.name.split(" ")[0];

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // No form service set up yet: open the visitor's email app instead.
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <SectionHeading title="Get in Touch" subtitle="Let's build something great together." />

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm open to software development, data, and project roles, and I'm
              always happy to talk about new opportunities or just chat about
              technology. Send me a message here or reach out on any channel below.
            </p>

            <ul className="contact-list">
              {CONTACTS.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer">
                    <span className="contact-icon"><Icon /></span>
                    <span className="contact-text">
                      <small>{label}</small>
                      <span>{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="c-name">Name</label>
            <input id="c-name" name="name" type="text" placeholder="Your name" required autoComplete="name" />

            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />

            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows="6" placeholder={`Hi ${firstName}, I'd like to talk about...`} required />

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <p className={`form-status ${status}`} role="status" aria-live="polite">
              {status === "sent" && "Thanks! Your message was sent. I'll get back to you soon."}
              {status === "error" && "Something went wrong. Please try again or email me directly."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
