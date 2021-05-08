import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import Button from 'reactstrap/lib/Button'
import './EAButton.scss'

const EAButton = ({ title, target, customClass, onClick }) => (
  <NavHashLink to={`${target}`}>
    <Button
      className={`ea-button ${customClass}`}
      onClick={onClick}
      // style={
      //   // size
      //   //   ? {
      //   //       width: `${size}px`,
      //   //     }
      //   //   : {
      //   //       width: "120px",
      //   //     }
      // }
    >
      {title}
    </Button>
  </NavHashLink>
)

export default EAButton
