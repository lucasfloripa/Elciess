import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactFullPage from "@fullpage/react-fullpage";
import { connect } from "react-redux";
import { setUsuarioAtual, logout } from "../../store/actions/authActions";
import {
  updateAluno,
  boundAlunoDesafio,
  unboundAlunoDesafio,
} from "../../store/actions/alunoActions";
import {
  getDesafioByTurma,
  updateDesafio,
} from "../../store/actions/desafioActions";

// Sections
import { Home, Conquistas, Desafios } from "./sections";

// Components
import ModalDesafiosDisponiveis from "../../components/ModalDesafiosDisponiveis";
import ModalDesafiosAceitos from "../../components/ModalDesafiosAceitos";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desafio: {},
      desafiosDisponiveis: [],
      toggleInfoEdit: false,
      toggleSenhaEdit: false,
      showModalDesafiosDisponiveis: false,
      showModalDesafiosAceitos: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUpdateAluno = this.handleUpdateAluno.bind(this);
    this.handleStatusDesafio = this.handleStatusDesafio.bind(this);
    this.handleUpdateSenhaAluno = this.handleUpdateSenhaAluno.bind(this);
    this.handleToggleSenhaEdit = this.handleToggleSenhaEdit.bind(this);
    this.handleToggleInfoEdit = this.handleToggleInfoEdit.bind(this);
    this.handleToggleModalDesafiosDisponiveis = this.handleToggleModalDesafiosDisponiveis.bind(
      this
    );
    this.handleToggleModalDesafiosAceitos = this.handleToggleModalDesafiosAceitos.bind(
      this
    );
    this.handleOpenModalDesafioDisponivel = this.handleOpenModalDesafioDisponivel.bind(
      this
    );
    this.handleOpenModalDesafioAceito = this.handleOpenModalDesafioAceito.bind(
      this
    );
    this.handleBoundAlunoDesafio = this.handleBoundAlunoDesafio.bind(this);
    this.handleUnboundAlunoDesafio = this.handleUnboundAlunoDesafio.bind(this);
  }

  async componentDidMount() {
    await this.props.setUsuarioAtual();
    await this.props.getDesafioByTurma();
    this.handleDesafiosDisponiveis();
  }

  handleLogout() {
    this.props.logout();
  }

  handleUpdateAluno(values) {
    this.props.updateAluno(values);
  }

  handleUpdateSenhaAluno({ senhaAtual, novaSenha }) {
    // To Do
    // this.props.updateSenhaAluno(senhaAtual, novaSenha);
  }

  handleStatusDesafio(desafio) {
    this.props.updateDesafio(desafio);
  }

  handleToggleModalDesafiosDisponiveis() {
    this.setState({
      showModalDesafiosDisponiveis: !this.state.showModalDesafiosDisponiveis,
    });
  }
  
  handleToggleModalDesafiosAceitos() {
    this.setState({
      showModalDesafiosAceitos: !this.state.showModalDesafiosAceitos,
    });
  }

  handleToggleInfoEdit() {
    if (!this.state.toggleSenhaEdit) {
      this.setState({ toggleInfoEdit: !this.state.toggleInfoEdit });
    } else {
      this.setState({
        toggleInfoEdit: !this.state.toggleInfoEdit,
        toggleSenhaEdit: false,
      });
    }
  }

  handleToggleSenhaEdit() {
    if (!this.state.toggleInfoEdit) {
      this.setState({ toggleSenhaEdit: !this.state.toggleSenhaEdit });
    } else {
      this.setState({
        toggleSenhaEdit: !this.state.toggleSenhaEdit,
        toggleInfoEdit: false,
      });
    }
  }

  handleOpenModalDesafioDisponivel(desafio) {
    this.setState({ desafio, showModalDesafiosDisponiveis: true });
  }

  handleOpenModalDesafioAceito(desafio) {
    this.setState({ desafio, showModalDesafiosAceitos: true });
  }

  handleBoundAlunoDesafio(desafioId) {
    this.props.boundAlunoDesafio(desafioId);
  }

  handleUnboundAlunoDesafio(desafioId) {
    this.props.unboundAlunoDesafio(desafioId);
  }

  handleDesafiosDisponiveis() {
    const { usuarioLogado, desafios } = this.props;

    const alunoDesafiosId = usuarioLogado.desafios.map(
      (desafio) => desafio._id
    );
    const desafiosDisponiveis = desafios.filter(
      ({ _id }) => !alunoDesafiosId.includes(_id)
    );
    this.setState({ desafiosDisponiveis });
  }

  render() {
    const { usuarioLogado, desafios } = this.props,
      {
        toggleInfoEdit,
        toggleSenhaEdit,
        showModalDesafiosDisponiveis,
        showModalDesafiosAceitos,
        desafiosDisponiveis,
        desafio,
      } = this.state;

    if (usuarioLogado && desafios) {
      return (
        <ReactFullPage
          licenseKey={"464F89D2-698A4E12-857D0A86-362F25E9"}
          scrollSpeed={1000}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullPage.Wrapper>
                <Home
                  usuarioLogado={usuarioLogado}
                  onLogout={this.handleLogout}
                  onUpdateAluno={this.handleUpdateAluno}
                  onUpdateSenhaAluno={this.handleUpdateSenhaAluno}
                  onToggleEditInfo={this.handleToggleInfoEdit}
                  onToggleEditSenha={this.handleToggleSenhaEdit}
                  toggleInfoEditStatus={toggleInfoEdit}
                  toggleSenhaEditStatus={toggleSenhaEdit}
                />
                <Conquistas />
                <Desafios
                  desafiosDoAluno={usuarioLogado.desafios}
                  desafiosDisponiveis={desafiosDisponiveis}
                  onShowModalDesafioDisponivel={this.handleOpenModalDesafioDisponivel}
                  onShowModalDesafioAceito={this.handleOpenModalDesafioAceito}
                  onUnboundAlunoDesafio={this.handleUnboundAlunoDesafio}
                  onChangeStatusDesafio={this.handleStatusDesafio}
                />
                <ModalDesafiosDisponiveis
                  showModal={showModalDesafiosDisponiveis}
                  desafio={desafio}
                  onToggleShowModal={this.handleToggleModalDesafiosDisponiveis}
                  onBoundAlunoDesafio={this.handleBoundAlunoDesafio}
                />
                <ModalDesafiosAceitos
                  showModal={showModalDesafiosAceitos}
                  desafio={desafio}
                  onToggleShowModal={this.handleToggleModalDesafiosAceitos}
                  onUnboundAlunoDesafio={this.handleUnboundAlunoDesafio}
                />
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
  usuarioLogado: state.auth.usuario.data,
  desafios: state.desafios.desafios.data,
});

index.propTypes = {
  usuario: PropTypes.object,
  desafios: PropTypes.array,
  setUsuarioAtual: PropTypes.func.isRequired,
  getDesafioByTurma: PropTypes.func.isRequired,
  updateAluno: PropTypes.func.isRequired,
  updateDesafio: PropTypes.func.isRequired,
  boundAlunoDesafio: PropTypes.func.isRequired,
  unboundAlunoDesafio: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  setUsuarioAtual,
  logout,
  updateAluno,
  getDesafioByTurma,
  boundAlunoDesafio,
  unboundAlunoDesafio,
  updateDesafio,
})(index);
