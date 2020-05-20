import React, { Fragment } from "react";
import formatarData from "../../../utils/formatDate";
import PropTypes from "prop-types";

function TableNoticiasAvisos({ avisos, onShowModal }) {
  return (
    <Fragment>
      <h2 className="text-center mt-5">Notícias e Avisos Gerais</h2>
      <div className="bg-opacity-avisos">
        <div className="quadro-avisos">
          <table className="table table-striped table-borderless table-hover font-weight-bold">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Assunto</th>
                <th scope="col">Responsável</th>
              </tr>
            </thead>
            <tbody>
              {avisos.map((aviso) => (
                <tr
                  key={aviso._id}
                  onClick={() => onShowModal(aviso)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{formatarData(aviso.criadoEm)}</td>
                  <td>{aviso.assunto}</td>
                  <td>{aviso.professor.nome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

TableNoticiasAvisos.propTypes = {
  avisos: PropTypes.array.isRequired,
  onShowModal: PropTypes.func.isRequired,
};

export default TableNoticiasAvisos;
