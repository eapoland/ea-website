import React from 'react'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import '../Workshops.scss'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import testimonial from '../../../assets/images/karolina.png'

const Testimonials = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    pauseOnHover: true,
    className: 'd-flex align-items-center',
    dots: true,
    prevArrow: (
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="ea-slider__arrow testimonials"
      />
    ),
    nextArrow: (
      <FontAwesomeIcon icon={faChevronRight} className="ea-slider__arrow" />
    ),
  }
  return (
    <Row className="testimonials justify-content-center">
      <Col className="testimonials-content">
        <h3 className="m-0">Uczestnicy o nas</h3>
        <Slider {...settings}>
          <div className="d-flex testimonial justify-content-center">
            <div style={{ width: '250px', marginRight: '40px' }}>
              <img src={testimonial} alt="Karolina Sarek" />

              <h5>Karolina Sarek</h5>
              <h6>
                Współzałożycielka i Dyrektor Badań w Charity Entrepreneurship
                Fund Manager at Effective Altruism Animal Welfare Fund
              </h6>
            </div>
            <div style={{ width: '450px' }}>
              <p>
                Poznaj naszą historię oraz ideę, z której ten ruch wyrasta.
                Omówmy szereg praktycznych zagadnień związanych z
                dobroczynnością. Przekonaj się, że każdy – także Ty – może
                zostać Efektywnym Altruistą. Poznaj naszą historię oraz ideę, z
                której ten ruch wyrasta. Omówmy szereg praktycznych zagadnień
                związanych z dobroczynnością. Przekonaj się, że każdy – także Ty
                – może zostać Efektywnym Altruistą.
              </p>
            </div>
          </div>
          <div className="d-flex testimonial justify-content-center">
            <div style={{ width: '250px', marginRight: '40px' }}>
              <img src={testimonial} alt="Karolina Sarek" />

              <h5>Karolina Sarek</h5>
              <h6>
                Współzałożycielka i Dyrektor Badań w Charity Entrepreneurship
                Fund Manager at Effective Altruism Animal Welfare Fund
              </h6>
            </div>
            <div style={{ width: '450px' }}>
              <p>
                Poznaj naszą historię oraz ideę, z której ten ruch wyrasta.
                Omówmy szereg praktycznych zagadnień związanych z
                dobroczynnością. Przekonaj się, że każdy – także Ty – może
                zostać Efektywnym Altruistą. Poznaj naszą historię oraz ideę, z
                której ten ruch wyrasta. Omówmy szereg praktycznych zagadnień
                związanych z dobroczynnością. Przekonaj się, że każdy – także Ty
                – może zostać Efektywnym Altruistą.
              </p>
            </div>
          </div>
        </Slider>
      </Col>
    </Row>
  )
}

export default Testimonials
