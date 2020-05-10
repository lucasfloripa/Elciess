import React, { Fragment } from "react";

function TableNoticiasAvisos() {
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
              <tr>
                <td>20/08</td>
                <td>Reunião Mensal</td>
                <td>Jucelio</td>
              </tr>
              <tr>
                <td>22/06</td>
                <td>Encontro Recreativo</td>
                <td>Rose</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default TableNoticiasAvisos;
