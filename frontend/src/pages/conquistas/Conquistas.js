import React from "react";
import { connect } from "react-redux";

function Conquistas({ tipoUsuario }) {
  return (
    <section id="section-conquistas" className="section">
      <div className="container-fluid p-0 h-100">
        <h1 className="text-center">CONQUISTAS</h1>
        <div className="d-flex">
          <div className="col-md-6">Left side</div>
          <div className="col-md-6">Right side</div>
        </div>
      </div>
    </section>
  );
}

const mapStateTopros = (state) => ({
  tipoUsuario: state.auth.usuario.data.tipoUsuario,
});

export default connect(mapStateTopros)(Conquistas);
