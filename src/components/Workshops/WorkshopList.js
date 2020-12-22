import React from "react";
import Row from "reactstrap/lib/Row";
import WorkshopCard from "./WorkshopCard";
import "./Workshops.scss";

const WorkshopList = () => {
  return (
    <Row className="justify-content-center workshop-list">
      <WorkshopCard />
      <WorkshopCard />
      <WorkshopCard />
      <WorkshopCard />
    </Row>
  );
};

export default WorkshopList;
