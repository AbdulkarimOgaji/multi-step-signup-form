import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "../src/store/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
