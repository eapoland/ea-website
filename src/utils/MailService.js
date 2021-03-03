import axios from "axios";

const MailService = {
    sendMail(name, email, subject, msg) {
        axios.post("https://ea-website-mail.azurewebsites.net/api/mail?code=ujJvutExsTSUPGf30prVxT7UVOVZ4OMn38EheQO8jnhRdN5OfWY8xQ==", {
            "sender": {
                "name": "Michał Trzęsimiech",
                "email": "michal.trzesimiech@efektywnyaltruizm.org" 
            },
            "recipients": [
                {
                    "name": name,
                    "email": email
                },
            ],
            "templateId": "d-0ebdd476938a42548085491228209eb6",
            "templateData": {
                "formType": "Test form",
                "subject": subject,
                "content": msg
            }
        })
    }
};

export default MailService;
