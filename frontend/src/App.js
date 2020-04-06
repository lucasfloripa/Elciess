import React from "react";
import { Provider } from "react-redux";

// Redux Store
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Elciess</h1>
      </div>
    </Provider>
  );
}

export default App;
