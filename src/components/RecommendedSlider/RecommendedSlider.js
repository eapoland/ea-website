import React from "react";
import Slider from "react-slick";
import "./RecommendedSlider.scss";
import okLogo from "../../assets/images/ok-logo.png";
import paretoLogo from "../../assets/images/pareto-logo.png";
import altruistoLogo from "../../assets/images/altruisto-logo.png";
import provegLogo from "../../assets/images/proveg-logo.png";
import schweitzerLogo from "../../assets/images/schweitzer-logo.png";
import { Col, Row } from "reactstrap";
import { Fade } from "react-reveal";

const RecommendedSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    className: "d-flex align-items-center",
    dots: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Fade bottom>
      <Row className="recommended-slider">
        <Col className="recommended-slider-column text-center mx-auto">
          <h1 className="recommended-slider__heading">Przyjaciele</h1>
          <Slider {...settings}>
            <div>
              <img src={okLogo} alt="OK logo" />
            </div>
            <div>
              <img src={schweitzerLogo} alt="Albert Schweitzer logo" />
            </div>
            <div>
              <img src={provegLogo} alt="ProVeg logo" />
            </div>
            <div>
              <img src={altruistoLogo} alt="Altruisto logo" />
            </div>
            <div>
              <img src={paretoLogo} alt="Pareto logo" />
            </div>
          </Slider>
        </Col>
      </Row>
    </Fade>
  );
};

export default RecommendedSlider;
