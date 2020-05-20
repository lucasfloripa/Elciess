import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Login from "./pages/loginRegister/Login";
import Dashboard from "./pages/dashboard/Dashboard";

// Authentication
import setAuthorizationToken from "./utils/setAuthorizationToken";

// Css
import "./assets/scss/main.css";

// Redux Store
import store from "./store";
import { LOGIN } from "./store/actions/types";
import requireAuth from "./utils/requireAuth";
import noRequireAuth from "./utils/noRequireAuth";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faCogs,
  faCheckCircle,
  faMinusCircle,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCog, faCogs, faCheckCircle, faMinusCircle, faBox);

// Set Authorization
if (localStorage.getItem("token")) {
  setAuthorizationToken(JSON.parse(localStorage.getItem("token")));
  store.dispatch({ type: LOGIN });
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={noRequireAuth(Login)} />
            <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
