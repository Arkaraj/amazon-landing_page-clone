import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ExpImage from "../Images/image";
import { BsSearch } from "react-icons/bs";
import Navbarext from "./Navbarext";
import NavBarCard from "./NavBarCard";
import { FiMapPin } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const exit = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", exit);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current.removeEventListener("mouseleave", exit);
    };
  }, [ref]);

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
          <select className="header__select">
            All
            <option>All Departments</option>
            <option>Arts &amp; Crafts</option>
            <option>Automotive</option>
            <option>Baby</option>
            <option>Beauty &amp; Personal Care</option>
            <option>Books</option>
            <option>Computers</option>
            <option>Digital Music</option>
            <option>Electronics</option>
            <option>Kindle Store</option>
            <option>Prime Video</option>
            <option>Women's Fashion</option>
            <option>Men's Fashion</option>
            <option>Girls' Fashion</option>
            <option>Boys' Fashion</option>
            <option>Deals</option>
            <option>Health &amp; Household</option>
            <option>Home &amp; Kitchen</option>
            <option>Industrial &amp; Scientific</option>
            <option>Luggage</option>
            <option>Movies &amp; TV</option>
            <option>Music, CDs &amp; Vinyl</option>
            <option>Pet Supplies</option>
            <option>Software</option>
            <option>Sports &amp; Outdoors</option>
            <option>Tools &amp; Home Improvement</option>
            <option>Toys &amp; Games</option>
            <option>Video Games</option>
          </select>
          <input className="header__searchInput" type="text" />
          <BsSearch className="hearder__searchIcon" />
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
            <div className="header__option" ref={ref}>
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
          <Link className="header_cart" to="/">
            <span className="header__basketCount">0</span>
            <span className="cart_heading">Cart</span>
          </Link>
        </div>
      </div>
      <Navbarext />
      {hovered ? <NavBarCard /> : null}
    </>
  );
};

export default NavBar;
