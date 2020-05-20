import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactFullPage from "@fullpage/react-fullpage";
import { connect } from "react-redux";

// Actions
import { setUsuarioAtual, logout } from "../../store/actions/authActions";
import {
  updateAluno,
  boundAlunoDesafio,
  unboundAlunoDesafio,
} from "../../store/actions/alunoActions";
import {
  getDesafioByTurma,
  uploadFileDesafio,
} from "../../store/actions/desafioActions";
import { getAvisosByTurmaAluno } from "../../store/actions/avisoActions";
import {
  notifyUser,
  cleanNotifyUser,
} from "../../store/actions/notificacaoActions";
import { updateSenhaUsuario } from "../../store/actions/usuarioActions";

// Sections
import { Home, Conquistas, Desafios } from "../index";

// Components
import ModalDesafiosDisponiveis from "./components/ModalDesafiosDisponiveis";
import ModalDesafiosAceitos from "./components/ModalDesafiosAceitos";
import ModalNoticiasAvisos from "./components/ModalNoticiasAvisos";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desafio: {},
      aviso: {},
      desafiosDisponiveis: [],
      toggleInfoEdit: false,
      toggleSenhaEdit: false,
      showModalDesafiosDisponiveis: false,
      showModalDesafiosAceitos: false,
      showModalNoticiasAvisos: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUpdateAluno = this.handleUpdateAluno.bind(this);
    this.handleUpdateSenhaAluno = this.handleUpdateSenhaAluno.bind(this);
    this.handleUploadFileDesafio = this.handleUploadFileDesafio.bind(this);
    this.handleToggleSenhaEdit = this.handleToggleSenhaEdit.bind(this);
    this.handleToggleInfoEdit = this.handleToggleInfoEdit.bind(this);
    this.handleToggleModalDesafiosDisponiveis = this.handleToggleModalDesafiosDisponiveis.bind(
      this
    );
    this.handleToggleModalDesafiosAceitos = this.handleToggleModalDesafiosAceitos.bind(
      this
    );
    this.handleToggleModalNoticiaAviso = this.handleToggleModalNoticiaAviso.bind(
      this
    );
    this.handleOpenModalDesafioDisponivel = this.handleOpenModalDesafioDisponivel.bind(
      this
    );
    this.handleOpenModalDesafioAceito = this.handleOpenModalDesafioAceito.bind(
      this
    );
    this.handleOpenModalNoticiaAviso = this.handleOpenModalNoticiaAviso.bind(
      this
    );
    this.handleBoundAlunoDesafio = this.handleBoundAlunoDesafio.bind(this);
    this.handleUnboundAlunoDesafio = this.handleUnboundAlunoDesafio.bind(this);
  }

  async componentDidMount() {
    await this.props.setUsuarioAtual();
    await this.props.getDesafioByTurma();
    await this.props.getAvisosByTurmaAluno();
    this.handleDesafiosDisponiveis();
  }

  componentDidUpdate() {
    if (this.props.notificacao.mensagem !== null) {
      setTimeout(() => this.props.cleanNotifyUser(), 5000);
    }
  }

  handleLogout() {
    this.props.logout();
  }

  handleUpdateAluno(values) {
    this.props.updateAluno(values);
    this.props.notifyUser("Edição realizada", "sucesso");
  }

  handleUpdateSenhaAluno({ senhaAtual, novaSenha, confirmaNovaSenha }) {
    if (novaSenha !== confirmaNovaSenha) {
      this.props.notifyUser("Confirmar senha inválido", "erro");
    } else {
      this.props.updateSenhaUsuario(senhaAtual, novaSenha);
    }
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

  handleToggleModalNoticiaAviso() {
    this.setState({
      showModalNoticiasAvisos: !this.state.showModalNoticiasAvisos,
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

  handleOpenModalNoticiaAviso(aviso) {
    this.setState({ aviso, showModalNoticiasAvisos: true });
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

  handleUploadFileDesafio(desafioId) {
    this.props.uploadFileDesafio(desafioId);
  }

  render() {
    const {
        usuarioLogado,
        desafios,
        avisos,
        notificacao: { mensagemTipo, mensagem },
      } = this.props,
      {
        toggleInfoEdit,
        toggleSenhaEdit,
        showModalDesafiosDisponiveis,
        showModalDesafiosAceitos,
        showModalNoticiasAvisos,
        desafiosDisponiveis,
        desafio,
        aviso,
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
                  avisos={avisos}
                  onLogout={this.handleLogout}
                  onUpdateAluno={this.handleUpdateAluno}
                  onUpdateSenhaAluno={this.handleUpdateSenhaAluno}
                  onToggleEditInfo={this.handleToggleInfoEdit}
                  onToggleEditSenha={this.handleToggleSenhaEdit}
                  onShowModalNoticiaAviso={this.handleOpenModalNoticiaAviso}
                  toggleInfoEditStatus={toggleInfoEdit}
                  toggleSenhaEditStatus={toggleSenhaEdit}
                  alertaTipo={mensagemTipo}
                  alertaMensagem={mensagem}
                />
                {/* <Conquistas /> */}
                <Desafios
                  usuarioId={usuarioLogado._id}
                  desafiosDoAluno={usuarioLogado.desafios}
                  desafiosDisponiveis={desafiosDisponiveis}
                  onShowModalDesafioDisponivel={
                    this.handleOpenModalDesafioDisponivel
                  }
                  onShowModalDesafioAceito={this.handleOpenModalDesafioAceito}
                  onUnboundAlunoDesafio={this.handleUnboundAlunoDesafio}
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
                  onUploadFileDesafio={this.handleUploadFileDesafio}
                  onToggleShowModal={this.handleToggleModalDesafiosAceitos}
                  onUnboundAlunoDesafio={this.handleUnboundAlunoDesafio}
                />
                <ModalNoticiasAvisos
                  aviso={aviso}
                  showModal={showModalNoticiasAvisos}
                  onToggleShowModal={this.handleToggleModalNoticiaAviso}
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
  avisos: state.aviso.avisos,
  notificacao: state.notificacao,
});

index.propTypes = {
  usuario: PropTypes.object,
  desafios: PropTypes.array,
  avisos: PropTypes.array,
  setUsuarioAtual: PropTypes.func.isRequired,
  getDesafioByTurma: PropTypes.func.isRequired,
  updateAluno: PropTypes.func.isRequired,
  boundAlunoDesafio: PropTypes.func.isRequired,
  unboundAlunoDesafio: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  getAvisosByTurmaAluno: PropTypes.func.isRequired,
  notifyUser: PropTypes.func.isRequired,
  cleanNotifyUser: PropTypes.func.isRequired,
  updateSenhaUsuario: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  setUsuarioAtual,
  logout,
  updateAluno,
  getDesafioByTurma,
  boundAlunoDesafio,
  unboundAlunoDesafio,
  uploadFileDesafio,
  getAvisosByTurmaAluno,
  notifyUser,
  cleanNotifyUser,
  updateSenhaUsuario,
})(index);
