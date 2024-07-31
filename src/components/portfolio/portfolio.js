import React, { useState } from "react";
import "./portfolio.css";
import data from "./data";
import { FaGithub, FaLink, FaYoutube  } from "react-icons/fa";

const Portfolio = () => {
  const ITEMS_SHOW_LESS = 6;
  const [Items, setItems] = useState(data.slice(0, ITEMS_SHOW_LESS));

  const ShowMoreAndLess = () => {
    if (Items.length > 6) {
      setItems(data.slice(0, ITEMS_SHOW_LESS));
    } else {
      setItems(data.slice(0));
    }
  };

  return (
    <section data-section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {Items.map((item, index) => {
          return (
            <article key={index} className="portfolio_item">
              <div className="portfolio_item-image">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio_image"
                  />
                ) : (
                  <p style={{ fontSize: 30, fontWeight: "bold" }}>
                    {item.title}
                  </p>
                )}
              </div>
              <h3>{item.title}</h3>
              <div className="descriptionbox">
                <p className="portfolio_description">{item.description}</p>
              </div>
              <div className="portfolio_container-cta">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub color="#4db5ff" size={22} />
                </a>
                {item.demoStatus ? (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLink color="#4db5ff" size={22} />
                  </a>
                ) : null}

                {item.videolink ? (
                  <a
                    href={item.videolink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaYoutube color="#4db5ff" size={22} />
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
      <a className="show btn" onClick={ShowMoreAndLess}>
        {Items.length > 6 ? "Show Less" : "Show More"}
      </a>
    </section>
  );
};

export default Portfolio;
