import React from "react";
import Alert from "../../../utils/alert";
import PropTypes from "prop-types";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";

function FormEditProfile({
  onUpdateAluno,
  onToggleEditInfo,
  usuarioLogado: { nome },
  alertaTipo,
  alertaMensagem,
  onShowModalAvatares,
}) {
  return (
    <div className="bg-opacity-update-profile">
      <div className="form-update-profile">
        <h3 className="text-center mt-3">Editar Perfil</h3>
        <Formik
          initialValues={{
            nome,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onUpdateAluno(values);
          }}
        >
          <FormikForm className="px-5 pt-3">
            <div className="form-group">
              <Field name="nome" className="form-control" placeholder="Nome" />
              <ErrorMessage
                name="nome"
                render={(message) => (
                  <small className="text-danger font-weight-bold mt-5">
                    {message}
                  </small>
                )}
              />
            </div>
            <div className="form-group">
              <Field
                as={AvatarInput}
                name="avatar"
                onClick={() => {
                  onShowModalAvatares();
                }}
              />
            </div>
            <button type="submit" className="btn btn-outline-success btn-block">
              Confirmar
            </button>
          </FormikForm>
        </Formik>
        <div className="px-5 mt-2">
          <button
            onClick={onToggleEditInfo}
            className="btn btn-outline-danger btn-block"
          >
            Cancelar
          </button>
          {alertaMensagem ? (
            <Alert mensagemTipo={alertaTipo} mensagem={alertaMensagem} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

const AvatarInput = (props) => (
  <div className="btn btn-outline-secondary btn-block" {...props}>
    Avatar
  </div>
);

FormEditProfile.propTypes = {
  usuarioLogado: PropTypes.object.isRequired,
  onUpdateAluno: PropTypes.func.isRequired,
  onToggleEditInfo: PropTypes.func.isRequired,
  onShowModalAvatares: PropTypes.func.isRequired,
  alertaTipo: PropTypes.string,
  alertaMensagem: PropTypes.string,
};

const validationSchema = yup.object({
  nome: yup.string().trim().required("Informe seu nome completo"),
});

export default FormEditProfile;
