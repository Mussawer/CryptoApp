import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./App/store";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
