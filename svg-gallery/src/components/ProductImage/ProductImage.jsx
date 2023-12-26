/* eslint-disable react/prop-types */
// ProductImage.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "./style.scss";
// SwiperCore.use([Navigation, Thumbs]);

const ProductImage = ({ images }) => {
  // eslint-disable-next-line no-unused-vars
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbClick = (index) => {
    setThumbsSwiper((prev) => {
      prev?.slideTo(index);
      return prev;
    });
    setActiveIndex(index);
  };

 
  return (
    <div>
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={images[activeIndex]}
          alt={`Product ${activeIndex + 1}`}
          className="w-full h-auto"
        />
      </div>

      {/* Thumbnail Slider */}
      <Swiper
        modules={[Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        spaceBetween={10}
        slidesPerView={5}
        className="mb-4 thumbnailSlider relative"
        navigation={true}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleThumbClick(index)}
              className={
                "swiper-slide-thumbnail cursor-pointer border-2 border-blue-500"
              }
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImage;
