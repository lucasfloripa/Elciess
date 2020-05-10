import React, { Fragment } from "react";
import formatarData from "../utils/formatDate";
import PropTypes from "prop-types";

function TableDesafiosDisponiveis({ desafiosDisponiveis, onShowModal }) {
  return (
    <Fragment>
      <h2 className="text-white text-center mt-5">Desafios Propostos</h2>
      <div className="bg-opacity-update-profile mx-5">
        <div className="quadro-avisos">
          <table className="table table-striped table-borderless table-hover text-white text-center">
            <thead>
              <tr>
                <th scope="col">Início</th>
                <th scope="col">Término</th>
                <th scope="col">Matéria</th>
                <th scope="col">Professor</th>
                <th scope="col">Experiência</th>
              </tr>
            </thead>
            <tbody>
              {desafiosDisponiveis.map((desafio, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    onShowModal(desafio);
                  }}
                >
                  <td>{formatarData(desafio.criadoEm)}</td>
                  <td>{formatarData(desafio.criadoEm)}</td>
                  <td>{desafio.professor.disciplina}</td>
                  <td>{desafio.professor.nome}</td>
                  <td>{desafio.experiencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

TableDesafiosDisponiveis.propTypes = {
  desafiosDisponiveis: PropTypes.array.isRequired,
  onShowModal: PropTypes.func.isRequired,
};

export default TableDesafiosDisponiveis;
