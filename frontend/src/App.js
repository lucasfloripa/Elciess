import React from "react";
import { Provider } from "react-redux";

// React Fullpage
import ReactFullpage from "@fullpage/react-fullpage";

// Redux Store
import store from "./store";

// Pages
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReactFullpage
          licenseKey={"464F89D2-698A4E12-857D0A86-362F25E9"}
          scrollingSpeed={1000}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Login />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </Provider>
  );
}

export default App;
