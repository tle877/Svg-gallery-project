import ProductCard from "../ProductCard/productCard"
import "./RecommendedModel.scss"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import {Autoplay, FreeMode, Pagination } from 'swiper/modules';

const RecommendedModel = () => {
  return (
    <div className="recommendedModel  sm:px-14 md:px-20 lg:px-28 sm:mt-10">
        <div className="p-5">
            <div className="sm:flex sm:justify-between "> 
                <h2 className=" leading-10 ml-5 sm:ml-0 sm:mb-5">Recommended Model</h2>
            </div>
            <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 hidden " >
                <ProductCard   />
                <ProductCard   />
                <ProductCard   />
                <ProductCard   />
            </div> 
        </div>
        
        <Swiper
        slidesPerView={2.1}
        spaceBetween={10}
        freeMode={true}
        breakpoints={{
            500:{
                slidesPerView :3.1
            }
        }}
        // pagination={{
        //   clickable: true,
        // }}
        loop = {true}
        // autoplay={{
        //     delay: 2000, // Adjust the delay in milliseconds between slides
        //     disableOnInteraction: false, // Set to false to keep autoplay running even after user interaction
        //   }}
        modules={[Autoplay,FreeMode, Pagination]}
        className="mySwiper sm:hidden ml-5 "
      >
        <SwiperSlide>
            <ProductCard    />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard    />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard    />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard    />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RecommendedModel;