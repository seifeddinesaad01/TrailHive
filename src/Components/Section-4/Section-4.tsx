import React from "react";
import natureImg from "../../assets/nature1.jpg";
const SectionFour = () => {
  return (
    <div className="section__four" id="Blog">
      <div className="section__title">
        <p>
          Find new trails to export and <br /> adventure to embark on.
        </p>
      </div>
      <img src={natureImg} alt="" />
    </div>
  );
};

export default SectionFour;
