// src/pages/HomePage.jsx
// import React from 'react';
import ProductCard from "../../components/ProductCard/productCard";
import Carousel from "../../components/Carousel/HeroBannerCarousel";

import { Filter } from "./components/Filter";
import ProductImage from "../../assets/productImage.jpeg"

function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Carousel />
      <div className="container flex gap-6">
        <Filter />
        <ProductCard imageShow={ProductImage} showUploadButtons showLikeRate />
      </div>
    </div>
  );
}

export default HomePage;
