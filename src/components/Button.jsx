import React from "react";

const Button = ({ title }) => {
  return (
    <div className="centerButton">
      <button className="primaryButton">{title}</button>
    </div>
  );
};

export default Button;
