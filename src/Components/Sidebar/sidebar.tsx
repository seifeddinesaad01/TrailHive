import React from "react";
import { links } from "../NavBar/Navbar";
import { ImCross } from "react-icons/im";
interface IProps {
    setShowSidebar:any;
    showSidebar:any;
}
const sidebar = ({setShowSidebar,showSidebar}:IProps) => {
  return (
    <div className={`${showSidebar ? "sidebar__container" : "hidden"}`}>
      <div className="top">
        <div className="logo">
          <h1>TrailHive</h1>
        </div>
        <ImCross cursor='pointer' onClick={() => setShowSidebar(false)}/>
      </div>
      <div className="bottom">
        <div className="links">
          <ul>
            {links.map((link, index) => {
              return (
                <a href="#" key={index}>
                  <li>{link}</li>
                </a>
              );
            })}
          </ul>
          </div>
          <div className="buttons">
              <button className="contact__btn">Contact Us</button>
              <button className="download__btn">Download the app</button>
            </div>
        
      </div>
    </div>
  );
};

export default sidebar;
