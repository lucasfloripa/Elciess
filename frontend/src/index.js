import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Bootstrap Css
import "bootstrap/dist/css/bootstrap.css";

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// React Spring to use Toasted-Notes
import "react-spring";
import "toasted-notes/src/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
