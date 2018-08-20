import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store.js";
import "./index.css";
import App from "./App.jsx";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);

  registerServiceWorker();
});
