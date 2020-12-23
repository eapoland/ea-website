import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "./Workshops.scss";

const FaqItem = ({ item }) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Card className="faq-item">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <p className="faq-item__title">{item.title}</p>
            <Button color="primary" onClick={toggle}>
              Toggle
            </Button>
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
