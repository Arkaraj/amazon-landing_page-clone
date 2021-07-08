import React from "react";
import ExpImage from "../Images/image";

const MultiImageCard = ({ title }) => {
  return (
    <div className="home__category">
      <div className="home__cateName">
        <h2>{title}</h2>
      </div>
      <div className="image__container">
        <div>
          <img className="image__content" src={ExpImage.headset} alt="" />
          <p>HeadSet</p>
        </div>
        <div>
          <img className="image__content" src={ExpImage.headset} alt="" />
          <p>HeadSet</p>
        </div>
        <div>
          <img className="image__content" src={ExpImage.headset} alt="" />
          <p>HeadSet</p>
        </div>
        <div>
          <img className="image__content" src={ExpImage.headset} alt="" />
          <p>HeadSet</p>
        </div>
      </div>
      <small>See more</small>
    </div>
  );
};

export default MultiImageCard;
