import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./TopBar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  Col,
  DropdownItem,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import { ReactComponent as Logo } from "../../assets/images/efektywny-altruizm-logo.svg";
import { Link } from "react-router-dom";
import plFlag from "../../assets/images/pl.png";
import ukFlag from "../../assets/images/uk.png";
import { HashLink, NavHashLink } from "react-router-hash-link";

const TopBar = () => {
  const { t, i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("pl");
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [coopDropdownOpen, setCoopDropdownOpen] = useState(false);
  const [actDropdownOpen, setActDropdownOpen] = useState(false);

  const toggleAboutDropdown = () =>
    setAboutDropdownOpen((prevState) => !prevState);
  const toggleCoopDropdown = () =>
    setCoopDropdownOpen((prevState) => !prevState);
  const toggleActDropdown = () => setActDropdownOpen((prevState) => !prevState);

  const toggle = () => setIsOpen(!isOpen);
  const switchLanguage = () => {
    const langToSet = lang === "pl" ? "en" : "pl";
    setLang(langToSet);
    i18n.changeLanguage(langToSet);
  };

  return (
    <div>
      {/* <!-- desktop --> */}
      <Navbar className="main-nav__desktop">
        <Col xs={2} className="main-nav__brand">
          <NavbarBrand tag={Link} to="/">
            <Logo style={{ width: "100%" }}></Logo>
          </NavbarBrand>
        </Col>
        <Col xs={10} className="d-flex justify-content-end">
          <Col
            xs={10}
            className="d-flex align-items-center justify-content-center"
          >
            <Nav navbar className="justify-content-center flex-row">
              <Dropdown
                isOpen={aboutDropdownOpen}
                onMouseEnter={toggleAboutDropdown}
                onMouseLeave={toggleAboutDropdown}
                toggle={toggleAboutDropdown}
              >
                <DropdownToggle
                  nav
                  className="main-nav__item"
                  tag={NavHashLink}
                  to="/about"
                  activeClassName="main-nav__item--active"
                >
                  {t("main_nav.about_us.title")}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <HashLink
                      smooth
                      to={{ pathname: "/about", hash: "#movement" }}
                      className="main-nav__item"
                    >
                      {t("main_nav.about_us.movement")}
                    </HashLink>
                  </DropdownItem>
                  <DropdownItem>
                    <HashLink
                      smooth
                      to={{ pathname: "/about", hash: "#foundation" }}
                      className="main-nav__item"
                    >
                      {t("main_nav.about_us.foundation")}
                    </HashLink>
                  </DropdownItem>
                  <DropdownItem>
                    <HashLink
                      smooth
                      to={{ pathname: "/about", hash: "#team" }}
                      className="main-nav__item"
                    >
                      {t("main_nav.about_us.team")}
                    </HashLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                isOpen={coopDropdownOpen}
                onMouseEnter={toggleCoopDropdown}
                onMouseLeave={toggleCoopDropdown}
                toggle={toggleCoopDropdown}
              >
                <DropdownToggle
                  nav
                  className="main-nav__item"
                  tag={NavHashLink}
                  to="/cooperation"
                  activeClassName="main-nav__item--active"
                >
                  {t("main_nav.coop.title")}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/movement" className="main-nav__item">
                      {t("main_nav.coop.company")}
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/movement" className="main-nav__item">
                      {t("main_nav.coop.media")}
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                isOpen={actDropdownOpen}
                onMouseEnter={toggleActDropdown}
                onMouseLeave={toggleActDropdown}
                toggle={toggleActDropdown}
              >
                <DropdownToggle nav className="main-nav__item" tag={NavHashLink}
                  to="/act"
                  activeClassName="main-nav__item--active">
                  {t("main_nav.act.title")}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/movement" className="main-nav__item">
                      {t("main_nav.act.donate")}
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/movement" className="main-nav__item">
                      {t("main_nav.act.join")}
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavHashLink to="/blog" className="main-nav__item" activeClassName="main-nav__item--active">
                {t("main_nav.blog")}
              </NavHashLink>
              <NavHashLink to="/contact" className="main-nav__item" activeClassName="main-nav__item--active">
                {t("main_nav.contact")}
              </NavHashLink>
              <div onClick={switchLanguage} className="main-nav__item">
                <img
                  src={lang === "pl" ? ukFlag : plFlag}
                  alt={lang === "pl" ? "ukFlag" : "plFlag"}
                />
              </div>
            </Nav>
          </Col>
          <Col xs={2}>
            <div className="main-nav__button--wrapper">
                <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FFLJ8KDN5CAUA" target="_blank" rel="noopener noreferrer">
                  <Button className="main-nav__button">
                    {t("main_nav.act.donate")}           
                  </Button>
                </a>
            </div>
          </Col>
        </Col>
      </Navbar>
      {/* mobile */}
      <Navbar className="main-nav__mobile flex-column justify-content-center">
        <Row className="main-nav__brand w-100 justify-content-between">
          <NavbarBrand tag={Link} to="/">
            <Logo style={{ height: "100%" }}></Logo>
          </NavbarBrand>
          <NavbarToggler className="main-nav__toggler" onClick={toggle} />
        </Row>
        <Row className="d-flex justify-content-end">
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Row className="justify-content-center">
              <Nav navbar className="justify-content-center">
                <NavHashLink className="main-nav__item" to="/about" activeClassName="main-nav__item--active">
                  {t("main_nav.about_us.title")}
                </NavHashLink>
                <Link to="/movement" className="main-nav__item">
                  {t("main_nav.coop.title")}
                </Link>
                <Link to="/movement" className="main-nav__item">
                  {t("main_nav.act.title")}
                </Link>
                <Link to="/blog" className="main-nav__item">
                  {t("main_nav.blog")}
                </Link>
                <Link to="/blog" className="main-nav__item">
                  {t("main_nav.contact")}
                </Link>
                <div onClick={switchLanguage} className="main-nav__item">
                  <img
                    src={lang === "pl" ? ukFlag : plFlag}
                    alt={lang === "pl" ? "ukFlag" : "plFlag"}
                  />
                </div>
              </Nav>
            </Row>
            <Row>
              <div className="main-nav__button--wrapper">
                <Button className="main-nav__button">
                  {t("main_nav.act.donate")}
                </Button>
              </div>
            </Row>
          </Collapse>
        </Row>
      </Navbar>
    </div>
  );
};

export default TopBar;
