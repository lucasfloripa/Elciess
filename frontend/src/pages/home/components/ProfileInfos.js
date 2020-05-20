import React from "react";
import PropTypes from "prop-types";

function ProfileInfos({ usuarioLogado: { nome }, avatar }) {
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
      </div>
    </div>
  );
}

ProfileInfos.propTypes = {
  usuarioLogado: PropTypes.object.isRequired,
  avatar: PropTypes.node.isRequired,
};

export default ProfileInfos;
