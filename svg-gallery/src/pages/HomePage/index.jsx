// src/pages/HomePage.jsx
// import React from 'react';
import ProductCard from "../components/ProductCard/productCard";
import Carousel from "../components/Carousel/HeroBannerCarousel";

import { Filter } from "./components/Filter";

function HomePage() {
  return (
    <div>
      <Filter />
      <Carousel />
      <ProductCard />
    </div>
  );
}

export default HomePage;
