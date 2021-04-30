import axios from "axios"

const contactFormEATemplateId = "d-410bf93d63c542cb942da5fd2478bd69"
const contactFormAckTemplateId = "d-0ebdd476938a42548085491228209eb6"

const MailService = {
  sendContactFormAck(
    name,
    email,
    subject,
    msg,
    formName = "Formularz kontaktowy"
  ) {
    return axios.post(
      "https://ea-website-mail.azurewebsites.net/api/mail?code=ujJvutExsTSUPGf30prVxT7UVOVZ4OMn38EheQO8jnhRdN5OfWY8xQ==",
      {
        sender: {
          name: "Fundacja Efektywny Altruizm",
          email: "michal.trzesimiech@efektywnyaltruizm.org",
        },
        recipients: [
          {
            name: name,
            email: email,
          },
        ],
        templateId: contactFormAckTemplateId,
        templateData: {
          formType: formName,
          subject: subject,
          content: msg,
        },
      }
    )
  },

  sendContactForm(
    name,
    eaEmail,
    senderEmail,
    subject,
    msg,
    formName = "Formularz kontaktowy"
  ) {
    return axios.post(
      "https://ea-website-mail.azurewebsites.net/api/mail?code=ujJvutExsTSUPGf30prVxT7UVOVZ4OMn38EheQO8jnhRdN5OfWY8xQ==",
      {
        sender: {
          name: "Fundacja Efektywny Altruizm",
          email: "michal.trzesimiech@efektywnyaltruizm.org",
        },
        recipients: [
          {
            name: "Fundacja Efektywny Altruizm",
            email: eaEmail,
          },
        ],
        templateId: contactFormEATemplateId,
        templateData: {
          formType: formName,
          senderName: name,
          senderEmail: senderEmail,
          querySubject: subject,
          queryContent: msg,
        },
      }
    )
  },
}

export default MailService
