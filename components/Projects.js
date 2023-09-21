import React from "react";
import "../styles/projects.css";
import "../src/styles.css";
import FoodDelivery from "../food delivery.png";

import Detector from "../facemask detector.png";
import Website from "../personal website.png";
import Misc from "../Misc projects.png";

const Projects = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="container portfolio_container">
        <div className="portfolio_item">
          <h2>Delivery Hub </h2>
          <h2>- Food Delivery App</h2>
          <img id="FoodDelivery" src={FoodDelivery} alt="FoodDelivery" />
          <div className="buttons">
            <a
              href="https://github.com/m347h/foodOrderingApp-"
              className="btn"
              target="_blank"
            >
              Github
            </a>

            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="portfolio_item">
          <h2>Real Time Face Mask </h2>
          <h2>Object Detector</h2>
          <img id="Detector" src={Detector} alt="Detector" />
          <div className="buttons">
            <a
              href="https://github.com/m347h/Real-Time-Face-Mask-Object-Detector-"
              className="btn"
              target="_blank"
            >
              Github
            </a>

            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>{" "}
        </div>

        <div className="portfolio_item">
          <h2>Personal portfolio</h2>
          <img id="Website" src={Website} alt="Website" />
          <div className="buttons">
            <a
              href="https://github.com/m347h/Personal-portfolio-"
              className="btn"
              target="_blank"
            >
              Github
            </a>

            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="portfolio_item">
          <h2>Personal portfolio</h2>
          <img id="Misc" src={Misc} alt="Misc" />
          <div className="buttons">
            <a href="https://github.com/m347h" className="btn" target="_blank">
              Github
            </a>

            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
