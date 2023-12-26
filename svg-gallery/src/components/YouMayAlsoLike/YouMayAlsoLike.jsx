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
import { FreeMode, Pagination } from 'swiper/modules';

const YouMayAlsoLike = () => {
  return (
    <div className="youMayAlsoLike p-8 sm:p-14 md:p-20 lg:p-28">
        <div className="sm:flex sm:justify-between "> 
            <h2 className=" leading-10 mb-5">You May Also Like</h2>
            <button>See All</button>
        </div>
        <Swiper
        slidesPerView={1}
        breakpoints= {{
            550: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
            1480:{
                slidesPerView: 4
            },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ProductCard  showLikeRateButton showLikeRate />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard  showLikeRateButton showLikeRate />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard  showLikeRateButton showLikeRate />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard  showLikeRateButton showLikeRate />
        </SwiperSlide>

      </Swiper>
      
    </div>
  );
};

export default YouMayAlsoLike;