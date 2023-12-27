import ProductCard from "../ProductCard/productCard"
import "./YouMayAlsoLike.scss"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay,FreeMode, Pagination } from 'swiper/modules';

const YouMayAlsoLike = () => {
  return (
    <div className="youMayAlsoLike sm:px-14 md:px-20 lg:px-28">
        <div className="p-5 ">
            <div className="flex justify-between items-center"> 
                <h2 className=" leading-10 ml-5 sm:ml-0 sm:mb-5">You May Also Like</h2>
                <button className="seeAllButton sm:mb-5">See All</button>
            </div>
            
            <div className=" hidden sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 hidden" >
                <ProductCard  showLikeRate />
                <ProductCard  showLikeRate />
                <ProductCard  showLikeRate />
                <ProductCard  showLikeRate />
            </div> 
        </div>
        <Swiper
        slidesPerView={2.1}
        spaceBetween={10}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        breakpoints={{
            500:{
                slidesPerView :3.1
            }
        }}
        // autoplay={{
        //     delay: 2000, // Adjust the delay in milliseconds between slides
        //     disableOnInteraction: false, // Set to false to keep autoplay running even after user interaction
        //   }}
        
        modules={[Autoplay,FreeMode, Pagination]}
        className="mySwiper sm:hidden ml-5 sm:ml-0 "
        >
        <SwiperSlide>
            <ProductCard   showLikeRate />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard   showLikeRate />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard   showLikeRate />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard   showLikeRate />
        </SwiperSlide>
      </Swiper>
      </div>
  );
};

export default YouMayAlsoLike;