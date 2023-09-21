import React from "react";
import ME from "../IMG-9316.JPG";
import "../styles/about.css";
import { FaAngellist } from "react-icons/fa";
import { GiHandBag } from "react-icons/gi";
import { TbMessageLanguage } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h1>About me</h1>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img id="AboutMeImage" src={ME} alt="AboutMeImage" />
          </div>
        </div>

        <div className=" about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAngellist className="about_icon" />
              <h5>Experiences</h5>
              <small>3+ years programming experience</small>
            </article>

            <article className="about_card">
              <GiHandBag className="about_icon" />
              <h5>Projects</h5>
              <small>
                More than projects completed and still ongoing. Check out my
                work here on my Github!{" "}
              </small>
              <div>
                <a
                  href="https://github.com/m347h"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </article>

            <article className="about_card">
              <TbMessageLanguage className="about_icon" />
              <h5>Languages</h5>
              <small>worked with coding languages</small>
              <small>
                moreover, am fluent in 3 spoken languages! (EN, FR (DALF C1
                earned), Mandarin)
              </small>
            </article>
          </div>

          <p>
            Hi! I am May, currently a Computer Science student at the University
            of Waterloo.
          </p>

          <p>
            In the past summer, I was a Fullstack Developer at MVS tech., where
            I worked with backend tools and frontend components to make service
            management systems more interactive and profitable.
          </p>
          <p>
            I started programming back in 2019 with learning the basics of HTML5
            and CSS, and I have been working on projects ever since. In
            particular, I enjoy learning the aspects of graphics design and
            machine learning.
          </p>
          <p>
            Some of the things I like to do in my free time include making arts,
            going to the gym, traveling, learning French, and experimenting with
            machine learning and data.
          </p>

          <p>
            That being said, I would love to know more about you, feel free to
            shoot me a message and let’s chat!
          </p>

          <a href="#contacts" className="btn">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
