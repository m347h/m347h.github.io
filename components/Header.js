import React from "react";
import "../styles/header.css";
import "../src/styles.css";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";

function ColoredTxtGreen({ children }) {
  return <span style={{ color: "green" }}>{children}</span>;
}

const Header = (props) => {
  return (
    <section id="header">
      <div>
        <h1>Hi, I am May Han.</h1>
        <h3 className="fullStackDev">
          I'm a<ColoredTxtGreen> Fullstack Developer </ColoredTxtGreen>
          with interests in the fields of machine learning and graphics design.
        </h3>
        <h2 className="getInTouch">Let's get in touch!</h2>
      </div>

      <div className="header_socials">
        <a
          href="https://www.linkedin.com/in/may-han-37486521a/"
          target="_blank"
        >
          {" "}
          <FiLinkedin />{" "}
        </a>
        <a href="https://github.com/m347h" target="_blank">
          {" "}
          <FiGithub />{" "}
        </a>
        <a href="mailto:mayhan9797@gmail.com">
          <MdOutlineAttachEmail />{" "}
        </a>{" "}
      </div>
    </section>
  );
};

export default Header;
