import React from "react";
import PropTypes from "prop-types";
import avatar from "../../../assets/images/avatar.jpeg";

// Components
import TableNoticiasAvisos from "../../../components/TableNoticiasAvisos";
import ProfileInfos from "../../../components/ProfileInfos";
import ButtomHomeActions from "../../../components/ButtomHomeActions";
import FormEditProfile from "../../../components/FormEditProfile";
import FormEditSenha from "../../../components/FormEditSenha";

function Home({
  usuarioLogado,
  onLogout,
  onUpdateAluno,
  onUpdateSenhaAluno,
  onToggleEditInfo,
  onToggleEditSenha,
  toggleInfoEditStatus,
  toggleSenhaEditStatus,
}) {
  return (
    <section id="section-home" className="section">
      <div className="container-fluid p-0 h-100">
        <ButtomHomeActions
          onLogout={onLogout}
          onToggleEditInfo={onToggleEditInfo}
          onToggleEditSenha={onToggleEditSenha}
        />
        <div className="d-flex h-100">
          <div className="col-md-6 p-0">
            <ProfileInfos usuarioLogado={usuarioLogado} avatar={avatar} />
            {toggleInfoEditStatus && (
              <FormEditProfile
                usuarioLogado={usuarioLogado}
                onUpdateAluno={onUpdateAluno}
                onToggleEditInfo={onToggleEditInfo}
              />
            )}
            {toggleSenhaEditStatus && (
              <FormEditSenha
                onUpdateSenhaAluno={onUpdateSenhaAluno}
                onToggleEditSenha={onToggleEditSenha}
              />
            )}
          </div>
          <div className="col-md-6 p-0">
            <TableNoticiasAvisos />
          </div>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  usuarioLogado: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onUpdateAluno: PropTypes.func.isRequired,
  onUpdateSenhaAluno: PropTypes.func.isRequired,
  onToggleEditInfo: PropTypes.func.isRequired,
  onToggleEditSenha: PropTypes.func.isRequired,
  toggleInfoEditStatus: PropTypes.bool.isRequired,
  toggleSenhaEditStatus: PropTypes.bool.isRequired,
};

export default Home;
