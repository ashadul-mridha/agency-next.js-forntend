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
              font-size: 2.6rem;
              margin-bottom: 3rem;
              display: block;
            }
            .footerLeftSide .p_text {
              color: #141432;
              font-size: 1.6rem;
              width: 70%;
            }
            .social .title {
              color: #141432;
              font-size: 2rem;
              margin-top: 3rem;
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
              font-size: 3rem;
              text-decoration: none;
            }
            .socialList li a:hover {
              color: #00e8da;
            }
            .quickLink .title {
              color: #141432;
              font-size: 2rem;
              margin-bottom: 3rem;
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
              font-size: 1.6rem;
              text-decoration: none;
            }
            .quickLinkList li a:hover {
              color: #524fed;
            }
            .ProjectOrder .title {
              color: #141432;
              font-size: 2rem;
              margin-bottom: 3rem;
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
              font-size: 1.6rem;
              text-decoration: none;
            }
            .ProjectOrderList li a:hover {
              color: #524fed;
            }
          `}</style>
          <div className="container paddingWrapper">
            <div className="row">
              <div className="col-lg-6">
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
              <div className="col-lg-3">
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
              <div className="col-lg-3">
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