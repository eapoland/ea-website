import React from "react";
import "./Workshops.scss";
import { Col } from "reactstrap";
import EAButton from "../Common/EAButton/EAButton";

const PromotedWorkshop = () => {
  return (
    <div className="promoted-workshop d-flex justify-content-end align-items-center">
      <Col sm={5}>
        <h4>􀋃 polecamy</h4>
        <h1>Wprowadzenie do Efektywnego Altruizmu</h1>
        <p>
          Poznaj naszą historię oraz ideę, z której ten ruch wyrasta. Omówmy szereg praktycznych zagadnień
          związanych z dobroczynnością. Przekonaj się, że każdy – także Ty – może zostać Efektywnym Altruistą.
        </p>
        <EAButton title="Czytaj więcej" />
      </Col>
    </div>
  );
};

export default PromotedWorkshop;
