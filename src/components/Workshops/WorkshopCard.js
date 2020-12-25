import React from "react";
import EAButton from "../Common/EAButton/EAButton";
import "./Workshops.scss";

const WorkshopCard = ({ workshopData }) => {
  return (
    <div className="workshop-card d-flex flex-column">
      <h1>{workshopData.title}</h1>
      <p>{workshopData.summary}</p>
      <EAButton title="Czytaj więcej" target={workshopData.id} />
    </div>
  );
};

export default WorkshopCard;
