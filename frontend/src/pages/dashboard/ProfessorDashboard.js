import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactFullPage from "@fullpage/react-fullpage";
import { connect } from "react-redux";

// Actions
import { getAvisosByProfLogado } from "../../store/actions/avisoActions";

// Sections
import { HomeProfessor } from "../index";

class ProfessorDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAvisosByProfLogado();
  }

  render() {
    const { avisos } = this.props;

    if (avisos) {
      return (
        <ReactFullPage
          licenseKey={"464F89D2-698A4E12-857D0A86-362F25E9"}
          scrollSpeed={1000}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullPage.Wrapper>
                <HomeProfessor avisos={avisos} />
              </ReactFullPage.Wrapper>
            );
          }}
        />
      );
    } else {
      return <h1>Loading ...</h1>;
    }
  }
}

ProfessorDashboard.propTypes = {
  usuarioLogado: PropTypes.object.isRequired,
  avisos: PropTypes.object.isRequired,
  getAvisosByProfLogado: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  avisos: state.aviso.avisos,
});

export default connect(mapStateToProps, { getAvisosByProfLogado })(
  ProfessorDashboard
);
