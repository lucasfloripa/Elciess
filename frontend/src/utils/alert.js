import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Alert = ({ mensagem, mensagemTipo }) => {
  return (
    <div
      className={classnames("mt-3 font-weight-bold text-center alert", {
        "alert-success text-success": mensagemTipo === "sucesso",
        "alert-danger text-danger": mensagemTipo === "erro",
      })}
    >
      {mensagem}
    </div>
  );
};

Alert.propTypes = {
  mensagem: PropTypes.string.isRequired,
  mensagemTipo: PropTypes.string.isRequired,
};

export default Alert;
