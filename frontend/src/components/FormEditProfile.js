import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";

function FormEditProfile({
  onUpdateAluno,
  onToggleEditInfo,
  usuarioLogado: { nome, email },
}) {
  return (
    <div className="bg-opacity-update-profile">
      <div className="form-update-profile">
        <Formik
          initialValues={{
            nome,
            email,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onUpdateAluno(values);
          }}
        >
          <FormikForm className="px-5 pt-5">
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
                name="email"
                className="form-control"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                render={(message) => (
                  <small className="text-danger font-weight-bold mt-5">
                    {message}
                  </small>
                )}
              />
            </div>
            <button type="submit" className="btn btn-outline-success btn-block">
              Confirmar
            </button>
          </FormikForm>
        </Formik>
        <div className="px-5 mt-3">
          <button
            onClick={onToggleEditInfo}
            className="btn btn-outline-danger btn-block"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

FormEditProfile.propTypes = {
  usuarioLogado: PropTypes.object.isRequired,
  onUpdateAluno: PropTypes.func.isRequired,
  onToggleEditInfo: PropTypes.func.isRequired,
};

const validationSchema = yup.object({
  nome: yup.string().trim().required("Informe seu nome completo"),
  email: yup
    .string()
    .trim()
    .email("Email inválido")
    .required("Informe um email válido"),
});

export default FormEditProfile;
