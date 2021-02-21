import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({text, title}) => {
  return (
    <div className="section-title d-flex flex-column justify-content-center">
      <h5 className="text-center">{text}</h5>
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default SectionTitle;
