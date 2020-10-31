import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import "./DonatePage.scss";
import {
  Button,
  ButtonGroup,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import PaymentService from "../../utils/PaymentService";

const DonatePage = () => {
  const [paymentStep, setPaymentStep] = useState(1);
  const [paymentAmount, setPaymentAmount] = useState(50);

  const handleValueClick = (amount) => {
    setPaymentAmount(amount);
  };

  const handleValueInput = (e) => {
    setPaymentAmount(e.target.value);
  };

  const handleSubmit = () => {
    PaymentService.createPaymentIntent(paymentAmount).then((res) => {
      console.log(res);
    });
  };
  return (
    <Row>
      <Col>
        <ButtonGroup>
          <Button outline={paymentAmount !== 5} onClick={() => handleValueClick(5)}>
            5zł
          </Button>
          <Button outline={paymentAmount !== 10} onClick={() => handleValueClick(10)}>
            10zł
          </Button>
          <Button outline={paymentAmount !== 25} onClick={() => handleValueClick(25)}>
            25zł
          </Button>
          <Button outline={paymentAmount !== 50} onClick={() => handleValueClick(50)}>
            50zł
          </Button>
          <Button outline={paymentAmount !== 100} onClick={() => handleValueClick(100)}>
            100zł
          </Button>
        </ButtonGroup>
        <InputGroup>
          <Input value={paymentAmount} onChange={handleValueInput} type="number"></Input>
          <InputGroupAddon addonType="append">
            <InputGroupText>zł</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <Button onClick={handleSubmit}>Wpłać darowiznę</Button>
      </Col>
    </Row>
  );
};

export default DonatePage;
