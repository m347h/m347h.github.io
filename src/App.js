import React from "react";
import "./styles.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Testimonials from "../components/Testimonials";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Projects />
      <Experiences />
      <About />
      <Testimonials />
      <Contacts />
    </div>
  );
}
