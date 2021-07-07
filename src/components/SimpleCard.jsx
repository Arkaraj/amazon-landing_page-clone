import React from "react";

const SimpleCard = ({ title }) => {
  return (
    <div className="home__category">
      <div className="home__cateName">
        <h2>{title}</h2>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        alt=""
      />
      <small>See more</small>
    </div>
  );
};

export default SimpleCard;
