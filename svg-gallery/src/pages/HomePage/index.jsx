// src/pages/HomePage.jsx
// import React from 'react';
import "./home-page.scss"
import ProductCard from "../../components/ProductCard/productCard";
import Carousel from "../../components/Carousel/HeroBannerCarousel";

import { Filter } from "./components/Filter";
import ProductImage from "../../assets/productImage.jpeg";
import { SearchField } from "./components/Search";
import { useCallback, useState } from "react";
import { Tune } from "@mui/icons-material";
import Pagination from "../../components/Pagination/Pagination";

function HomePage() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeFilter, setActiveFilter] = useState(true);

  const toggleDrawer = useCallback(() => {
    setActiveFilter(true);
    setOpenDrawer(!openDrawer);
  }, [openDrawer]);
  const toggleActiveFilter = useCallback(() => {
    setActiveFilter(!activeFilter);
  }, [activeFilter]);

  return (
    <div className="flex flex-col gap-12">
      <Carousel />
      <SearchField toggleDrawer={toggleDrawer} />
      <div className="container">
        <div>
          {!activeFilter && (
            <div
              className="gap-4 p-5 mb-8 bg-blue-40 w-auto text-dark-brown text-xl max-w-[300px] hidden md:flex"
              onClick={toggleActiveFilter}
            >
              <Tune />
              Refine
            </div>
          )}
        </div>
        <div className=" md:grid md:grid-cols-4 gap-6 ">
          <div className=" hidden md:grid col-span-1 ">
            {activeFilter && (
              <Filter
                open={openDrawer}
                toggleDrawer={toggleDrawer}
                toggleActiveFilter={toggleActiveFilter}
              />
            )}
          </div>
          {/* grid grid-cols-2 sm:w-3/4 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center */}
          <div className="md:grid md:col-span-3 " >
            <div className="gallery-container ">
            <ProductCard
              imageShow={ProductImage}
              showUploadButtons
              showLikeRate
              showLikeRateButton
            />
            <ProductCard
              imageShow={ProductImage}
              showUploadButtons
              showLikeRate
            />
            <ProductCard
              imageShow={ProductImage}
              showUploadButtons
              showLikeRate
            />
            <ProductCard
              imageShow={ProductImage}
              showUploadButtons
              showLikeRate
            />
            <ProductCard
              imageShow={ProductImage}
              showUploadButtons
              showLikeRate
            />
            <ProductCard
              imageShow={ProductImage}
              showUploadButtons
              showLikeRate
            />
            <ProductCard
              imageShow={ProductImage}
              showUploadButtons
              showLikeRate
            />
            <ProductCard
              imageShow={ProductImage}
              showUploadButtons
              showLikeRate
            />
            <ProductCard
              imageShow={ProductImage}
              showUploadButtons
              showLikeRate
            />
            </div>
           
          </div>
                  </div>
        <Pagination totalPages={10} currentPage={3} />
      </div>
    </div>
  );
}

export default HomePage;
