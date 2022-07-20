/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";
import ProjectCard from "../ProjectCard";

const ProjectSlider = ({ pagination, peojectSliderData }) => {
  
    //  allowTouchMove={false}

  return (
    <>
      <Swiper pagination={pagination} modules={[Pagination]}>
        {peojectSliderData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <ProjectCard slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectSlider;
