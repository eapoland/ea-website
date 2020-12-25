import React from "react";
import { NavHashLink } from "react-router-hash-link";
import Button from "reactstrap/lib/Button";
import "./EAButton.scss";

const EAButton = ({ title, target, size }) => {
  return (
    <NavHashLink to={`workshops/${target}`}>
      <Button
        className="ea-button"
        style={
          size
            ? {
                width: `${size}px`,
              }
            : {
                width: "120px",
              }
        }
      >
        {title}
      </Button>
    </NavHashLink>
  );
};

export default EAButton;
