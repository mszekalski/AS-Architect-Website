import React from "react";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "./App.css";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
