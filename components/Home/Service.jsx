import React from 'react';
import SectionHeader from '../SectionHeader';
import ServiceCard from '../ServiceCard';

const Service = () => {

  const data = {
    section_indicator: "Service",
    heading: "What Service We Offer",
  };

  const serviceData = [
    {
      name: "Mobile App Development",
      desc: "Decode Lab specializes in developing multiplatform mobile apps for iPhone, iPad, Android. Along with developing publicly available apps via Apple App Store or Google Play, we can also develop custom business to business (b2b) apps addressing your specific business process",
      list: [
        "Establish where mobile fits into your business",
        "Enterprise solution or Consumer application",
        "Identify the opportunity",
        "Define the customer journey",
        "Define mobile road map",
      ],
    },
    {
      name: "Website Design & Development",
      desc: "Decode Lab web application development practice addresses a wide range of business needs. Whether it’s a content management system or a web-based data interface, our solutions demonstrate all the hallmarks of competence. Our web applications address the specific business requirements, whether it’s a fortune 500 company or a small start-up.",
      list: [
        "Works beautiful high resolution displays",
        "Layout Builder with dozens of easy to use elements",
        "Content Importer, to easily setup your site",
        "Predefined Color schemes that can easily be edited.",
        "Lots of beautiful interactive elements",
      ],
    },
    {
      name: "E-commerce Website Devlopement",
      desc: "You don’t need to have any technical or design experience to run a online store. We are here to help you. Simply asked your requirement & we are here to grow your business. Designed a stylish ecommerce website, easily customize your online store, add products, and you’re pretty much ready to accept payments.",
      list: [
        "Unique Design",
        "Unlimited Categories",
        "Unlimited Products",
        "Unlimited Manufacturers",
        "Order Management",
      ],
    },
    {
      name: "Software Development",
      desc: "Our aim is to empower clients with IT solutions, delivering products to clients through software applications that run on heterogeneous platforms, specifically designed to help companies meet today’s business challenges.Our developers have an average of five years development experience coding",
      list: [
        "Research and selection of the optimal technologies",
        "Creation of prototypes and demo versions",
        "System planning",
        "System implementation",
        "Product support",
      ],
    },
  ];


    return (
      <div className="paddingWrapper" id="service">
        <style jsx>{`
          .serviceWrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 50px;
          }
          @media screen and (max-width: 991px) {
            .serviceWrapper {
              grid-template-columns: 1fr;
              grid-gap: 30px;
            }
          }
        `}</style>
        <SectionHeader data={data} />

        <div className="container">
          <div className="serviceWrapper">
            {serviceData.map((cardData, index) => (
              <div key={index} className="service">
                <ServiceCard cardData={cardData} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Service;