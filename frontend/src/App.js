import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Css
import "./assets/scss/main.css";

// Redux Store
import store from "./store";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
