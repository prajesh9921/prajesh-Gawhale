import React, {useState, useEffect} from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./headerSocial";
import ComputerAnimation from "../../assets/lottie/computer.json";
import Lottie from "react-lottie";

const Header = () => {

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const heightWeight = windowSize/3; 

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

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
      <div className="header_container">
        <h5>Hello I'm</h5>
        <h1 className="header_name">Prajesh Gawhale</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <div className="socials">
          <HeaderSocial />
            <Lottie options={defaultOptions} height={windowSize <= 480 ? 250 : heightWeight} width={windowSize <= 480 ? 250 : heightWeight}/>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
