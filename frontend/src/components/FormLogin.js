import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";

function FormLogin(props) {
  return (
    <Fragment>
      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          props.onLogin(values);
        }}
      >
        <FormikForm>
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
                <small className="text-danger font-weight-bold">
                  {message}
                </small>
              )}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary btn-block">
            Entrar
          </button>
          <div className="text-center">ou</div>
        </FormikForm>
      </Formik>
      <Link to={"/register"} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success btn-block">Cadastrar</button>
      </Link>
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

export default FormLogin;
