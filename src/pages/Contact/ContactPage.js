import React from "react";
import "./ContactPage.scss";
import ScrollToTop from "../../components/ScrollToTop";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import MailService from "../../utils/MailService";

class ContactPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      msg: "",
      msgSent: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubjectChange(event) {
    this.setState({subject: event.target.value});
  }

  handleMsgChange(event) {
    this.setState({msg: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state)
    MailService.sendMail(this.state.name, this.state.email, this.state.subject, this.state.msg).then((result) => {
      console.log(result);
      this.setState({
        msgSent: true
      })
    });
    event.preventDefault();
  }

  render() {
  return (
    <div className="contact">
      <ScrollToTop />
      <SectionTitle text="Odezwij się" title="Skontaktuj się z nami" />
      <Row className="ea-row">
        <Col className="contact__data">
          <h2>Fundacja Efektywny Altruizm</h2>
          <p>Plac Bankowy 2, 00-095 Warszawa KRS: 0000726237, REGON: 369951399, NIP: 5252746902</p>
          <p>ING Bank Śląski S.A. Nr konta: PL 67 1050 1012 1000 0090 8040 3265</p>
          <table>
            <tr>
              <td>Główny kontakt:</td>
              <td>
                <a href="mailto:michal.trzesimiech@efektywnyaltruizm.org">
                  michal.trzesimiech@efektywnyaltruizm.org
                </a>
              </td>
            </tr>
            <tr>
              <td>Wolontariat:</td>
              <td>
                <a href="mailto:wolontariat@efektywnyaltruizm.org">wolontariat@efektywnyaltruizm.org</a>
              </td>
            </tr>
            <tr>
              <td>Darowizny:</td>
              <td>
                <a href="mailto:darowizny@efektywnyaltruizm.org">darowizny@efektywnyaltruizm.org</a>
              </td>
            </tr>
            <tr>
              <td>Zbiórki dla EA:</td>
              <td>
                <a href="mailto:zbiorka@efektywnyaltruizm.org">zbiorka@efektywnyaltruizm.org</a>
              </td>
            </tr>
            <tr>
              <td>Media:</td>
              <td>
                <a href="mailto:media@efektywnyaltruizm.org">media@efektywnyaltruizm.org</a>
              </td>
            </tr>
          </table>
          <div className="contact__social d-flex justify-content-between">
            <div style={{ padding: "10px" }}>
              <a
                href="https://www.facebook.com/efektywnyaltruizmfundacja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} className="contact__icon" />
              </a>
            </div>
            <div style={{ padding: "10px" }}>
              <a
                href="https://www.linkedin.com/company/efektywnyaltruizm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="contact__icon" />
              </a>
            </div>
            <div style={{ padding: "10px" }}>
              <a
                href="https://www.youtube.com/channel/UCj6HkTu_5nYypCRKc-7y27A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="contact__icon" />
              </a>
            </div>
          </div>
        </Col>
        <Col className="contact__form">
          {this.state.msgSent ? (<div>Wiadomość została wysłana</div>) : (
            <form onSubmit={this.handleSubmit}>
            <div className="d-flex justify-content-between">
              <input type="text" placeholder="Imię" style={{ marginRight: "20px" }} value={this.state.name} onChange={this.handleNameChange}/>
              <input type="email" placeholder="Adres e-mail" value={this.state.email} onChange={this.handleEmailChange}/>
            </div>
            <div className="d-flex justify-content-between">
              <input type="text" placeholder="Temat" value={this.state.subject} onChange={this.handleSubjectChange}/>
            </div>
            <div>
              <textarea placeholder="Wiadomość" value={this.state.msg} onChange={this.handleMsgChange}/>
            </div>
            <input type="submit" value="Wyślij" />
          </form>
          )}
        </Col>
      </Row>
    </div>
  );
}
}

export default ContactPage;
