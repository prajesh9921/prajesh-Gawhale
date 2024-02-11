import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./headerSocial";
import ComputerAnimation from "../../assets/lottie/computer.json";
import Lottie from "react-lottie";

const header = () => {
  // const mediaQuery = window.matchMedia("(max-width: 600px)");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ComputerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <header data-section id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1 className="header_name">Prajesh Gawhale</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <Lottie options={defaultOptions} />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
