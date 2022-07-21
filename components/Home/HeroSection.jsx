/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/HeroSection.module.css";
const HeroSection = () => {
  return (
    <>
      <div className={`${styles.heroSectionWrapper} paddingWrapper`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <h1 className="heading pb-4">
                The Ultimate Crypto Community Platform
              </h1>
              <p className="p_text mb-5">
                We are a community of Crypto Traders that come together to
                discuss and teach about the various aspects of Crypto Coins.
                Providing live trading signals that help you learn, buy and
                trade Crypto-Currency.
              </p>
              <div className="d-flex align-items-center pt-3">
                <button className="btn__primary">Slot Close Apply Now</button>
                <button className="btn__dark ms-4">Contact Us</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroSectionImg}>
                <img
                  src="/images/homepage-header-img.png"
                  alt="ashadulmridha hero section image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
