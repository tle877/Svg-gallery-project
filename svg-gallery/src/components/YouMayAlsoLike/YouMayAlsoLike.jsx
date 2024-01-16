import ProductCard from "../ProductCard/productCard"
import "./YouMayAlsoLike.scss"
import ProductImage from "../../assets/productImage.jpeg"

// import React, { useRef, useState } from 'react';
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
    <div className="youMayAlsoLike mx-auto my-10">
        <div >
            <div className="flex justify-between items-center mb-5"> 
                <h2 className=" leading-10 sm:ml-0 sm:mb-5">You May Also Like</h2>
                <button className="seeAllButton sm:mb-5">See All</button>
            </div>
            
            <div className=" hidden sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 hidden" >
                <ProductCard  imageShow={ProductImage} showLikeRate/>
                <ProductCard  imageShow={ProductImage}showLikeRate />
                <ProductCard  imageShow={ProductImage}showLikeRate />
                <ProductCard  imageShow={ProductImage} showLikeRate />
            </div> 
        </div>

        <Swiper
        slidesPerView={2.2}
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
        className="mySwiper sm:hidden ml-0 sm:ml-0 "
        >
        <SwiperSlide>
            <ProductCard  imageShow={ProductImage} showLikeRate />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard  imageShow={ProductImage} showLikeRate />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard  imageShow={ProductImage} showLikeRate />
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard  imageShow={ProductImage} showLikeRate />
        </SwiperSlide>
      </Swiper>
      </div>
  );
};

export default YouMayAlsoLike;