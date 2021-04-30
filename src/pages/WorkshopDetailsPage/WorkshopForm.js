import React, { Component } from 'react'
import Spinner from 'reactstrap/lib/Spinner'
import MailService from '../../utils/MailService'

export default class WorkshopForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      msg: '',
      msgStatus: 'notSent',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleMsgChange = this.handleMsgChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleMsgChange(event) {
    this.setState({ msg: event.target.value })
  }

  handleSubmit(event) {
    this.setState({
      msgStatus: 'sending',
    })
    const { email, msg } = this.state
    const { name } = this.props
    MailService.sendContactForm(
      '',
      'm.hawelka@gmail.com',
      email,
      `Zapytanie o szkolenie ${name}`,
      msg
    ).then(() => {
      MailService.sendContactFormAck(
        '',
        email,
        `Zapytanie o szkolenie ${name}`,
        msg
      ).then(result => {
        if (result.status === 200) {
          this.setState({
            msgStatus: 'sent',
          })
        }
      })
    })
    event.preventDefault()
  }

  render() {
    const { msgStatus, email, msg } = this.state
    return (
      <>
        {msgStatus === 'sent' ? (
          <h3>Wiadomość została wysłana</h3>
        ) : (
          <>
            <input
              type="email"
              placeholder="Adres e-mail"
              value={email}
              onChange={this.handleEmailChange}
            />
            <textarea
              placeholder="Wiadomość"
              value={msg}
              onChange={this.handleMsgChange}
            />
            <button
              type="submit"
              className="btn ea-button"
              onClick={this.handleSubmit}
              style={{ width: '10rem' }}
              disabled={msgStatus === 'sending'}
            >
              Wyślij
            </button>
            {msgStatus === 'sending' && (
              <span>
                <Spinner size="sm" /> Trwa wysyłanie wiadomości...
              </span>
            )}
          </>
        )}
      </>
    )
  }
}
