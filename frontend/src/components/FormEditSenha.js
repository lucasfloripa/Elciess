import React from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";

function FormEditSenha({ onUpdateSenhaAluno, onToggleEditSenha }) {
  return (
    <div className="bg-opacity-update-profile">
      <div className="form-update-profile">
        <Formik
          initialValues={{
            senhaAtual: "",
            novaSenha: "",
            confirmaNovaSenha: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onUpdateSenhaAluno(values);
          }}
        >
          <FormikForm className="px-5 pt-5">
            <div className="form-group">
              <Field
                type="password"
                name="senhaAtual"
                className="form-control"
                placeholder="Senha Atual"
              />
              <ErrorMessage
                name="senhaAtual"
                render={(message) => (
                  <small className="text-danger font-weight-bold mt-5">
                    {message}
                  </small>
                )}
              />
            </div>
            <div className="form-group">
              <Field
                type="password"
                name="novaSenha"
                className="form-control"
                placeholder="Nova Senha"
              />
              <ErrorMessage
                name="novaSenha"
                render={(message) => (
                  <small className="text-danger font-weight-bold mt-5">
                    {message}
                  </small>
                )}
              />
            </div>
            <div className="form-group">
              <Field
                type="password"
                name="confirmaNovaSenha"
                className="form-control"
                placeholder="Confirma Nova Senha"
              />
              <ErrorMessage
                name="confirmaNovaSenha"
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
            onClick={onToggleEditSenha}
            type="button"
            className="btn btn-outline-danger btn-block"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

FormEditSenha.propTypes = {
  onUpdateSenhaAluno: PropTypes.func.isRequired,
  onToggleEditSenha: PropTypes.func.isRequired,
};

const validationSchema = yup.object({
  senhaAtual: yup
    .string()
    .trim()
    .min(6, "6 caracteres necessários para senha")
    .required("Informe uma senha válida"),
  novaSenha: yup
    .string()
    .trim()
    .min(6, "6 caracteres necessários para senha")
    .required("Informe uma senha válida"),
  confirmaNovaSenha: yup
    .string()
    .trim()
    .min(6, "6 caracteres necessários para senha")
    .required("Informe uma senha válida"),
});

export default FormEditSenha;
