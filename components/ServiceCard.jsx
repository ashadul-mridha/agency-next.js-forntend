/* eslint-disable @next/next/no-img-element */
import ListItem from "./ListItem";

const ServiceCard = ({ cardData }) => {
  return (
    <>
      <div className="serviceCardWrapper">
        <style jsx>{`
          .serviceCardWrapper {
            border-radius: 50px 50px 50px 50px;
            background: #fcfcfc;
            box-shadow: 20px 20px 98px #bdbdbd, -20px -20px 98px #ffffff;
            padding: 40px;
          }
          .serviceCardWrapper h1 {
            font-size: 20px;
            color: #000000;
          }
          .serviceCardWrapper p {
            font-size: 16px;
            color: #000000;
            margin: 20px 0px 40px 0px;
          }
        `}</style>
        {cardData.name && <h1 className="heading">{cardData.name}</h1>}

        {cardData.desc && (
          <p className="p_text">{`${cardData.desc.substring(0, 265)}...`}</p>
        )}

        {cardData.list && (
          <div className="serviceList">
            {cardData.list.map((listData, index) => (
              <ListItem key={index} content={listData} />
            ))}
            {/* <ListItem
              content={`Every MUST HAVE coin to add to your portfolio`}
            />
            <ListItem content={`Daily updates on the Coins that I Recommend`} />
            <ListItem content={`Two Fully Interactive Q&A's a Week`} />
            <ListItem content={`Regular new coin suggestion`} />
            <ListItem content={`Long Term Investment Coins & Strategy`} />
            <ListItem content={`Mid Term Investment Coins & Strategy`} /> */}
          </div>
        )}

        {/* <div className="serviceList">
          <ListItem content={`Every MUST HAVE coin to add to your portfolio`} />
          <ListItem content={`Daily updates on the Coins that I Recommend`} />
          <ListItem content={`Two Fully Interactive Q&A's a Week`} />
          <ListItem content={`Regular new coin suggestion`} />
          <ListItem content={`Long Term Investment Coins & Strategy`} />
          <ListItem content={`Mid Term Investment Coins & Strategy`} />
        </div> */}
      </div>
    </>
  );
};

export default ServiceCard;
