import React from "react";
import { Link } from "react-router-dom";
import ExpImage from "../Images/image";
import { FaSearch } from "react-icons/fa";
import Navbarext from "./Navbarext";
import { FiMapPin } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={ExpImage.logo} alt="Amazon Logo" />
        </Link>
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLine1">Deliver to</span>
            <span className="header__optionLine2">
              <FiMapPin style={{ marginLeft: -12 }} /> India
            </span>
          </div>
        </Link>

        <div className="header__search">
          <select>
            <option>All</option>
            <option>All Department</option>
          </select>
          <input className="header__searchInput" type="text" />
          <FaSearch className="hearder__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to="/">
            <div className="header__option">
              <span className="header__optionLine2">
                <div className="flag__icon">
                  <div className="header__flag"></div>
                  <IoMdArrowDropdown />
                </div>
              </span>
            </div>
          </Link>
          <Link to="/">
            <div className="header__option">
              <span className="header__optionLine1">Hello, Sign In</span>
              <span className="header__optionLine2">
                Accounts & Lists <IoMdArrowDropdown />
              </span>
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
      <Navbarext />
    </>
  );
};

export default NavBar;
