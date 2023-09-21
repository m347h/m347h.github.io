import React from "react";
import "../styles/navbar.css";
import { BiHomeCircle, BiMessageDetail } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { MdPersonAddAlt } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNavbar("#")}
        className={activeNavbar === "#" ? "active" : ""}
      >
        <BiHomeCircle /> Home{" "}
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNavbar("#projects")}
        className={activeNavbar === "#projects" ? "active" : ""}
      >
        <AiOutlineProject /> Projects{" "}
      </a>
      <a
        href="#experiences"
        onClick={() => setActiveNavbar("#experiences")}
        className={activeNavbar === "#experiences" ? "active" : ""}
      >
        <FaClipboardList /> Experiences{" "}
      </a>
      <a
        href="#about"
        onClick={() => setActiveNavbar("#about")}
        className={activeNavbar === "#about" ? "active" : ""}
      >
        <MdPersonAddAlt /> About{" "}
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNavbar("#contacts")}
        className={activeNavbar === "#contacts" ? "active" : ""}
      >
        <BiMessageDetail /> Contact{" "}
      </a>
    </nav>
  );
};

export default Navbar;
