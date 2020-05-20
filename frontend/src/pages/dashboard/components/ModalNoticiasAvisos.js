import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

function ModalNoticiasAvisos({ aviso, showModal, onToggleShowModal }) {
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
        <h2>{aviso.assunto}</h2>
        <hr />
        <p>{aviso.descricao}</p>
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
}

ModalNoticiasAvisos.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onToggleShowModal: PropTypes.func.isRequired,
};

export default ModalNoticiasAvisos;
