import React, { Fragment } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import formatarData from "../../../utils/formatDate";
import PropTypes from "prop-types";

function TableDesafiosAceitos({ usuarioId, desafiosDoAluno, onShowModal }) {
  return (
    <Fragment>
      <h2 className="text-white text-center mt-5">Desafios Aceitos</h2>
      <div className="bg-opacity-update-profile mx-5">
        <div className="quadro-avisos">
          <table className="table table-striped table-borderless table-hover text-white text-center">
            <thead>
              <tr>
                <th scope="col">Início</th>
                <th scope="col">Término</th>
                <th scope="col">Matéria</th>
                <th scope="col">Título</th>
                <th scope="col">Enviado</th>
              </tr>
            </thead>
            <tbody>
              {desafiosDoAluno.map((desafio, index) => (
                <tr
                  key={desafio._id}
                  onClick={() =>
                    desafio.entregue.includes(usuarioId)
                      ? null
                      : onShowModal(desafio)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <td>{formatarData(desafio.criadoEm)}</td>
                  <td>{formatarData(desafio.criadoEm)}</td>
                  <td>{desafio.professor.disciplina}</td>
                  <td>{desafio.titulo}</td>
                  <td>
                    <Icon
                      icon="check-circle"
                      color={
                        desafio.entregue.includes(usuarioId) ? "#66ff00" : null
                      }
                    />
                    {}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

TableDesafiosAceitos.propTypes = {
  usuarioId: PropTypes.string.isRequired,
  desafiosDoAluno: PropTypes.array.isRequired,
  onShowModal: PropTypes.func.isRequired,
};

export default TableDesafiosAceitos;
