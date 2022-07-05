/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ListItem from '../ListItem';
import styles from '../../styles/AboutUs.module.css';

const Aboutus = () => {
    return (
      <>
        <div className="container paddingWrapper">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.aboutusContent}>
                <h1 className="heading">
                  Is this group the right fit for you?
                </h1>
                <p className="p_text">
                  Cryptocurrency allows to replace & change your current income.
                  We will show you the steps to investing in the safest and most
                  profitable way so you won’t make the same rookie mistakes as
                  all other new investors. Our guidance has helped over 3,000
                  Members gain an extra income stream into their account.
                </p>
                <ul className={styles.aboutusList}>
                  <ListItem
                    content={`Constantly updating you on the market & it's best moves`}
                  />
                  <ListItem
                    content={`All these years of experience and lessons all on the top of your fingertips`}
                  />
                  <ListItem
                    content={`Hundreds of positive testimonials of our clients who are in profit`}
                  />
                </ul>
                <button className="btn__primary">
                  Slot Closed - Apply Now
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="aboutusImage">
                <img
                  src="/images/about.png"
                  alt="about me"
                  className="img-resp"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Aboutus;