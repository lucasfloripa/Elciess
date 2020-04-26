import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function (ComposedComponent) {
  class NoAuthentication extends Component {
    componentWillMount() {
      if (this.props.autenticado) {
        this.props.history.push("/dashboard");
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.autenticado) {
        this.props.history.push("/dashboard");
      }
    }
    PropTypes = {
      router: PropTypes.object,
    };
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { autenticado: state.auth.autenticado };
  }
  return connect(mapStateToProps, null)(NoAuthentication);
}
