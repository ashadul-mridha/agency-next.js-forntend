import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
      <>
        <div className="footerWrapper">
          <style jsx>{`
            .footerLeftSide .logo {
              text-decoration: none;
              font-family: "Inter", sans-serif;
              font-weight: 600;
              color: #141432;
              font-size: 26px;
              margin-bottom: 30px;
              display: block;
            }
            .footerLeftSide .p_text {
              color: #141432;
              font-size: 16px;
              width: 70%;
            }
            .social .title {
              color: #141432;
              font-size: 20px;
              margin-top: 30px;
            }
            .socialList {
              padding-left: 0px;
              list-style: none;
              display: flex;
              align-items: center;
            }
            .socialList li {
              margin-right: 10px;
            }
            .socialList li a {
              margin-bottom: 10px;
              color: #524fed;
              font-size: 30px;
              text-decoration: none;
            }
            .socialList li a:hover {
              color: #00e8da;
            }
            .quickLink .title {
              color: #141432;
              font-size: 20px;
              margin-bottom: 30px;
            }
            .quickLinkList {
              padding-left: 0px;
              list-style: none;
            }
            .quickLinkList li {
              margin-bottom: 10px;
            }
            .quickLinkList li a {
              margin-bottom: 10px;
              color: #141432;
              font-size: 16px;
              text-decoration: none;
            }
            .quickLinkList li a:hover {
              color: #524fed;
            }
            .ProjectOrder .title {
              color: #141432;
              font-size: 20px;
              margin-bottom: 30px;
            }
            .ProjectOrderList {
              padding-left: 0px;
              list-style: none;
            }
            .ProjectOrderList li {
              margin-bottom: 10px;
            }
            .ProjectOrderList li a {
              margin-bottom: 10px;
              color: #141432;
              font-size: 16px;
              text-decoration: none;
            }
            .ProjectOrderList li a:hover {
              color: #524fed;
            }
          `}</style>
          <div className="container paddingWrapper">
            <div className="row gy-5">
              <div className="col-lg-6 col-12">
                <div className="footerLeftSide">
                  <a href="#" className="logo">
                    Ashadul
                  </a>
                  <p className="p_text">
                    Community built around trading Cryptocurrency where we teach
                    people and provide them trading signals when to trade.
                  </p>

                  <div className="social">
                    <h5 className="title p_text">Find Us</h5>
                    <ul className="socialList">
                      <li>
                        <a href="#">
                          <FaFacebookSquare />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaInstagramSquare />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="quickLink">
                  <h5 className="title p_text">QUICK LINKS</h5>
                  <ul className="quickLinkList">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Review</a>
                    </li>
                    <li>
                      <a href="#">Testmonial</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="ProjectOrder">
                  <h5 className="title">Order</h5>
                  <ul className="ProjectOrderList">
                    <li>
                      <a href="#">Ecommerce Website Development</a>
                    </li>
                    <li>
                      <a href="#">Frontend Development</a>
                    </li>
                    <li>
                      <a href="#">Landing Page Design</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Footer;