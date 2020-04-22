import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/authActions";
import PropTypes from "prop-types";

// Components
import FormLogin from "../components/FormLogin";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin({ email, senha }) {
    this.props.login(email, senha);
  }

  render() {
    return (
      <div id="login-section">
        <div className="card mx-auto px-3 w-25">
          <div className="card-body">
            <h2 className="card-title text-center py-3">ELCIESS</h2>
            <FormLogin onLogin={this.handleLogin} />
            <a href="#" className="mt-3">
              Esqueceu a senha?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
