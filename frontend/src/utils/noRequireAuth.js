import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function (ComposedComponent) {
  class NoAuthentication extends Component {
    componentWillMount() {
      if (this.props.isAuthenticated) {
        this.props.history.push("/test");
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated) {
        this.props.history.push("/test");
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
    return { isAuthenticated: state.auth.isAuthenticated };
  }
  return connect(mapStateToProps, null)(NoAuthentication);
}
