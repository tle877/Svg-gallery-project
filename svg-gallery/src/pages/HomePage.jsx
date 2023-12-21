// src/pages/HomePage.jsx
// import React from 'react';
import ProductCard from "../components/ProductCard/productCard";
import Carousel from '../components/Carousel/HeroBannerCarousel'

function HomePage() {
  return (
    <div>
      <Carousel/>
      <ProductCard />
    </div>
  );
}

export default HomePage;
