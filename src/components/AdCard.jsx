import React from "react";
import ExpImage from "../Images/image";

const AdCard = () => {
  return (
    <div className="adver-container">
      <div className="adver-content">
        <h2>Sign in for the best experience</h2>
        <button className="primaryButton">Sign in securely</button>
      </div>
      <img src={ExpImage.ad} alt="Amazon Ad" className="adver-image" />
    </div>
  );
};

export default AdCard;
