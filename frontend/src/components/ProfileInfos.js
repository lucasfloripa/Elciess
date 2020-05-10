import React from "react";
import PropTypes from "prop-types";

function ProfileInfos({ usuarioLogado: { nome, titulos, nivel, experiencia }, avatar }) {
  return (
    <div className="d-flex">
      <img
        src={avatar}
        alt="avatar"
        style={{
          width: "25%",
          borderRight: "5px solid black",
          borderBottom: "5px solid black",
        }}
      />
      <div className="d-flex flex-column">
        <h3>{nome}</h3>
        <h3>{titulos[0]}</h3>
        <h3>Nível {nivel}</h3>
        <h3>Experiência {experiencia}</h3>
      </div>
    </div>
  );
}

ProfileInfos.propTypes = {
  usuarioLogado: PropTypes.object.isRequired,
  avatar: PropTypes.node.isRequired,
};

export default ProfileInfos;
