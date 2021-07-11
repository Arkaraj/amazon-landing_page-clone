import React from "react";
import { Link } from "react-router-dom";

const NavBarCard = () => {
  return (
    <div className="header__card">
      <div className="header__card-heading">
        <button className="primaryButton">Sign In</button>
        <span style={{ marginTop: 10 }}>
          New customer? <Link className="header__link">Start here.</Link>
        </span>
      </div>
      <div>
        <hr />
      </div>
      <div className="header__card-body">
        <div className="card-left">
          <h2 className="header__title">Your Lists</h2>
          <Link className="header__link2">Create a List</Link>
          <Link className="header__link2">Find a List or Registry</Link>
          <Link className="header__link2">AmazonSmile Charity Lists</Link>
        </div>
        <div className="card-right">
          <h2 className="header__title">Your Account</h2>
          <Link className="header__link2">Create a List</Link>
          <Link className="header__link2">Find a List or Registry</Link>
          <Link className="header__link2">AmazonSmile Charity Lists</Link>
          <Link className="header__link2">AmazonSmile Charity Lists</Link>
          <Link className="header__link2">AmazonSmile Charity Lists</Link>
          <Link className="header__link2">AmazonSmile Charity Lists</Link>
          <Link className="header__link2">AmazonSmile Charity Lists</Link>
          <Link className="header__link2">AmazonSmile Charity Lists</Link>
          <Link className="header__link2">AmazonSmile Charity Lists</Link>
          <Link className="header__link2">AmazonSmile Charity Lists</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarCard;
