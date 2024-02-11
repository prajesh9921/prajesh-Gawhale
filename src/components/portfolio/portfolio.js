import React, { useState } from "react";
import "./portfolio.css";
import data from "./data";

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
                {item.image ? <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio_image"
                /> : <p style={{fontSize: 30, fontWeight: 'bold'}}>{item.title}</p> }
              </div>
              <h3>{item.title}</h3>
              <p className="portfolio_description">{item.description}</p>
              <div className="portfolio_container-cta">
                <a
                  href={item.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {item.demoStatus ? (
                  <a
                    href={item.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
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
