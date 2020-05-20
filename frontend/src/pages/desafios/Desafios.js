import React from "react";
import PropTypes from "prop-types";

// Components
import TableDesafiosDisponiveis from "./components/TableDesafiosDisponiveis";
import TableDesafiosAceitos from "./components/TableDesafiosAceitos";

function Desafios({
  usuarioId,
  desafiosDoAluno,
  desafiosDisponiveis,
  onShowModalDesafioDisponivel,
  onShowModalDesafioAceito,
}) {
  return (
    <section id="section-desafios" className="section">
      <div className="container-fluid p-0 h-100">
        <h2 className="text-center text-white mt-5">DESAFIOS</h2>
        <div className="d-flex h-100">
          <div className="col-md-6 p-0">
            <TableDesafiosDisponiveis
              desafiosDisponiveis={desafiosDisponiveis}
              onShowModal={onShowModalDesafioDisponivel}
            />
          </div>
          <div className="col-md-6 p-0">
            <TableDesafiosAceitos
              usuarioId={usuarioId}
              desafiosDoAluno={desafiosDoAluno}
              onShowModal={onShowModalDesafioAceito}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Desafios.propTypes = {
  usuarioId: PropTypes.string.isRequired,
  desafiosDoAluno: PropTypes.array.isRequired,
  desafiosDisponiveis: PropTypes.array.isRequired,
  onShowModalDesafioDisponivel: PropTypes.func.isRequired,
  onShowModalDesafioAceito: PropTypes.func.isRequired,
};

export default Desafios;
