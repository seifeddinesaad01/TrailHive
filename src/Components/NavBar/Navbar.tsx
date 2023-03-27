import React, { useState } from "react";
import useWindow from "../../utils/useWindowSize";
import { BiMenuAltRight } from "react-icons/bi";
import Sidebar from "../Sidebar/sidebar";
export const links = ["Feature", "Pricing", "Blog", "About Us"];

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { width } = useWindow();
  let content: any;
  if (width) {
    width < 900
      ? (content = (
          <BiMenuAltRight
            onClick={() => setShowSidebar(!showSidebar)}
            fontSize="2rem"
            cursor='pointer'
          />
        ))
      : (content = (
          <div className="nav__options">
            <ul>
              {links.map((link, index) => {
                return (
                  <a href="#" key={index}>
                    <li>{link}</li>
                  </a>
                );
              })}
            </ul>
            <div className="buttons">
              <button className="contact__btn">Contact Us</button>
              <button className="download__btn">Download the app</button>
            </div>
          </div>
        ));
  }
  return (
    <>
      <div className="navbar__container">
        <div className="logo">
          <h1>TrailHive</h1>
        </div>
        {content}
      </div>
        <Sidebar setShowSidebar={setShowSidebar} showSidebar ={showSidebar}/>
      
      
    </>
  );
};

export default Navbar;
