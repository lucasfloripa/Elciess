import React, { Fragment } from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";

function FormLogin({ onLogin, onToggleForm }) {
  return (
    <Fragment>
      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onLogin(values);
        }}
      >
        <FormikForm>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" className="form-control border border-dark" />
            <ErrorMessage
              name="email"
              render={(message) => (
                <small className="text-danger font-weight-bold mt-5">
                  {message}
                </small>
              )}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <Field
              type="password"
              name="senha"
              className="form-control border border-dark"
            />
            <ErrorMessage
              name="senha"
              render={(message) => (
                <small className="text-danger font-weight-bold">
                  {message}
                </small>
              )}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block text-yellow border border-dark bg-white btn-hover-login"
          >
            Entrar
          </button>
          <div className="text-center">ou</div>
        </FormikForm>
      </Formik>
      <button
        className="btn btn-block text-yellow border border-dark bg-white btn-hover-login"
        onClick={onToggleForm}
      >
        Cadastrar
      </button>
    </Fragment>
  );
}

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Email inválido")
    .required("Preencha o campo Email"),
  senha: yup
    .string()
    .trim()
    .min(6, "6 caracteres necessários para senha")
    .required("Preencha o campo Senha"),
});

FormLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onToggleForm: PropTypes.func.isRequired,
};

export default FormLogin;
