import React, { Fragment } from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";

function FormRegister({ onRegister, onToggleForm, onRegisterAluno, turmas }) {
  return (
    <Fragment>
      <Formik
        initialValues={{
          tipoUsuario: "",
          turma: "",
          nome: "",
          email: "",
          senha: "",
          confirmaSenha: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onRegister(values);
        }}
      >
        {({ values: { tipoUsuario } }) => (
          <FormikForm>
            <div className="form-group">
              <Field
                as="select"
                name="tipoUsuario"
                className="custom-select border border-dark"
              >
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
            {tipoUsuario === "aluno" ? (
              <div className="form-group">
                <Field
                  as="select"
                  name="turma"
                  className="custom-select border border-dark"
                >
                  <option value="">Turmas</option>
                  {turmas.map((turma) => (
                    <option key={turma._id} value={turma._id}>
                      {turma.codigo}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="turma"
                  render={(message) => (
                    <small className="text-danger font-weight-bold mt-5">
                      {message}
                    </small>
                  )}
                />
              </div>
            ) : null}
            <div className="form-group">
              <Field
                name="nome"
                className="form-control border border-dark"
                placeholder="Nome"
              />
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
                className="form-control border border-dark"
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
            <div className="form-group">
              <Field
                type="password"
                name="senha"
                className="form-control border border-dark"
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
                className="form-control border border-dark"
                placeholder="Confirmar Senha"
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
            <button
              type="submit"
              className="btn btn-block text-yellow border border-dark bg-white btn-hover-login"
            >
              Registrar
            </button>
            <div className="text-center">ou</div>
          </FormikForm>
        )}
      </Formik>
      <button
        onClick={onToggleForm}
        type="button"
        className="btn btn-block text-yellow border border-dark bg-white btn-hover-login"
      >
        Voltar
      </button>
    </Fragment>
  );
}

FormRegister.propTypes = {
  onRegister: PropTypes.func.isRequired,
  onToggleForm: PropTypes.func.isRequired,
  onRegisterAluno: PropTypes.func.isRequired,
  turmas: PropTypes.array.isRequired,
};

const validationSchema = yup.object({
  nome: yup.string().trim().required("Informe seu nome completo"),
  turma: yup.string().trim().required("Informe uma turma"),
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
