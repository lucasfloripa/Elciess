import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

function ButtomHomeActions({ onLogout, onToggleEditInfo, onToggleEditSenha }) {
  return (
    <div className="cog-icon dropleft">
      <Icon
        icon="cogs"
        color="black"
        size="3x"
        className="dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      />
      <div className="dropdown-menu text-center border-0">
        <p className="m-0 py-1" onClick={onToggleEditInfo}>
          Editar Perfil
        </p>
        <p className="m-0 py-1" onClick={onToggleEditSenha}>
          Alterar Senha
        </p>
        <p className="m-0 py-1" onClick={onLogout}>
          Logout
        </p>
      </div>
    </div>
  );
}

ButtomHomeActions.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onToggleEditInfo: PropTypes.func.isRequired,
  onToggleEditSenha: PropTypes.func.isRequired,
};

export default ButtomHomeActions;
