import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/userActions";

// Components
import FormLogin from "../components/FormLogin";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(values) {
    console.log(values);
  }

  render() {
    return (
      <div id="login-section">
        <div className="card mx-auto px-3" style={{ width: "30%" }}>
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

const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default connect(mapStateToProps, { getUsers })(Login);
