import React, { Component } from 'react'
import Spinner from 'reactstrap/lib/Spinner';
import MailService from '../../utils/MailService';

export default class WorkshopForm extends Component {
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
        this.setState({
            msgStatus: "sending"
        })
        MailService.sendContactForm("", "m.hawelka@gmail.com", this.state.email, `Zapytanie o szkolenie ${this.props.name}`, this.state.msg).then(() => {
          MailService.sendContactFormAck("", this.state.email, `Zapytanie o szkolenie ${this.props.name}`, this.state.msg).then((result) => {
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
        return (<>
                { this.state.msgStatus === "sent" ? (<h3>Wiadomość została wysłana</h3>) : (
                    <>
                    <input type="email" placeholder="Adres e-mail" value={this.state.email} onChange={this.handleEmailChange} />
                    <textarea placeholder="Wiadomość" value={this.state.msg} onChange={this.handleMsgChange} />
                    <button className="btn ea-button" onClick={this.handleSubmit} style={{ width: "10rem" }} disabled={this.state.msgStatus === "sending"}>Wyślij</button>
                    { this.state.msgStatus === "sending" && <span><Spinner size="sm" /> Trwa wysyłanie wiadomości...</span>}
                </>
                )
                }
            </>
        )
    }
}
