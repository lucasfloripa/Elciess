import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";

function FormRegister(props) {
  return (
    <Fragment>
      <Formik
        initialValues={{
          tipoUsuario: "",
          nome: "",
          email: "",
          senha: "",
          confirmaSenha: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (values.senha === values.confirmaSenha) {
            props.onRegister(values);
          }
        }}
      >
        <FormikForm>
          <div className="form-group">
            <Field as="select" name="tipoUsuario" className="custom-select">
              <option value=""></option>
              <option value="aluno">Aluno</option>
              <option value="professor">Professor</option>
            </Field>
            <ErrorMessage
              name="tipoUsuario"
              render={(message) => (
                <small className="text-danger font-weight-bold mt-5">
                  {message}
                </small>
              )}
            />
          </div>
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
            <Field name="email" className="form-control" placeholder="Email" />
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
            <Field
              type="password"
              name="senha"
              className="form-control"
              placeholder="Senha"
            />
            <ErrorMessage
              name="senha"
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
              name="confirmaSenha"
              className="form-control"
              placeholder="Confirma Senha"
            />
            <ErrorMessage
              name="confirmaSenha"
              render={(message) => (
                <small className="text-danger font-weight-bold mt-5">
                  {message}
                </small>
              )}
            />
          </div>
          <button type="submit" className="btn btn-outline-success btn-block">
            Registrar
          </button>
          <div className="text-center">ou</div>
        </FormikForm>
      </Formik>
      <Link to={"/login"} className="text-decoration-none">
        <button type="button" className="btn btn-outline-secondary btn-block">
          Voltar
        </button>
      </Link>
    </Fragment>
  );
}

FormRegister.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

const validationSchema = yup.object({
  nome: yup.string().trim().required("Informe seu nome completo"),
  email: yup
    .string()
    .trim()
    .email("Email inválido")
    .required("Informe um email válido"),
  senha: yup
    .string()
    .trim()
    .min(6, "6 caracteres necessários para senha")
    .required("Informe uma senha válida"),
  confirmaSenha: yup
    .string()
    .trim()
    .min(6, "6 caracteres necessários para senha")
    .required("Informe uma senha válida"),
  tipoUsuario: yup.string().required("Informe o tipo do usuário"),
});

export default FormRegister;
