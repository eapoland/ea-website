import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <Row className="footer">
      <Col className="d-flex flex-row justify-content-between align-items-center">
        <p className="footer__info m-0">
          {t("footer.foundation.name")}
          <br />
          {t("footer.foundation.address")}
          <br />
          {t("footer.foundation.identifiers")}
          <br />
          {t("footer.foundation.account.name")}
          <br />
          {t("footer.foundation.account.number")}
          <br />
        </p>
        <Nav className="footer__nav flex-column align-items-end">
          <NavItem>
            <NavLink
              className="footer__item"
              href="https://drive.google.com/drive/folders/10TgWw_2vMKzcbRUn1HpMsqgmwoW9Dy0l?usp=sharing"
            >
              Materiały dla mediów
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="footer__item" tag={Link} to="/contact">
              Napisz do nas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="footer__item" tag={Link} to="/privacy-policy">
              Polityka prywatności
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  );
};

export default Footer;
