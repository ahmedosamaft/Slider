import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "./styles.css";
import team1 from "./img/team1.jpg";
import team2 from "./img/team2.jpg";
import team3 from "./img/team3.jpg";

export default function Slider() {
  return (
    <Swiper
      direction="vertical"
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      className="mySwiper card-holder"
    >
      <SwiperSlide className="card">
        <div className="first-col">
          <div className="image-content">
            <div className="card-image">
              <img src={team1} alt="" />
            </div>
            <h3>Mike Taylor</h3>
            <h5>Front-End Dev</h5>
          </div>
        </div>
        <div className="sec-col">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eius, repudiandae hic beatae doloremque qui commodi
            iure possimus culpa aperiam molestias facilis labore sint? Ratione
            nihil beatae voluptatum itaque illum.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="card">
        <div class="first-col">
          <div class="image-content">
            <div class="card-image">
              <img src={team2} alt="" />
            </div>
            <h3>Mike Taylor</h3>
            <h5>Front-End Dev</h5>
          </div>
        </div>
        <div class="sec-col">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eius, repudiandae hic beatae doloremque qui commodi
            iure possimus culpa aperiam molestias facilis labore sint? Ratione
            nihil beatae voluptatum itaque illum.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="card">
        <div class="first-col">
          <div class="image-content">
            <div class="card-image">
              <img src={team3} alt="" />
            </div>
            <h3>Mike Taylor</h3>
            <h5>Front-End Dev</h5>
          </div>
        </div>
        <div class="sec-col">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eius, repudiandae hic beatae doloremque qui commodi
            iure possimus culpa aperiam molestias facilis labore sint? Ratione
            nihil beatae voluptatum itaque illum.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
