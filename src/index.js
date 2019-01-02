import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import "./assets/css/style.css";
import App from "./app";
import store from './store';

require("babel-core/register");
require("babel-polyfill");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
