import React, { Component } from "react";
import { connect } from "react-redux";

// Action
import { setUsuarioAtual } from "../../store/actions/authActions";

// Dashboards
import AlunoDashboard from "./AlunoDashboard";
import ProfessorDashboard from "./ProfessorDashboard";

class MainDashboard extends Component {
  componentDidMount() {
    this.props.setUsuarioAtual();
  }

  render() {
    const { usuarioLogado } = this.props;

    if (usuarioLogado) {
      if (usuarioLogado.tipoUsuario === "Aluno") {
        return <AlunoDashboard usuarioLogado={usuarioLogado} />;
      } else if (usuarioLogado.tipoUsuario === "Professor") {
        return <ProfessorDashboard usuarioLogado={usuarioLogado} />;
      }
    } else {
      return <h1>Loading ...</h1>;
    }
  }
}

const mapStateToProps = (state) => ({
  usuarioLogado: state.auth.usuario.data,
});

export default connect(mapStateToProps, { setUsuarioAtual })(MainDashboard);
