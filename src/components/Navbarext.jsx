import React from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";

const Navbarext = () => {
  return (
    <div className="navbar-ext" id="top">
      <div className="navbar-menus">
        <Link to="/" className="navbar-all">
          <RiMenuLine
            style={{ fontWeight: "bolder", fontSize: 16, marginBottom: 3 }}
          />{" "}
          All
        </Link>
        <Link to="/">Today's Deals</Link>
        <Link to="/">Today's Deals</Link>
        <Link to="/">Customer Service</Link>
        <Link to="/">Gift Cards</Link>
        <Link to="/">Registry</Link>
        <Link to="/">Sell</Link>
      </div>
      <div>
        <Link to="/">Amazon's response to COVID-19</Link>
      </div>
    </div>
  );
};

export default Navbarext;
