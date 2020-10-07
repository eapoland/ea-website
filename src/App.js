import React, { Suspense } from "react";
import "./App.scss";
import TopBar from "./components/TopBar/TopBar";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import CooperationPage from "./pages/Cooperation/CooperationPage";
import JoinUsPage from "./pages/JoinUs/JoinUsPage";
import Footer from "./components/Footer/Footer";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CookiesPage from "./pages/Cookies/Cookies";

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <Container fluid>
          <TopBar />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/cooperation" exact>
              <CooperationPage />
            </Route>
            <Route path="/join-us" exact>
              <JoinUsPage />
            </Route>
            <Route path="/cookies" exact>
              <CookiesPage />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Suspense>
    </Router>
  );
}

export default App;
