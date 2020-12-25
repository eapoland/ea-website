import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ content }) => {
  return (
    <div className="section-title d-flex flex-column justify-content-center">
      <h2>{content.text}</h2>
      <h1>{content.title}</h1>
    </div>
  );
};

export default SectionTitle;
