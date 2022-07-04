import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import styles from "../styles/TopNavbar.module.css";

const TopNavBar = () => {
  return (
    <>
      <div className={`${styles.topNavBar} bg-light`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className={styles.leftContactBar}>
                  <ul>
                    <li>
                      <div className="d-flex justify-content-start me-3 align-items-center">
                        <MdEmail />
                        <p className="mb-0 pb-0 ps-2">
                          ashadulmridhaprog@gmail.com
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-start me-3 align-items-center">
                        <MdCall />
                        <p className="mb-0 pb-0 ps-2">01718069307</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles.RightContactBar}>
                  <ul>
                    <li>
                      {" "}
                      <GoMarkGithub />{" "}
                    </li>
                    <li>
                      {" "}
                      <FaLinkedin />{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
