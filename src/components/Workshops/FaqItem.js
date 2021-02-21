import React, { useState } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import "./Workshops.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const FaqItem = ({ item }) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Card className="faq-item">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="faq-item__title">{item.title}</h4>
            <button onClick={toggle} className="faq-item__toggle">
              <FontAwesomeIcon icon={collapse ? faChevronLeft : faChevronDown} />
            </button>
          </div>

          <Collapse isOpen={collapse}>
            <div className="faq-item__content">
              <p>{item.content}</p>
            </div>
          </Collapse>
        </CardBody>
      </Card>
    </div>
  );
};

export default FaqItem;
