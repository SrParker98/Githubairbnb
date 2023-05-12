import React from "react";
import { list2 } from "./imagenes.js";
import "./style.css";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Card() {
  const data = list2;

  return (
    <ul className="card-container">
      {data.map((data, i) => (
        <li className="card-img" key={i}>
          <Swiper
            slidesPerView={1}
            navigation={true}
            pagination={true}
            mousewheel={true}
          >
            <SwiperSlide key={i}>
              <img src={`${data.imgSrc}`} key={i} className="card-img" />
            </SwiperSlide>
          </Swiper>
          <div className="card-title-rating">
            <span className="b">{data.title}</span>
            <span className=" rating">
              {" "}
              <FaStar />
              {data.rating}
            </span>
          </div>

          <div className="price">
            <span className="opacity-70">{data.desc}</span>
            <span className="b ">
              {data.price}$ <small className="weight">Night</small>{" "}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
