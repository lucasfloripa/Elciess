import React from "react";
import PropTypes from "prop-types";

// Components
import TableNoticiasAvisos from "./components/TableNoticiasAvisos";
import ProfileInfos from "./components/ProfileInfos";
import ButtomHomeActions from "./components/ButtomHomeActions";
import FormEditProfile from "./components/FormEditProfile";
import FormEditSenha from "./components/FormEditSenha";

function Home({
  usuarioLogado,
  avisos,
  onLogout,
  onUpdateAluno,
  onUpdateSenhaAluno,
  onToggleEditInfo,
  onToggleEditSenha,
  onShowModalAvatares,
  onShowModalNoticiaAviso,
  toggleInfoEditStatus,
  toggleSenhaEditStatus,
  alertaTipo,
  alertaMensagem,
}) {
  return (
    <section id="section-home-aluno" className="section">
      <div className="container-fluid p-0 h-100">
        <ButtomHomeActions
          onLogout={onLogout}
          onToggleEditInfo={onToggleEditInfo}
          onToggleEditSenha={onToggleEditSenha}
        />
        <div className="d-flex h-100">
          <div className="col-md-6 p-0">
            <ProfileInfos usuarioLogado={usuarioLogado} />
            {toggleInfoEditStatus && (
              <FormEditProfile
                usuarioLogado={usuarioLogado}
                onUpdateAluno={onUpdateAluno}
                onToggleEditInfo={onToggleEditInfo}
                alertaTipo={alertaTipo}
                alertaMensagem={alertaMensagem}
                onShowModalAvatares={onShowModalAvatares}
              />
            )}
            {toggleSenhaEditStatus && (
              <FormEditSenha
                onUpdateSenhaAluno={onUpdateSenhaAluno}
                onToggleEditSenha={onToggleEditSenha}
                alertaTipo={alertaTipo}
                alertaMensagem={alertaMensagem}
              />
            )}
          </div>
          <div className="col-md-6 p-0">
            <TableNoticiasAvisos
              avisos={avisos}
              onShowModal={onShowModalNoticiaAviso}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  usuarioLogado: PropTypes.object.isRequired,
  avisos: PropTypes.array.isRequired,
  onLogout: PropTypes.func.isRequired,
  onUpdateAluno: PropTypes.func.isRequired,
  onUpdateSenhaAluno: PropTypes.func.isRequired,
  onToggleEditInfo: PropTypes.func.isRequired,
  onToggleEditSenha: PropTypes.func.isRequired,
  onShowModalNoticiaAviso: PropTypes.func.isRequired,
  onShowModalAvatares: PropTypes.func.isRequired,
  toggleInfoEditStatus: PropTypes.bool.isRequired,
  toggleSenhaEditStatus: PropTypes.bool.isRequired,
  alertaTipo: PropTypes.string,
  alertaMensagem: PropTypes.string,
};

export default Home;
