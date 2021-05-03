import React, { useState } from 'react'
import Spinner from 'reactstrap/lib/Spinner'
import MailService from '../../../services/MailService'

const WorkshopForm = ({ name }) => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('notSent')

  const handleSubmit = event => {
    setStatus('sending')
    MailService.sendContactForm(
      '',
      'kontakt@efektywnyaltruizm.org',
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
          setStatus('sent')
        }
      })
    })
    event.preventDefault()
  }

  return (
    <>
      {status === 'sent' ? (
        <h3>Wiadomość została wysłana</h3>
      ) : (
        <>
          <input
            type="email"
            placeholder="Adres e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <textarea
            placeholder="Wiadomość"
            value={msg}
            onChange={event => setMsg(event.target.value)}
          />
          <button
            type="submit"
            className="btn ea-button"
            onClick={handleSubmit}
            style={{ width: '10rem' }}
            disabled={status === 'sending'}
          >
            Wyślij
          </button>
          {status === 'sending' && (
            <span>
              <Spinner size="sm" /> Trwa wysyłanie wiadomości...
            </span>
          )}
        </>
      )}
    </>
  )
}

export default WorkshopForm
