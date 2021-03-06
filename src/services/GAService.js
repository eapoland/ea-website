import ReactGA from 'react-ga'

const GAService = {
  sendEvent: (category, action) => {
    ReactGA.event({
      category,
      action,
    })
  },
  sendDonationEvent: action => {
    GAService.sendEvent('Donations', action)
  },
  sendNewsletterEvent: action => {
    GAService.sendEvent('Newsletter', action)
  },
  sendWorkshopsEvent: action => {
    GAService.sendEvent('Workshops', action)
  },
  sendVolunteerEvent: action => {
    GAService.sendEvent('Volunteer', action)
  },
}

export default GAService
