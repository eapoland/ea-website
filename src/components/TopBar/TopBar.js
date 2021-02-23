import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./TopBar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
} from "reactstrap";
import { ReactComponent as Logo } from "../../assets/images/efektywny-altruizm-logo.svg";
import { ReactComponent as WhiteLogo } from "../../assets/images/efektywny-altruizm-logo-white.svg";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <Navbar
        expand="lg"
        // className={`p-0 main-nav ${
        //   ((location.pathname !== "/" && !location.pathname.includes("/blog")) || scrolled) &&
        //   "main-nav--scrolled"
        // }`}
        className={`p-0 main-nav ${
          (location.pathname !== "/" || scrolled) &&
          "main-nav--scrolled"
        }`}
        fixed="top"
      >
        <NavbarBrand tag={Link} to="/" className="main-nav__brand">
          {/* {(location.pathname !== "/" && !location.pathname.includes("/blog")) || scrolled ? (
            <Logo style={{ height: "60px" }}></Logo>
          ) : (
            <WhiteLogo style={{ height: "60px" }}></WhiteLogo>
          )} */}
          {location.pathname !== "/" || scrolled ? (
            <Logo style={{ height: "60px" }}></Logo>
          ) : (
            <WhiteLogo style={{ height: "60px" }}></WhiteLogo>
          )}
        </NavbarBrand>
        <NavbarToggler className="main-nav__toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar className="main-nav__nav justify-content-center">
            <NavHashLink to="/about" className="main-nav__item" activeClassName="main-nav__item--active">
              O&nbsp;nas
            </NavHashLink>
            <NavHashLink to="/activities" className="main-nav__item" activeClassName="main-nav__item--active">
              Działania
            </NavHashLink>
            <NavHashLink to="/workshops" className="main-nav__item" activeClassName="main-nav__item--active">
              Warsztaty
            </NavHashLink>
            <NavHashLink to="/act" className="main-nav__item" activeClassName="main-nav__item--active">
              Wspieraj
            </NavHashLink>
            {/* <NavHashLink to="/blog" className="main-nav__item" activeClassName="main-nav__item--active">
              Blog
            </NavHashLink> */}
            <NavHashLink to="/contact" className="main-nav__item" activeClassName="main-nav__item--active">
              Kontakt
            </NavHashLink>
            <div className="main-nav__item main-nav__item--social">
              <a
                href="https://www.facebook.com/efektywnyaltruizmfundacja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} className="main-nav__icon" />
              </a>
            </div>
            <div className="main-nav__item main-nav__item--social">
              <a
                href="https://www.linkedin.com/company/efektywnyaltruizm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="main-nav__icon" />
              </a>
            </div>
            <div className="main-nav__item main-nav__item--social">
              <a
                href="https://www.youtube.com/channel/UCj6HkTu_5nYypCRKc-7y27A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="main-nav__icon" />
              </a>
            </div>
          </Nav>
        </Collapse>

        <div className="main-nav__button--wrapper">
          <a
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FFLJ8KDN5CAUA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="main-nav__button">Przekaż darowiznę</Button>
          </a>
        </div>
      </Navbar>
    </div>
  );
};

export default TopBar;
