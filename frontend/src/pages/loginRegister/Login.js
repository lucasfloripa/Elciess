import React, { Component } from "react";
import Alert from "../../utils/alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions
import { login } from "../../store/actions/authActions";
import { getTurmas } from "../../store/actions/turmaActions";
import { createAluno } from "../../store/actions/alunoActions";
import { createProfessor } from "../../store/actions/professorActions";
import {
  notifyUser,
  cleanNotifyUser,
} from "../../store/actions/notificacaoActions";

// Components
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import CarouselLogin from "./components/CarouselLogin";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: true,
      showRegisterForm: false,
      isRegisterAluno: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleToggleForm = this.handleToggleForm.bind(this);
  }

  componentDidMount() {
    this.props.getTurmas();
  }

  componentDidUpdate() {
    if (this.props.notificacao.mensagem !== null) {
      setTimeout(() => this.props.cleanNotifyUser(), 5000);
    }
  }

  handleToggleForm() {
    this.setState({
      showLoginForm: !this.state.showLoginForm,
      showRegisterForm: !this.state.showRegisterForm,
    });
  }

  handleLogin({ email, senha }) {
    const { login, notifyUser } = this.props;
    login(email, senha).catch((err) => notifyUser("Login inválido", "erro"));
  }

  handleRegister(values) {
    const { createAluno, createProfessor, notifyUser } = this.props;

    if (values.senha === values.confirmaSenha) {
      const { nome, email, senha, tipoUsuario } = values;

      const novoUsuario = {
        nome,
        email,
        senha,
      };

      if (tipoUsuario === "aluno") {
        createAluno({ ...novoUsuario, turma: values.turma });
      } else if (tipoUsuario === "professor") {
        createProfessor(novoUsuario);
      }
    } else {
      notifyUser("Confirmar senha inválido", "erro");
    }
  }

  handleIsRegisterAluno() {
    this.setState({ isRegisterAluno: true });
  }

  render() {
    const { mensagemTipo, mensagem } = this.props.notificacao;
    const { showLoginForm, showRegisterForm } = this.state;
    const { turmas } = this.props;

    if (turmas) {
      return (
        <div id="login-section" className="h-100">
          <div className="container-fluid d-flex h-100 p-0">
            <div className="col-md-4">
              <div className="mx-auto w-50 login-left-col">
                <h2 className="text-center text-yellow py-3">ELCIESS</h2>
                {showLoginForm && (
                  <FormLogin
                    onLogin={this.handleLogin}
                    onToggleForm={this.handleToggleForm}
                  />
                )}
                {showRegisterForm && (
                  <FormRegister
                    onRegister={this.handleRegister}
                    onToggleForm={this.handleToggleForm}
                    onRegisterAluno={this.handleIsRegisterAluno}
                    turmas={turmas}
                  />
                )}
                {mensagem ? (
                  <Alert mensagemTipo={mensagemTipo} mensagem={mensagem} />
                ) : null}
              </div>
            </div>
            <div className="col-md-8 px-0">
              <CarouselLogin />
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  notifyUser: PropTypes.func.isRequired,
  cleanNotifyUser: PropTypes.func.isRequired,
  createAluno: PropTypes.func.isRequired,
  createProfessor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notificacao: state.notificacao,
  turmas: state.turma.turmas.data,
});

export default connect(mapStateToProps, {
  login,
  notifyUser,
  cleanNotifyUser,
  createAluno,
  createProfessor,
  getTurmas,
})(Login);
