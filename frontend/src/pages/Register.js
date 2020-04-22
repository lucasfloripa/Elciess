import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../store/actions/userActions";
import toaster from "toasted-notes";
import PropTypes from "prop-types";

// Components
import FormRegister from "../components/FormRegister";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(values) {
    const { history, createUser } = this.props;
    createUser(values).then(history.push("/login"));
    toaster.notify(
      <div className="text-success font-weight-bold">Usuário Criado</div>,
      {
        duration: 3000,
        position: "top",
      }
    );
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
  createUser: PropTypes.func.isRequired,
};

export default connect(null, { createUser })(Register);
