// src/pages/HomePage.jsx
// import React from 'react';
import ProductCard from "../../components/ProductCard/productCard";
import Carousel from "../../components/Carousel/HeroBannerCarousel";

import { Filter } from "./components/Filter";
import ProductImage from "../../assets/productImage.jpeg";
import { SearchField } from "./components/Search";
import { useCallback, useState } from "react";
import { Tune } from "@mui/icons-material";

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
        <div className=" flex gap-6">
          {activeFilter && (
            <Filter
              open={openDrawer}
              toggleDrawer={toggleDrawer}
              toggleActiveFilter={toggleActiveFilter}
            />
          )}
          <ProductCard
            imageShow={ProductImage}
            showUploadButtons
            showLikeRate
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
