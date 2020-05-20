import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

function ModalDesafiosDisponiveis({
  showModal,
  desafio,
  onUnboundAlunoDesafio,
  onToggleShowModal,
  onUploadFileDesafio,
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
            className="btn btn-outline-danger mr-3"
            onClick={() => {
              onUnboundAlunoDesafio(desafio._id);
              onToggleShowModal();
            }}
          >
            Cancelar
          </button>
          <form
            onSubmit={() => {
              onUploadFileDesafio(desafio._id);
              onToggleShowModal();
            }}
            method="POST"
            encType="multipart/form-data"
          >
            <div>
              <label>arquivo:</label>
              <input type="file" name="file" id="file" />
            </div>
            <div>
              <input type="submit" name="Sub" value="Upload" />
            </div>
          </form>
        </div>
      </div>
    </ReactModal>
  );
}

ModalDesafiosDisponiveis.propTypes = {
  showModal: PropTypes.bool.isRequired,
  desafio: PropTypes.object.isRequired,
  onUnboundAlunoDesafio: PropTypes.func.isRequired,
  onToggleShowModal: PropTypes.func.isRequired,
  onUploadFileDesafio: PropTypes.func.isRequired,
};

export default ModalDesafiosDisponiveis;
