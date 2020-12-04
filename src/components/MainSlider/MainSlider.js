import React from "react";
import Slider from "react-slick";
import { Row, Col, Button } from "reactstrap";

import "./MainSlider.scss";

const MainSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
    className: "d-flex align-items-center",
    dots: true,
  };
  return (
    <Row className="main-slider">
      <Col className="recommended-slider-column text-center mx-auto">
        <Slider {...settings}>
          <div className="d-flex flex-column justify-content-center align-items-start main-slider__item main-slider__item--first">
            <h1>
              Jak przynieść światu <br />
              <b>najwięcej dobra?</b>
            </h1>
            <p>
              Jak czynić najwięcej dobra wykorzystując ograniczone środki?
              <br /> Efektywny Altruizm szuka odpowiedzi na to pytanie.
            </p>
            <Button className="main-slider__item--button">Dowiedz się więcej</Button>
          </div>
          <div className="main-slider__item main-slider__item--second">TEST2</div>
        </Slider>
      </Col>
    </Row>
  );
};

export default MainSlider;