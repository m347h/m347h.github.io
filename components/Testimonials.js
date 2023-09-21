import React from "react";
import "../styles/testimonials.css";
import AVTR1 from "../Arduino.jpeg";
import AVTR2 from "../french.png";
import AVTR3 from "../fun.png";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Arduino memory game!",
    review:
      "I built an Arduino Memory Game using Arduino and breadboarding! The LED lights display a pattern & the player try to repeat it from memory. It restarts if you didnt get it right. "
  },
  {
    avatar: AVTR2,
    name: "french",
    review: "I built an arduino project"
  },
  {
    avatar: AVTR3,
    name: "travelling",
    review: "I built an arduino project"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1> What's happening in my life... </h1>
      <h3> Projects, hobbies, fun travels & eats, etc. </h3>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} />
              </div>

              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
