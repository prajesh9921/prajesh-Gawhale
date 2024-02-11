import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { Tools, Technologies } from "./data";
const experience = () => {

  return (
    <section data-section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        {/* TOOLS */}
        <div className="experience_tools">
          <h3>Tools</h3>
          <div className="experience_content">
            {Tools.map((item) => {
              return (
                <article  key={item.id} className="experience_details">
                  <BsPatchCheckFill className="experience_container-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <small className="text-light">{item.subText}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="experience_technologies">
          <h3>Technologies</h3>
          <div className="experience_content">
          {Technologies.map((item) => {
              return (
                <article  key={item.id} className="experience_details">
                  <BsPatchCheckFill className="experience_container-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <small className="text-light">{item.subText}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
