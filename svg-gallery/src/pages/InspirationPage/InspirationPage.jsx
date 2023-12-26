// YourProductPage.jsx
// import React from 'react';
import ProductImageSlider from "../../components/ProductImage/ProductImage";
import Image_1 from "../../assets/image_1.png";
import Image_2 from "../../assets/image_2.png";
import Image_3 from "../../assets/image_3.png";
import Image_4 from "../../assets/image_4.png";

const InspirationPage = () => {
  const productImages = [Image_1, Image_2, Image_3, Image_4, Image_1, Image_2, Image_3, Image_4];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <ProductImageSlider images={productImages} />
      </div>
    </div>
  );
};

export default InspirationPage;
