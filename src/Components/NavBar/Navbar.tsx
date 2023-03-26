import React from "react";
import useWindow from "../../utils/useWindowSize";
import {BiMenuAltRight} from 'react-icons/bi';
const links = ["Feature", "Pricing", "Blog", "About Us"];

const Navbar = () => {
    const {width} = useWindow();
    console.log(width,"width")
  return (
    <div className="navbar__container">
      <div className="logo">
        <h1>TrailHive</h1>
      </div>
      <div className="nav__options">
        <ul>
          {links.map((link, index) => {
            return <li key={index}>{link}</li>;
          })}
        </ul>
        <div className="buttons">
            <button className="contact__btn">Contact Us</button>
            <button className="download__btn">Download the app</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
