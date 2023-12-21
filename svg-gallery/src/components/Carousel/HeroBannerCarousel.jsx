// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BannerImage from "../../assets/banner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={BannerImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
