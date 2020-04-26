import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.autenticado) {
        this.props.history.push("/login");
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.autenticado) {
        this.props.history.push("/login");
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
  return connect(mapStateToProps, null)(Authentication);
}
