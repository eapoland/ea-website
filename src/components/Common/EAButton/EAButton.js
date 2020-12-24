import React from "react";
import Button from "reactstrap/lib/Button";
import "./EAButton.scss";

const EAButton = ({ title }) => {
  return <Button className="ea-button">{title}</Button>;
};

export default EAButton;
