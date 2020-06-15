import React from "react";
import PropTypes from "prop-types";

// Components
import TableNoticiasAvisosProf from "./components/TableNoticiasAvisosProf";

function HomeProfessor({ avisos }) {
  return (
    <section id="section-home-professor" className="section">
      <div className="container-fluid p-0 h-100">
        <div className="d-flex h-100">
          <div className="col-md-6 p-0">asd</div>
          <div className="col-md-6 p-0">
            <TableNoticiasAvisosProf avisos={avisos} />
          </div>
        </div>
      </div>
    </section>
  );
}

TableNoticiasAvisosProf.propTypes = {
  avisos: PropTypes.object.isRequired,
};

export default HomeProfessor;
