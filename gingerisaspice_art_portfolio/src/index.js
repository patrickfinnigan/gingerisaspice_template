import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import App from "./views/app/App";
import ContactPage from "./views/contact/ContactPage";
import GalleryPage from "./views/gallery/GalleryPage.js";
import UploadPage from "./views/upload/UploadPage.js";
// import TestPage from "views/TestPage/TestPage.js";



var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/gallery" component={GalleryPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />*/}
      <Route path="/upload" component={UploadPage} /> 
      <Route path="/contact" component={ContactPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
