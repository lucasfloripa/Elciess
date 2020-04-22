import React, { Component } from "react";
import ReactFullPage from "@fullpage/react-fullpage";

// Sections
import { Profile, Ranking } from "./sections";

class index extends Component {
  render() {
    return (
      <ReactFullPage
        licenseKey={"464F89D2-698A4E12-857D0A86-362F25E9"}
        scrollSpeed={1000}

        render={({ state, fullpageApi}) => {
          return (
            <ReactFullPage.Wrapper>
              <Profile />
              <Ranking />
            </ReactFullPage.Wrapper>
          )
        }}
      />
    );
  }
}

export default index;
