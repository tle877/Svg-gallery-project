/* eslint-disable react/prop-types */
// ProductImage.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "./style.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Pagination } from "swiper/modules";
const ProductImage = ({ images }) => {
  // eslint-disable-next-line no-unused-vars
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleThumbClick = (index) => {
    setThumbsSwiper((prev) => {
      prev?.slideTo(index);
      return prev;
    });
    setActiveIndex(index);
  };

  const handleMainImageClick = () => {
    setOpen(true);
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  function ImageViewerModal() {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={"modalContainer"}>
            <div className={"imageContainer"}>
              <img src={images[activeIndex]} alt="" />
              <div className={"prevBtn"}>
                <ChevronLeftIcon onClick={handlePrevClick} />
              </div>
              <div className={"nextBtn"}>
                <ChevronRightIcon onClick={handleNextClick} />
              </div>
              <div className={"closeIcon"} onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M19.25 2.75L2.75 19.25"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.75 2.75L19.25 19.25"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }

  return (
    <>
      <div className="hidden md:block">
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={images[activeIndex]}
            alt={`Product ${activeIndex + 1}`}
            className="w-full h-auto mainImage"
            onClick={handleMainImageClick}
          />
          <ImageViewerModal />
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
      <div className="block md:hidden mb-5">
          <Swiper 
            slidesPerView = {1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
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
                    onClick={handleMainImageClick}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </>
    
  );
};

export default ProductImage;
