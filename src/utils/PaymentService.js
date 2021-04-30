import axios from "axios"

const PaymentService = {
  createPaymentIntent: amount =>
    axios.get(
      `https://ea-website-payment.azurewebsites.net/api/TestFunction?amount=${amount}`
    ),
}

export default PaymentService
