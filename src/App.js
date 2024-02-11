import React, { useEffect, useState, useRef } from "react";
import About from "./components/about/about.js";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const halfViewport = viewportHeight / 2;

    let newActiveSection = null;

    sections.current.forEach((section) => {
      const { top, bottom } = section.getBoundingClientRect();

      const topDistance = Math.abs(top);
      const bottomDistance = Math.abs(bottom - viewportHeight);

      if (topDistance <= halfViewport || bottomDistance <= halfViewport) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Disable right click
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <>
      <Header />
      <Nav activeSection={activeSection} />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
