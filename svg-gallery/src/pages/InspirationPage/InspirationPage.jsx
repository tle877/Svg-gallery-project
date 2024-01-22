// YourProductPage.jsx
// import React from 'react';
import ProductImageSlider from "../../components/ProductImage/ProductImage";
import Image_1 from "../../assets/image_1.png";
import Image_2 from "../../assets/image_2.png";
import Image_3 from "../../assets/image_3.png";
import Image_4 from "../../assets/image_4.png";
import AuthorInfo from "../../components/ProductDetail/AuthorInfo";
import ProductTitle from "../../components/ProductDetail/ProductTitle";
import ProductID from "../../components/ProductDetail/ProductID";
import FileDetails from "../../components/ProductDetail/FileDetails";
import Rating from "../../components/ProductDetail/Rating";
import ButtonGroup from "../../components/ProductDetail/ButtonGroup";
import YouMayAlsoLike from "../../components/YouMayAlsoLike/YouMayAlsoLike";
import RecommendedModel from "../../components/RecommendedModel/RecommendedModel";
import Description from "../../components/Description/Description";
import ProductionStep from "../../components/ProductionStep/ProductionStep";
import CommentsSection from "../../components/Comments/CommentsSection";
const InspirationPage = () => {
  const productImages = [
    Image_1,
    Image_2,
    Image_3,
    Image_4,
    Image_1,
    Image_2,
    Image_3,
    Image_4,
  ];

  return (
    <>
      <div className="container mx-auto mt-5">
        <div className="hidden md:grid md:grid-cols-2 md:gap-4 xl:gap-10">
          <div>
            <ProductImageSlider images={productImages} />
          </div>
          <div className="mx-3 hidden md:block">
            <AuthorInfo />
            <ProductTitle />
            <ProductID />
            <FileDetails />
            <Rating />
            <ButtonGroup />
          </div>
        </div>

        {/* mobile view */}
        <div className="md:hidden flex flex-col gap-1 mb-3">
          <div className="grid grid-cols-6 gap-16 sm:gap-0">
              <div className="col-span-2">
              <AuthorInfo />
              </div>
              <div className="mt-[-55px] ml-5 sm:ml-[-15px] grid col-span-4">
              <ProductID />
              </div>
          </div>
          <ProductTitle />
          <FileDetails />
          <div>
            <ProductImageSlider images={productImages} />
          </div>
        </div>
        {/* end mobile view */}


        <Description />
        <ProductionStep />
        <YouMayAlsoLike />
        <RecommendedModel />
      </div>
      <CommentsSection />
    </>
  );
};

export default InspirationPage;
