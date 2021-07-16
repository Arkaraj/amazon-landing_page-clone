import React from "react";
// import ExpImage from "../Images/image"; ExpImage.oculus

const SimpleCard = ({ title, imgPath, tagline }) => {
  // link: https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg

  return (
    <div className="home__category">
      <div className="home__cateName">
        <h2>{title}</h2>
      </div>
      <img src={imgPath ? `Images/${imgPath}` : "./Images/oculus.jpg"} alt="" />
      <small>{tagline ? tagline : "Shop more"}</small>
    </div>
  );
};

export default SimpleCard;
