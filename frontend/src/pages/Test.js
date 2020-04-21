import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/authActions";

class Test extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Test);
