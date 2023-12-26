// src/pages/HomePage.jsx
// import React from 'react';
import { useState } from 'react';
import ProductCard from "../../components/ProductCard/productCard";
import Carousel from "../../components/Carousel/HeroBannerCarousel";
import Pagination from "../../components/Pagination/Pagination";

import { Filter } from "./components/Filter";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col gap-12">
      <Carousel />
      <div className="container flex gap-6">
        <Filter />
        <ProductCard />
        
      </div>
      <Pagination totalPages={10} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default HomePage;
