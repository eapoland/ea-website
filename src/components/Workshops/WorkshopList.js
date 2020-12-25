import React from "react";
import Row from "reactstrap/lib/Row";
import WorkshopCard from "./WorkshopCard";
import "./Workshops.scss";
import workshops from "../../content/workshops.json";

const WorkshopList = () => {
  return (
    <Row className="justify-content-center workshop-list">
      {workshops.map(
        (workshop) => !workshop.recommended && <WorkshopCard workshopData={workshop} key={workshop.id} />
      )}
    </Row>
  );
};

export default WorkshopList;
