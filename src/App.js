import React, { Suspense } from "react";
import "./App.scss";
import TopBar from "./components/TopBar/TopBar";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import CooperationPage from "./pages/Cooperation/CooperationPage";
import JoinUsPage from "./pages/Act/JoinUsPage";
import Footer from "./components/Footer/Footer";
import NewsletterCtaSection from "./components/NewsletterCtaSection/NewsletterCtaSection";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import CookieConsent from "react-cookie-consent";
import BlogPage from "./pages/Blog/BlogPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DonatePage from "./pages/Act/DonatePage";
import WorkshopsPage from "./pages/WorkshopsPage/WorkshopsPage";

const stripePromise = loadStripe(
  "pk_test_51HiOnnDDHV7JDkB9tHxmUobKY4ZezsR5lsWsviFG5NPEPbpgFGBeGqyYHyMeSnMi5Ulv5pV29i6Vr8sbDyfNJDcA00U862gUpU"
);

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <Elements stripe={stripePromise}>
          <Container fluid className="p-0">
            <TopBar />
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/workshops" exact>
                <WorkshopsPage />
              </Route>
              <Route path="/cooperation" exact>
                <CooperationPage />
              </Route>
              <Route path="/join-us" exact>
                <JoinUsPage />
              </Route>
              <Route path="/privacy-policy" exact>
                <PrivacyPolicyPage />
              </Route>
              <Route path="/blog" exact>
                <BlogPage />
              </Route>
              <Route path="/donate" exact>
                <DonatePage />
              </Route>
            </Switch>
            <CookieConsent
              location="bottom"
              buttonText="Akceptuję"
              cookieName="eaCookie"
              style={{ background: "#2B373B" }}
              buttonStyle={{
                backgroundColor: "#0b879d",
                fontSize: "13px",
                color: "#fff",
              }}
              expires={150}
            >
              Ta strona korzysta z ciasteczek.
              <br />
              <span style={{ fontSize: "10px" }}>
                Wykorzystujemy pliki cookie do spersonalizowania treści i reklam, aby oferować funkcje
                społecznościowe i analizować ruch w naszej witrynie. Informacje o tym, jak korzystasz z naszej
                witryny, udostępniamy partnerom społecznościowym, reklamowym i analitycznym. Partnerzy mogą
                połączyć te informacje z innymi danymi otrzymanymi od Ciebie lub uzyskanymi podczas
                korzystania z ich usług. Kontynuując korzystanie z naszej witryny, zgadasz się na używanie
                plików cookie.
              </span>
            </CookieConsent>
            <div className="d-flex">
              <Footer />
              <NewsletterCtaSection />
            </div>
          </Container>
        </Elements>
      </Suspense>
    </Router>
  );
}

export default App;
