import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Bootstrap Css
import "bootstrap/dist/css/bootstrap.css";

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// FA
import "font-awesome/css/font-awesome.min.css";

// Mdb React
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
