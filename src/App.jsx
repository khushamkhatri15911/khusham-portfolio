import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || "dark"; } catch { return "dark"; }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
  }, [theme]);

  return (
    <>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
