import React from "react";
import { Link } from "react-router-dom";
import ExpImage from "../Images/image";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={ExpImage.logo} alt="Amazon Logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <FaSearch className="hearder__searchIcon" />
      </div>

      <div className="header__nav">
        {/* to stop the redirect the user to sign inpage after sign out*/}
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLine1">Hello, Sign In</span>
            <span className="header__optionLine2">Accounts & Lists</span>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLine1">Returns</span>
            <span className="header__optionLine2">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>
        <Link className="header_cart" to="/">
          <span className="header__basketCount">0</span>
          <span className="cart_heading">Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
