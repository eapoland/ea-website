import React from "react";
import "./Workshops.scss";
import { Col } from "reactstrap";
import EAButton from "../Common/EAButton/EAButton";
import workshops from "../../content/workshops.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PromotedWorkshop = () => {
  return workshops
    .filter((workshop) => workshop.recommended)
    .map((item) => (
      <div className="promoted-workshop d-flex justify-content-end align-items-center" key={item.id}>
        <Col sm={5}>
          <h4>
            <FontAwesomeIcon icon={faStar} />
            &nbsp;&nbsp;polecamy
          </h4>
          <h1>{item.title}</h1>
          <p>{item.shortSummary}</p>
          <EAButton title="Czytaj więcej" target={item.id} />
        </Col>
      </div>
    ));
};

export default PromotedWorkshop;
