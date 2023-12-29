// YourProductPage.jsx
// import React from 'react';
import ProductImageSlider from "../../components/ProductImage/ProductImage";
import Image_1 from "../../assets/image_1.png";
import Image_2 from "../../assets/image_2.png";
import Image_3 from "../../assets/image_3.png";
import Image_4 from "../../assets/image_4.png";
import AuthorInfo from "../../components/ProductDetail/AuthorInfo"
import ProductTitle from "../../components/ProductDetail/ProductTitle";
import ProductID from "../../components/ProductDetail/ProductID";
import FileDetails from "../../components/ProductDetail/FileDetails";
import Rating from "../../components/ProductDetail/Rating";
import ButtonGroup from "../../components/ProductDetail/ButtonGroup";
const InspirationPage = () => {
  const productImages = [Image_1, Image_2, Image_3, Image_4, Image_1, Image_2, Image_3, Image_4];

  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-2 gap-4">
        <ProductImageSlider images={productImages} />
        <div className="mx-5">
            <AuthorInfo/>
            <ProductTitle/>
            <ProductID/>
            <FileDetails/>
            <Rating/>
            <ButtonGroup/>
        </div>
        
      </div>
    </div>
  );
};

export default InspirationPage;
