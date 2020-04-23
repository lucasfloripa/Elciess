import React, { Component } from "react";
import ReactFullPage from "@fullpage/react-fullpage";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrentUser } from "../../store/actions/authActions";

// Sections
import { Home, Ranking, Conquistas, Desafios } from "./sections";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setCurrentUser();
  }

  render() {
    const { data } = this.props.user;
    if (data) {
      return (
        <ReactFullPage
          licenseKey={"464F89D2-698A4E12-857D0A86-362F25E9"}
          scrollSpeed={1000}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullPage.Wrapper>
                <Home />
                <Conquistas />
                <Ranking />
                <Desafios />
              </ReactFullPage.Wrapper>
            );
          }}
        />
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

index.propTypes = {
  user: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setCurrentUser })(index);
