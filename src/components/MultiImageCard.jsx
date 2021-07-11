import React from "react";
import ExpImage from "../Images/image";

const MultiImageCard = ({ title, pName1, pName2, pName3, pName4 }) => {
  return (
    <div className="home__category">
      <div className="home__cateName">
        <h2>{title}</h2>
      </div>
      <div className="image__container">
        <div>
          <img className="image__content" src={ExpImage.headset} alt="" />
          <p>{pName1}</p>
        </div>
        <div>
          <img className="image__content" src={ExpImage.headset} alt="" />
          <p>{pName2}</p>
        </div>
        <div>
          <img className="image__content" src={ExpImage.headset} alt="" />
          <p>{pName3}</p>
        </div>
        <div>
          <img className="image__content" src={ExpImage.headset} alt="" />
          <p>{pName4}</p>
        </div>
      </div>
      <small>See more</small>
    </div>
  );
};

export default MultiImageCard;
