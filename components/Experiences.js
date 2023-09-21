import React from "react";
import { BsDot } from "react-icons/bs";
import "../styles/experiences.css";

const Experiences = () => {
  return (
    <section id="experiences">
      <h1> Experiences </h1>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h2>Fullstack Developer Intern</h2>
          <div className="experience_content">
            <article className="experience_details">
              <h4>MVS Computer Tech Co Ltd, Shanghai</h4>
              <small className="text-light">May 2023 - August 2023</small>
              <h4>
                <BsDot /> Implemented responsive and intuitive front-end
                components using Vue.js and Vuex, and used Springboot MVC to
                make firm's web applications maintainable{" "}
              </h4>
              <h4>
                <BsDot />
                Performed CRUD operations using REST-APIs to manage a list of
                users{" "}
              </h4>
              <h4>
                <BsDot />
                Actively participated in code reviews and team discussions
              </h4>
            </article>
          </div>
        </div>

        <div className="experience_frontend ">
          <h2>Advice to a Scientist Lab </h2>
          <div className="experience_content">
            <article className="experience_details">
              <h4>University of British Columbia, Remote</h4>
              <small className="text-light">April 2022 - September 2022</small>
              <h4>
                <BsDot />
                Supervised by Dr. Jennifer Ma and Dr. Nika Shakiba in
                investigating use of data in healthcare
              </h4>
              <h4>
                <BsDot />
                Created custom library functions in R to process and organize
                data
              </h4>
              <h4>
                <BsDot />
                Contributed to relevant papers published in optimizing
                development of genetic circuits
              </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
