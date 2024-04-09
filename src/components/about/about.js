import React from "react";
import "./about.css";
import ProfilePic from "../../assets/profile2.jpeg";
import { FaAward } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section data-section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ProfilePic} alt="About" className="profile_image"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>

            <article className="about_card">
              <MdWorkOutline className="about_icon" />
              <h5>Internships</h5>
              <small>4+ Completed</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            As a recent 2023 graduate, I have gained valuable experience
            through 4 internships, where I have honed my skills in technologies
            such as React Native, React JS, Flutter, and more. My dedication and
            hard work have been recognized as I emerged as a winner in ET Campus
            Start 6.0, organized by Economics Times. I thrive on challenges and
            am always prepared to take on the next opportunity. Throughout my
            academic journey, I have successfully completed numerous projects
            that have further enriched my skill set.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
