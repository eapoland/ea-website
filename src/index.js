import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import { Router } from "react-router-dom";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

ReactGA.initialize("UA-79994527-1");
const history = createBrowserHistory();

history.listen(entry => {
  ReactGA.set({ page: entry.location.pathname }); // Update the user's current page
  ReactGA.pageview(entry.location.pathname); // Record a pageview for the given page
});

ReactGA.event({
  category: "Test event",
  action: "User got to the site",
});

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
        <App />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
