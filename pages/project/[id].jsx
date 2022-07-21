import React from 'react';
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Footer from '../../components/Footer';
import ProjectHeader from '../../components/ProjectHeader';
const FeaturedWork = dynamic(() => import("../../components/Home/FeaturedWork"), {
  ssr: false,
});

const SingleProject = () => {
    const router = useRouter();

    const { id } = router.query;

    console.log(id);
    return (
      <>
        <div className="container paddingWrapper">
          <style>{`
            .projectDetailsContent .heading{
                font-size: 3rem;
                margin: 10px 0px;
            }
            .projectDetailsContent .secondaryHeading{
                font-family: "Poppins", sans-serif;
                font-weight: 500;
                font-size: 2rem;
                margin: 10px 0px;
            }
            .projectDetailsContent .p_text{
                font-size: 1.6rem;
            }
            .projectDetailsCotact .heading{
                font-size: 2rem;
                margin: 10px 0px;
            }
            .projectDetailsCotact input, .textarea{
                font-size: 1.6rem;
                margin: 5px 0px;
                padding: 5px 10px;
            }
            .feature-list{
                list-style-type: none;
                padding-left: 0px;
                margin-top: 20px;
            }
            .feature-list .feature-content{
                font-family: "Inter", sans-serif;
                font-weight: 400;
                font-size: 1.6rem;
                color: #222;
            }
            
            
            .projectDetailsCotact .btn__primary {
                background: #524fed;
                border: 2px solid #524fed;
                padding: 1rem 4rem;
                color: #fff;
                font-size: 1.6rem;
                font-weight: 600;
                border-radius: 1rem;
                font-family: "Inter", sans-serif;
            }
            .projectDetailsCotact.btn__primary:hover {
                background: none;
                color: #524fed;
            }
        `}</style>
          <div className="row">
            <div className="col-lg-8 projectDetailsContent">
              <h2 className="heading">
                BILLING – CRM, ACCOUNTING AND BILLING SOFTWARE
              </h2>
              <p className="p_text">
                The features you want, the simplicity you need! Beautifully
                designed for best User Interface & User Experience. The software
                That Works For YOUR Business! Get growing – with affordable,
                scalable business software. Find innovative ways to manage
                customers data, communicate with customer, know your business
                cashflow, net worth, send invoice to customer Hassle-free with
                single click payment reminder, payment confirmations & get paid
                online integrated with payment gateways.
              </p>
              <h4 className="secondaryHeading mt-5">
                Full Featured Invoicing Software
              </h4>
              <p className="p_text">
                The easiest and most complete invoicing system. iBilling Invoice
                is a simple, easy, intuitive invoicing software designed to help
                you craft the perfect invoice, track payments and get paid
                faster online.
              </p>
              <h4 className="secondaryHeading mt-5">Software Features</h4>
              <ul className="feature-list">
                <li className="feature-item">
                  <p className="feature-content">
                    1. Customize invoices including logo, notes and more
                  </p>
                  <p className="feature-content">
                    2. Send Invoice directly to your Customer from the portal
                  </p>
                  <p className="feature-content">
                    3. Notify to your Customer When invoice paid, due, Payment
                    Reminder
                  </p>
                  <p className="feature-content">
                    4. Access from Anywhere with Unique Invoice URL,
                    authenticate via token
                  </p>
                  <p className="feature-content">
                    5. PDF Invoice, Customer can download PDF Invoice with
                    Single Click
                  </p>
                  <p className="feature-content">
                    6. Printer Friendly, Separate view for Printer Friendly
                    version
                  </p>
                  <p className="feature-content">
                    7. Get Paid Online, Integrate with Payment Gateway’s
                  </p>
                  <p className="feature-content">8. Set Goal for Net Worth</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 projectDetailsCotact">
              <h4 className="heading">Contact Us for This Project :</h4>
              <form action="">
                <div className="row my-2">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Contact"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-12">
                    <textarea
                      className="form-control textarea"
                      placeholder="Message"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <button className="btn__primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default SingleProject;


//sent layout to app.js
SingleProject.getLayout = function getLayout(page) {
  return (
    <>
      <ProjectHeader />
      {page}
      <FeaturedWork />
      <Footer />
    </>
  );
};