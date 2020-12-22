import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./TopBar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  DropdownItem,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { ReactComponent as Logo } from "../../assets/images/efektywny-altruizm-logo.svg";
import { ReactComponent as WhiteLogo } from "../../assets/images/efektywny-altruizm-logo-white.svg";
import { Link } from "react-router-dom";
// import plFlag from "../../assets/images/pl.png";
// import ukFlag from "../../assets/images/uk.png";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  // const [lang, setLang] = useState("pl");
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [coopDropdownOpen, setCoopDropdownOpen] = useState(false);
  const [actDropdownOpen, setActDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleAboutDropdown = () => setAboutDropdownOpen((prevState) => !prevState);
  const toggleCoopDropdown = () => setCoopDropdownOpen((prevState) => !prevState);
  const toggleActDropdown = () => setActDropdownOpen((prevState) => !prevState);

  const toggle = () => setIsOpen(!isOpen);

  // const switchLanguage = () => {
  //   const langToSet = lang === "pl" ? "en" : "pl";
  //   setLang(langToSet);
  //   i18n.changeLanguage(langToSet);
  // };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <Navbar expand="lg" className={`p-0 main-nav ${scrolled && "main-nav--scrolled"}`} fixed="top">
        <NavbarBrand tag={Link} to="/" className="main-nav__brand">
          {scrolled ? (
            <Logo style={{ height: "60px" }}></Logo>
          ) : (
            <WhiteLogo style={{ height: "60px" }}></WhiteLogo>
          )}
        </NavbarBrand>
        <NavbarToggler className="main-nav__toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar className="main-nav__nav justify-content-center">
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
                    className="main-nav__dropdown-item"
                  >
                    {t("main_nav.about_us.movement")}
                  </HashLink>
                </DropdownItem>
                <DropdownItem>
                  <HashLink
                    smooth
                    to={{ pathname: "/about", hash: "#foundation" }}
                    className="main-nav__dropdown-item"
                  >
                    {t("main_nav.about_us.foundation")}
                  </HashLink>
                </DropdownItem>
                <DropdownItem>
                  <HashLink
                    smooth
                    to={{ pathname: "/about", hash: "#team" }}
                    className="main-nav__dropdown-item"
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
                  <Link to="/movement" className="main-nav__dropdown-item">
                    {t("main_nav.coop.company")}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/movement" className="main-nav__dropdown-item">
                    {t("main_nav.coop.media")}
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavHashLink to="/workshops" className="main-nav__item" activeClassName="main-nav__item--active">
              {t("main_nav.workshops")}
            </NavHashLink>
            <Dropdown
              isOpen={actDropdownOpen}
              onMouseEnter={toggleActDropdown}
              onMouseLeave={toggleActDropdown}
              toggle={toggleActDropdown}
            >
              <DropdownToggle
                nav
                className="main-nav__item"
                tag={NavHashLink}
                to="/act"
                activeClassName="main-nav__item--active"
              >
                {t("main_nav.act.title")}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/donate" className="main-nav__dropdown-item">
                    {t("main_nav.act.donate")}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/movement" className="main-nav__dropdown-item">
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
            {/* <div onClick={switchLanguage} className="main-nav__item">
              <img src={lang === "pl" ? ukFlag : plFlag} alt={lang === "pl" ? "ukFlag" : "plFlag"} />
            </div> */}
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
            <Button className="main-nav__button">{t("main_nav.act.donate")}</Button>
          </a>
        </div>
      </Navbar>
    </div>
  );
};

export default TopBar;
