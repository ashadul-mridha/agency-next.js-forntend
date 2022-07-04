/* eslint-disable @next/next/no-img-element */
import { FaStar } from "react-icons/fa";

const SingleSlider = ({ feedback }) => {
  return (
    <>
      <div className="singleSliderWrapper">
        <style jsx>{`
          .singleSliderWrapper {
            background: #fff;
            box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
            border-radius: 12px;
            padding: 30px;
            margin-right: 10px;
            height: 320px;
          }
          .clientImage {
            margin-right: 15px;
          }
          .clientImage img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
          }
          .clientName {
            font-family: "Inter", sans-serif;
            font-size: 18px;
            font-weight: 500;
            color: #141432;
          }
          .clientLocation {
            font-family: "Inter", sans-serif;
            font-size: 12px;
            font-weight: 400;
            color: #141432;
          }
          .clientFeedback {
            margin: 30px 0px 20px 0px;
          }
          .clientFeedback p {
            font-family: "Inter", sans-serif;
            font-size: 16px;
            font-weight: 400;
            color: #141432;
            margin: 10px 0px;
            text-align: start;
          }
          .socialSection {
            margin-right: 0px;
          }
          .feedback {
            font-size: 16px;
            font-weight: 700;
            color: #feba2a;
          }
          .feedback div {
            margin: 0px 3px;
          }
        `}</style>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column justify-content-between">
                <div className="clientSection d-flex justify-content-start">
                  <div className="clientImage">
                    <img
                      src="/images/testmonialUser.jfif"
                      alt="testmonial feedback user of ashadul mridha"
                      className="img-fluid"
                    />
                  </div>
                  <div className="clientDetails">
                    <h6 className="clientName">{feedback?.username}</h6>
                    <p className="clientLocation">{feedback?.location}</p>
                  </div>
                </div>

                <div className="clientFeedback">
                  <p>{`“${feedback?.says.substring(0, 140)}....”`}</p>
                </div>

                <div className="socialSection">
                  <div className="feedback d-flex justify-content-end">
                    <div>
                      <FaStar />
                    </div>
                    <div>
                      <FaStar />
                    </div>
                    <div>
                      <FaStar />
                    </div>
                    <div>
                      <FaStar />
                    </div>
                    <div>
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSlider;
