import React, { Suspense } from 'react'
import './App.scss'
import { Container } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent'
import TopBar from './components/TopBar/TopBar'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Footer from './components/Footer/Footer'
import NewsletterCtaSection from './components/NewsletterCtaSection/NewsletterCtaSection'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import DonatePage from './pages/Donate/DonatePage'
import Workshops from './pages/Workshops'
import WorkshopDetails from './pages/WorkshopDetails'
import Contact from './pages/Contact'
import BlogPostPage from './pages/BlogPostPage/BlogPostPage'
import Act from './pages/Act'
import NotFound from './pages/NotFound'

// const stripePromise = loadStripe(
//   "pk_test_51HiOnnDDHV7JDkB9tHxmUobKY4ZezsR5lsWsviFG5NPEPbpgFGBeGqyYHyMeSnMi5Ulv5pV29i6Vr8sbDyfNJDcA00U862gUpU"
// );

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        {/* <Elements stripe={stripePromise}> */}
        <Container className="p-0 ea-container">
          <TopBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/workshops" exact>
              <Workshops />
            </Route>
            <Route path="/workshops/:id" exact>
              <WorkshopDetails />
            </Route>
            <Route path="/activities" exact>
              <Activities />
            </Route>
            <Route path="/privacy-policy" exact>
              <PrivacyPolicy />
            </Route>
            {/* <Route path="/blog" exact>
                <BlogPage />
              </Route> */}
            <Route path="/act" exact>
              <Act />
            </Route>
            <Route path="/blog/:slug" exact>
              <BlogPostPage />
            </Route>
            <Route path="/donate" exact>
              <DonatePage />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <CookieConsent
            location="bottom"
            buttonText="Akceptuję"
            cookieName="eaCookie"
            style={{ background: '#2B373B' }}
            buttonStyle={{
              backgroundColor: '#0b879d',
              fontSize: '13px',
              color: '#fff',
            }}
            expires={150}
          >
            Ta strona korzysta z ciasteczek.
            <br />
            <span style={{ fontSize: '10px' }}>
              Wykorzystujemy pliki cookie do spersonalizowania treści i reklam,
              aby oferować funkcje społecznościowe i analizować ruch na naszej
              witrynie. Informacje o tym, jak korzystasz z naszej witryny,
              udostępniamy partnerom społecznościowym, reklamowym i
              analitycznym. Partnerzy mogą połączyć te informacje z innymi
              danymi otrzymanymi od Ciebie lub uzyskanymi podczas korzystania z
              ich usług. Kontynuując korzystanie z naszej witryny, zgadzasz się
              na używanie plików cookie.
            </span>
          </CookieConsent>
          <div className="d-flex app__footer">
            <Footer />
            <NewsletterCtaSection />
          </div>
        </Container>
        {/* </Elements> */}
      </Suspense>
    </Router>
  )
}

export default App
