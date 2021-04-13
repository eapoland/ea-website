import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Row, Col } from "reactstrap";
import EAButton from "../../components/Common/EAButton/EAButton";
import "./ActivitiesPage.scss";
import marcin from "../../assets/images/marcin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";
import ScrollToTop from "../../components/ScrollToTop";
import MailService from "../../utils/MailService";
import Spinner from "reactstrap/lib/Spinner";

class ActivitiesPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      msg: "",
      msgStatus: "notSent"
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleMsgChange(event) {
    this.setState({msg: event.target.value});
  }

  handleSubmit(event) {
    this.setState({msgStatus: "sending"})
    MailService.sendContactForm("", "m.hawelka@gmail.com", this.state.email, "Współpraca - formularz kontaktowy", this.state.msg).then(() => {
      MailService.sendContactFormAck("", this.state.email, "Współpraca - formularz kontaktowy", this.state.msg).then((result) => {
        if (result.status === 200) {
          this.setState({
            msgStatus: "sent"
          })
        }
      });
    });
    event.preventDefault();
  }

 render() {
  return (
    <div className="activities">
      <ScrollToTop />
      <SectionTitle title="Nasze działania" text="Współpraca i doradztwo" />
      <Row className="activities__cta ea-row justify-content-center" id="companies">
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ maxWidth: "683px" }}
        >
          <h2>Współpraca z&nbsp;organizacjami</h2>
          <p>
            Prowadzisz firmę lub organizację pozarządową? Porozmawiajmy o tym, jak powiększyć Twój dobroczynny
            ślad, lub społeczną odpowiedzialność!
          </p>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center"
          style={{ maxWidth: "683px" }}
        >
          {this.state.msgStatus === "sent" ? (<h3>Wiadomość została wysłana</h3>) : (
            <>
              <input type="email" placeholder="Adres e-mail" value={this.state.email} onChange={this.handleEmailChange} />
              <textarea placeholder="Wiadomość" value={this.state.msg} onChange={this.handleMsgChange} />
              <button className="btn ea-button" onClick={this.handleSubmit} style={{ width: "10rem" }}>Wyślij</button>
              { this.state.msgStatus === "sending" && <span><Spinner size="sm" /> Trwa wysyłanie wiadomości...</span>}
          </>
          )}
          
        </Col>
      </Row>
      <Row className="ea-row">
        <Col className="activities__col--narrow">
          <h3>Szkolenia i warsztaty</h3>
          <p className="activities__paragraph">
            Prowadzisz firmę lub organizację pozarządową? Porozmawiajmy o tym, jak powiększyć Twój dobroczynny
            ślad, lub społeczną odpowiedzialność! Na Twoje zamówienie przygotujemy treści dostosowane do
            potrzeb Twojej organizacji.
          </p>
          <div className="d-flex justify-content-center"><EAButton title="Zapoznaj się z ofertą" target="workshops"/></div>
        </Col>
      </Row>
      <Row className="activities__advisory ea-row">
        <Col>
          <h3>Doradztwo</h3>
          <Row className="justify-content-center ea-row">
            <Col style={{ maxWidth: "683px" }}>
              <img src={marcin} alt="" />
            </Col>
            <Col className="d-flex flex-column justify-content-center" style={{ maxWidth: "683px" }}>
              <h4>Marcin Tischner</h4>
              <p>
                Porozmawiajmy o sposobach, na jaki Twoja organizacja może osiągnać największy dobroczynny
                zwrot, lub wzmonić swoją odpowiedzialność społeczną.
              </p>
              <a href="mailto:marcin.tischner@efektywnyaltruizm.org"><button className="btn ea-button" style={{ width: "10rem" }}>Napisz do mnie</button></a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="ea-row" id="media">
        <Col className="activities__col--narrow">
          <h3>Media</h3>
          {/* <p className="activities__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p> */}
          <div className="activities__media--links d-flex justify-content-between">
            <NavHashLink to={`about`}>
              <button className="activities__media--btn">
                <div className="d-flex justify-content-between align-items-center">
                  <p>O fundacji</p>
                  <FontAwesomeIcon icon={faChevronRight} className="activities__media--icon" />
                </div>{" "}
              </button>
            </NavHashLink>
            <a
              href="https://drive.google.com/drive/folders/10TgWw_2vMKzcbRUn1HpMsqgmwoW9Dy0l?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="activities__media--btn">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Materiały</p>
                  <FontAwesomeIcon icon={faChevronRight} className="activities__media--icon" />
                </div>{" "}
              </button>
            </a>
            <NavHashLink to={`contact`}>
              <button className="activities__media--btn">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Kontakt</p>
                  <FontAwesomeIcon icon={faChevronRight} className="activities__media--icon" />
                </div>{" "}
              </button>
            </NavHashLink>
          </div>
        </Col>
      </Row>
    </div>);
};
}
export default ActivitiesPage;
