import React from "react";
import "../styles/contacts.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_089y6q6",
      "template_0eitdqd",
      form.current,
      "1C-YAn7sSUaT0RNWk"
    );
    e.target.reset();
  };

  return (
    <section id="contacts">
      <div className="container container_contacts">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
