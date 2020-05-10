import React from "react";
import PropTypes from 'prop-types'
import ReactModal from "react-modal";

function ModalDesafiosDisponiveis({
  showModal,
  desafio,
  onBoundAlunoDesafio,
  onToggleShowModal,
}) {
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
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <div className="text-center">
        <h2>{desafio.titulo}</h2>
        <hr />
        <p>{desafio.descricao}</p>
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
          <button
            style={{ width: "15%" }}
            className="btn btn-outline-success"
            onClick={() => {
              onBoundAlunoDesafio(desafio._id);
              onToggleShowModal()
            }}
          >
            Aceitar
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

ModalDesafiosDisponiveis.propTypes = {
  showModal: PropTypes.bool.isRequired,
  desafio: PropTypes.object.isRequired,
  onBoundAlunoDesafio: PropTypes.func.isRequired,
  onToggleShowModal:PropTypes.func.isRequired,
}

export default ModalDesafiosDisponiveis;
