/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectCard = ({ slider }) => {

  const router = useRouter();
  console.log(router);
  return (
    <>
      <div className="CardWrapper">
        <style>{`
            .CardWrapper{
                padding: 30px 0px;
            }
            .projectImgWrapper{
                box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            }
            .projectImgWrapper img{
                height: 490px;
                width: 100%;
                object-fit: cover;
            }
            .projectContent{
                margin: 10px 20px;
            }
            .projectContent h1 {
                font-size: 2.2rem;
                color: #000000;
            }
            .projectContent p {
                font-size: 1.6rem;
                color: #000000;
                margin: 20px 0px 40px 0px;
            }
        `}</style>
        <div className="row">
          <div className="col-lg-7">
            <div className="projectImgWrapper">
              <img src={slider?.img} alt="peoject image" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="projectContent">
              <h1 className="projectHeader heading">{slider.name}</h1>
              <p className="projectDetails p_text">{slider.desc}</p>
              <Link href={`/project/${slider.id}`}>
                <button className="btn__primary mt-3">See Full Case</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
