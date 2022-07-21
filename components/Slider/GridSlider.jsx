/* eslint-disable @next/next/no-img-element */

import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlider from "./SingleSlider";
// import required modules
import { Autoplay, Navigation } from "swiper";

// react icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const GridSlider = ({ feedbackList }) => {
  return (
    <>
      <div className="sliderWrapper">
        <style jsx>{`
          .sliderWrapper {
            position: relative;
            padding: 50px 0px 0px 0px;
          }
          .sliderImage {
            position: absolute;
            height: 350px;
            width: 40%;
            left: 0;
            bottom: 0;
            // transform: translateY(-17%);
          }
          .customButton {
            display: flex;
            justify-content: end;
            margin: 20px 20px 5px 0px;
          }
          .customButton > button {
            padding: 1rem 2rem;
            background: #000;
            width: 83px;
            height: 36px;
            background: #f6f6f6;
            border: none;
            border-radius: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.2s;
            margin: 0px 10px;
          }
          .customButton > button span {
            color: #524fed;
            font-size: 2rem;
          }
          .customButton > button:hover {
            background: #524fed;
          }
          .customButton > button:hover > span {
            color: #fff;
          }
        `}</style>
        <img src="/images/slider-bg.png" alt="" className="sliderImage" />
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: `.next`,
            prevEl: `.prev`,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1360: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {feedbackList.map((feedback, index) => {
            return (
              <SwiperSlide key={index}>
                <SingleSlider feedback={feedback} />
              </SwiperSlide>
            );
          })}

          <div className="customButton">
            <button className="prev">
              <span className="icon">
                <AiOutlineArrowLeft />
              </span>
            </button>
            <button className="next">
              <span className="icon">
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default GridSlider;
