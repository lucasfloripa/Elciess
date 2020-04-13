import React, { Component } from "react";
import { connect } from "react-redux";
import { getAlunos } from "../store/actions/alunoActions";

// Components
import FormLogin from "../components/FormLogin";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAlunos();
  }

  render() {
    console.log(this.props.alunos.data);

    return (
      <div className="section">
        <div className="card mx-auto px-3" style={{ width: "30%" }}>
          <div className="card-body text-center">
            <h2 className="card-title py-3">Elciess</h2>
            <FormLogin />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  alunos: state.aluno.alunos,
});

export default connect(mapStateToProps, { getAlunos })(Login);
