import React, { Component } from "react";
import { connect } from "react-redux";
import { createAluno } from "../store/actions/alunoActions";
import { createProfessor } from "../store/actions/professorActions";
import PropTypes from "prop-types";

// Components
import FormRegister from "../components/FormRegister";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(values) {
    const { createAluno, createProfessor } = this.props;
    const { nome, email, senha, tipoUsuario } = values;

    const novoUsuario = {
      nome,
      email,
      senha,
    };

    if (tipoUsuario === "aluno") {
      createAluno(novoUsuario);
    } else if (tipoUsuario === "professor") {
      createProfessor(novoUsuario);
    }
  }

  render() {
    return (
      <section id="register-section">
        <div className="card mx-auto px-3" style={{ width: "30%" }}>
          <div className="card-body">
            <h2 className="card-title text-center py-3">Cadastro</h2>
            <FormRegister onRegister={this.handleRegister} />
          </div>
        </div>
      </section>
    );
  }
}

Register.propTypes = {
  createAluno: PropTypes.func.isRequired,
  createProfessor: PropTypes.func.isRequired,
};

export default connect(null, { createAluno, createProfessor })(Register);
