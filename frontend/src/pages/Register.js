import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../store/actions/userActions";
import toaster from "toasted-notes";

// Components
import FormRegister from "../components/FormRegister";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(values) {
    const { history, createUser } = this.props;
    createUser(values).then(history.push("/"));
    toaster.notify(
      <div className="text-success font-weight-bold">Usuário Criado</div>,
      {
        duration: 5000,
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

export default connect(null, { createUser })(Register);
