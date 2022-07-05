/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlider from "./SingleSlider";

// import required modules
import { Autoplay, Navigation } from "swiper";

const GridSlider = ({ feedbackList }) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  return (
    <>
      <div className="sliderWrapper paddingWrapper">
        <style jsx>{`
          .sliderWrapper {
            position: relative;
          }
          .sliderImage {
            position: absolute;
            height: 350px;
            width: 40%;
            left: 0;
            bottom: 0;
            // transform: translateY(-17%);
          }
        `}</style>
        <img src="/images/slider-bg.png" alt="" className="sliderImage" />
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={false}
          //  onBeforeInit={{
          //       swiper.params.navigation.prevEl = navigationPrevRef.current;
          //       swiper.params.navigation.nextEl = navigationNextRef.current;
          //  }}
          //   onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          //   breakpoints={{
          //     // when window width is >= 640px
          //     440: {
          //       width: 440,
          //       slidesPerView: 2,
          //     },
          //     // when window width is >= 768px
          //     768: {
          //       width: 768,
          //       slidesPerView: 2,
          //     },
          //     // when window width is >= 991px
          //     991: {
          //       width: 991,
          //       slidesPerView: 4,
          //     },
          //   }}
        >
          {feedbackList.map((feedback, index) => {
            return (
              <SwiperSlide key={index}>
                <SingleSlider feedback={feedback} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default GridSlider;
