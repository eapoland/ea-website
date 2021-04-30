import React from 'react'
import './styles.scss'
import { Col, Row } from 'reactstrap'
import Slide from 'react-reveal/Slide'

const QuoteSection = () => (
  <Row className="quote-section mx-auto">
    <Col className="quote-section__column">
      <Slide left cascade>
        <div>
          <h3>
            "Ruch zwany Efektywnym Altruizmem zdobywa coraz większą popularność.
            To ważne, bo łączy ze sobą serce i rozum."
          </h3>
          <p className="quote-section__author">- Peter Singer</p>
        </div>
      </Slide>
    </Col>
  </Row>
)

export default QuoteSection
