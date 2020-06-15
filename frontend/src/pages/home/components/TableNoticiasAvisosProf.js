import React, { Fragment } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import formatarData from "../../../utils/formatDate";
import PropTypes from "prop-types";

function TableNoticiasAvisosProf({ avisos }) {
  return (
    <Fragment>
      <h2 className="text-center mt-5">Avisos Ativos</h2>
      <div className="bg-opacity-avisos">
        <div className="quadro-avisos">
          <table className="table table-striped table-borderless table-hover font-weight-bold text-center">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Assunto</th>
                <th scope="col">Turma</th>
                <th scope="col">Opções</th>
              </tr>
            </thead>
            <tbody>
              {avisos.map((aviso) => (
                <tr key={aviso._id}>
                  <td>{formatarData(aviso.criadoEm)}</td>
                  <td>{aviso.assunto}</td>
                  <td>{aviso.turma.codigo}</td>
                  <td className="d-flex justify-content-around">
                    <Icon icon="edit" color="green" />
                    <Icon icon="trash-alt" color="red" />
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

TableNoticiasAvisosProf.propTypes = {
  avisos: PropTypes.object.isRequired,
};

export default TableNoticiasAvisosProf;
