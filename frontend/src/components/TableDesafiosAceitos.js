import React, { Fragment } from "react";
import formatarData from "../utils/formatDate";
import PropTypes from "prop-types";

function TableDesafiosAceitos({ desafiosDoAluno, onShowModal }) {
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
                <th scope="col">Experiência</th>
              </tr>
            </thead>
            <tbody>
              {desafiosDoAluno.map((desafio, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    onShowModal(desafio);
                  }}
                >
                  <td>{formatarData(desafio.criadoEm)}</td>
                  <td>{formatarData(desafio.criadoEm)}</td>
                  <td>{desafio.professor.disciplina}</td>
                  <td>{desafio.titulo}</td>
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

TableDesafiosAceitos.propTypes = {
  desafiosDoAluno: PropTypes.array.isRequired,
  onShowModal: PropTypes.func.isRequired,
};

export default TableDesafiosAceitos;
