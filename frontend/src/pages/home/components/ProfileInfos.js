import React from "react";
import PropTypes from "prop-types";

function ProfileInfos({ usuarioLogado: { nome, avatar } }) {
  return (
    <div className="d-flex">
      <img
        src={`http://localhost:5000/api/v1/usuarios/avatar/fotos/${avatar}`}
        alt="avatar"
        style={{
          width: "25%",
        }}
      />
      <div className="d-flex flex-column">
        <h3>{nome}</h3>
      </div>
    </div>
  );
}

ProfileInfos.propTypes = {
  usuarioLogado: PropTypes.object.isRequired,
};

export default ProfileInfos;
