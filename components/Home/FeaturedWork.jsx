import React from 'react';
import SectionHeader from '../SectionHeader';
import ProjectSlider from '../Slider/ProjectSlider';

const FeaturedWork = () => {

      const data = {
        section_indicator: "Project",
        heading: "Our Featured Project",
      };

       const pagination = {
         el: ".my-custom-pagination-div",
         clickable: true,
         renderBullet: function (index, className) {
            return `<div class=${className}> ${index + 1} </div>`;
         },
       };

         const peojectSliderData = [
           {
             id: 1,
             name: "ARCO",
             desc: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations",
             img: "/images/projects/arco-c.png",
           },
           {
             id: 2,
             name: "MOODJA",
             desc: "F5 Studio web development agency created new design, developed new website to achieve business goals of Moodja.",
             img: "/images/projects/moodja.png",
           },
           {
             id: 3,
             name: "DOYOULIKE SENIOR",
             desc: "Doulike Senior is amazing iOS dating app for senior citizens.The challenge was to design an iOS application that creates the right mood and meet requirements of design for elderly. We did it with the light colour scheme, a simple user interface and special UX solutions.",
             img: "/images/projects/doulike.png",
           },
           {
             id: 4,
             name: "FORTITUDE FARMS",
             desc: "Fortitude Farms is a company that provides equine-assisted ecotherapy programmes. The company focuses on improving the mental well-being of military personnel showing post-traumatic syndrome, using of horses. So, the owner wanted us to create a logo that effectively communicates the concept of their company. Our lead designer worked on the logo. The customer was completely satisfied with the result.",
             img: "/images/projects/fortitude.png",
           },
           {
             id: 5,
             name: "BODYSHOP TOTAL",
             desc: "Total Collision & PDR is a auto bodyshop that was founded on ethics, moral and values. That is why we focused on needs of customers of the auto bodyshop. To create UI/UX design of the website we used Value Proposition Canvas approach. Our developers improved all elements that allows visitors use website services without headache. In this way we created the website that helps business owners to achieve marketing goals.",
             img: "/images/projects/totalcar.jpg",
           },
         ];


       

    return (
      <div className="paddingWrapper" id='project'>
        <style>{`
            .paginationWrapper{
                // margin-right: 15px;
                margin-top: 25px;
            }
            .paginationWrapper > .my-custom-pagination-div{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .swiper-pagination-bullet{
                background-color: transparent !important;
                font-size: 20px;
                color: #000 !important;
                margin: 10px 0px !important;
                opacity: 0.5!important;
            }
            
            .swiper-pagination-bullet.swiper-pagination-bullet-active{
                margin-left: 15px !important;
                opacity: 1!important;
            }

            
        `}</style>
        <SectionHeader data={data} />
        <div className="container">
          <div className="featuredWorkWrapper">
            <div className="row">
              <div className="col-1">
                <div className="paginationWrapper">
                  <div className="my-custom-pagination-div"></div>
                </div>
              </div>
              <div className="col-11">
                <ProjectSlider
                  peojectSliderData={peojectSliderData}
                  pagination={pagination}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FeaturedWork;