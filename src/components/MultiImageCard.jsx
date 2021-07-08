import React from "react";

const MultiImageCard = ({ title }) => {
  return (
    <div className="home__category">
      <div className="home__cateName">
        <h2>{title}</h2>
      </div>
      <div className="image__container">
        <div>
          <img
            className="image__content"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            alt=""
          />
          <p>stuff</p>
        </div>
        <div>
          <img
            className="image__content"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            alt=""
          />
          <p>stuff</p>
        </div>
        <div>
          <img
            className="image__content"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            alt=""
          />
          <p>stuff</p>
        </div>
        <div>
          <img
            className="image__content"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            alt=""
          />
          <p>stuff</p>
        </div>
      </div>
      <small>See more</small>
    </div>
  );
};

export default MultiImageCard;
