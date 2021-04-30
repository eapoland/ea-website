import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import './DonatePage.scss'
import {
  Button,
  ButtonGroup,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap'
import PaymentService from '../../utils/PaymentService'

const DonatePage = () => {
  const [paymentStep, setPaymentStep] = useState(1)
  const [paymentAmount, setPaymentAmount] = useState(50)
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const handleValueClick = amount => {
    setPaymentAmount(amount)
  }

  const handleValueInput = e => {
    setPaymentAmount(e.target.value)
  }

  const handleSubmit = () => {
    PaymentService.createPaymentIntent(paymentAmount).then(res => {
      setClientSecret(res.data.clientSecret)
      setPaymentStep(2)
    })
  }

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }
  const handleChange = async event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }
  const handlePaymentSubmit = async ev => {
    ev.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
    }
  }
  return (
    <Row>
      {paymentStep === 1 && (
        <Col>
          <ButtonGroup>
            <Button
              outline={paymentAmount !== 5}
              onClick={() => handleValueClick(5)}
            >
              5zł
            </Button>
            <Button
              outline={paymentAmount !== 10}
              onClick={() => handleValueClick(10)}
            >
              10zł
            </Button>
            <Button
              outline={paymentAmount !== 25}
              onClick={() => handleValueClick(25)}
            >
              25zł
            </Button>
            <Button
              outline={paymentAmount !== 50}
              onClick={() => handleValueClick(50)}
            >
              50zł
            </Button>
            <Button
              outline={paymentAmount !== 100}
              onClick={() => handleValueClick(100)}
            >
              100zł
            </Button>
          </ButtonGroup>
          <InputGroup>
            <Input
              value={paymentAmount}
              onChange={handleValueInput}
              type="number"
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>zł</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Button onClick={handleSubmit}>Wpłać darowiznę</Button>
        </Col>
      )}
      {paymentStep === 2 && (
        <Col>
          <form id="payment-form" onSubmit={handlePaymentSubmit}>
            <CardElement
              id="card-element"
              options={cardStyle}
              onChange={handleChange}
            />
            <button
              disabled={processing || disabled || succeeded}
              id="submit"
              type="submit"
            >
              <span id="button-text">
                {processing ? <div className="spinner" id="spinner" /> : 'Pay'}
              </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
              <div className="card-error" role="alert">
                {error}
              </div>
            )}
            {/* Show a success message upon completion */}
            <p
              className={succeeded ? 'result-message' : 'result-message hidden'}
            >
              Payment succeeded, see the result in your
              <a href="https://dashboard.stripe.com/test/payments">
                {' '}
                Stripe dashboard.
              </a>{' '}
              Refresh the page to pay again.
            </p>
          </form>
        </Col>
      )}
    </Row>
  )
}

export default DonatePage
