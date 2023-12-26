import ProductCard from "../ProductCard/productCard"
import "./RecommendedModel.scss"

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// // import required modules
// import { FreeMode, Pagination } from 'swiper/modules';

const RecommendedModel = () => {
  return (
    <div className="recommendedModel p-8 sm:px-14 md:px-20 lg:px-28 ">
        <div className="sm:flex sm:justify-between "> 
            <h2 className=" leading-10 mb-5">Recommended Model</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 " >
            <ProductCard   />
            <ProductCard   />
            <ProductCard   />
            <ProductCard   />
        </div> 

        {/* For Slider */}
        {/* <Swiper
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
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ProductCard  />
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
      </Swiper> */}
    </div>
  );
};

export default RecommendedModel;