import React, { useState } from 'react'
import './styles.scss'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import Spinner from 'reactstrap/lib/Spinner'
import MailService from '../../services/MailService'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ScrollToTop from '../../components/ScrollToTop'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('notSent')

  const handleSubmit = event => {
    setStatus('sending')
    MailService.sendContactForm(
      name,
      'kontakt@efektywnyaltruizm.org',
      email,
      subject,
      msg
    ).then(() => {
      MailService.sendContactFormAck(name, email, subject, msg).then(result => {
        if (result.status === 200) {
          setStatus('sent')
        }
      })
    })
    event.preventDefault()
  }

  return (
    <div className="contact">
      <ScrollToTop />
      <SectionTitle text="Odezwij się" title="Skontaktuj się z nami" />
      <Row className="ea-row">
        <Col className="contact__data">
          <h2>Fundacja Efektywny Altruizm</h2>
          <p>
            Plac Bankowy 2, 00-095 Warszawa KRS: 0000726237, REGON: 369951399,
            NIP: 5252746902
          </p>
          <p>
            ING Bank Śląski S.A. Nr konta: PL 67 1050 1012 1000 0090 8040 3265
          </p>
          <table>
            <tr>
              <td>Główny kontakt:</td>
              <td>
                <a href="mailto:kontakt@efektywnyaltruizm.org">
                  kontakt@efektywnyaltruizm.org
                </a>
              </td>
            </tr>
            <tr>
              <td>Wolontariat:</td>
              <td>
                <a href="mailto:wolontariat@efektywnyaltruizm.org">
                  wolontariat@efektywnyaltruizm.org
                </a>
              </td>
            </tr>
            <tr>
              <td>Darowizny:</td>
              <td>
                <a href="mailto:darowizny@efektywnyaltruizm.org">
                  darowizny@efektywnyaltruizm.org
                </a>
              </td>
            </tr>
            <tr>
              <td>Media:</td>
              <td>
                <a href="mailto:media@efektywnyaltruizm.org">
                  media@efektywnyaltruizm.org
                </a>
              </td>
            </tr>
          </table>
          <div className="contact__social d-flex justify-content-between">
            <div style={{ padding: '10px' }}>
              <a
                href="https://www.facebook.com/efektywnyaltruizmfundacja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="contact__icon"
                />
              </a>
            </div>
            <div style={{ padding: '10px' }}>
              <a
                href="https://www.linkedin.com/company/efektywnyaltruizm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="contact__icon"
                />
              </a>
            </div>
            <div style={{ padding: '10px' }}>
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
          {status === 'sent' ? (
            <h3>Wiadomość została wysłana</h3>
          ) : (
            <>
              <div className="d-flex justify-content-between">
                <input
                  type="text"
                  placeholder="Imię"
                  style={{ marginRight: '20px' }}
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
                <input
                  type="email"
                  placeholder="Adres e-mail"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between">
                <input
                  type="text"
                  placeholder="Temat"
                  value={subject}
                  onChange={event => setSubject(event.target.value)}
                />
              </div>
              <div>
                <textarea
                  placeholder="Wiadomość"
                  value={msg}
                  onChange={event => setMsg(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn ea-button"
                onClick={handleSubmit}
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
        </Col>
      </Row>
    </div>
  )
}

export default Contact
