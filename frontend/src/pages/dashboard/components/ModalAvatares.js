import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

function ModalAvatares({
  avataresId,
  showModal,
  onToggleShowModal,
  onSetUsuarioAvatar,
}) {
  if (avataresId) {
    return (
      <ReactModal
        isOpen={showModal}
        ariaHideApp={false}
        className="mx-auto mt-5"
        style={{
          overlay: {
            position: "fixed",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
          content: {
            width: "40%",
            border: "1px solid #ccc",
            background: "#eee",
            overflow: "auto",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <div className="text-center">
          <h2>Avatares</h2>
          <hr />
          <div className="d-flex flex-wrap justify-content-start">
            {avataresId.map((id) => (
              <Fragment key={id}>
                <img
                  className="p-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    onSetUsuarioAvatar(id);
                  }}
                  src={`http://localhost:5000/api/v1/usuarios/avatar/fotos/${id}`}
                />
              </Fragment>
            ))}
          </div>
          <div className="d-flex justify-content-end">
            <button
              style={{ width: "15%" }}
              className="btn btn-outline-primary mr-3"
              onClick={() => {
                onToggleShowModal();
              }}
            >
              Voltar
            </button>
          </div>
        </div>
      </ReactModal>
    );
  } else {
    return <h1>Loading ...</h1>;
  }
}

ModalAvatares.propTypes = {
  avataresId: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  onToggleShowModal: PropTypes.func.isRequired,
  onSetUsuarioAvatar: PropTypes.func.isRequired,
};

export default ModalAvatares;
