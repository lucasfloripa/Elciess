import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";
import toaster from "toasted-notes";

function FormRegister(props) {
  return (
    <Fragment>
      <Formik
        initialValues={{
          tipoUsuario: "",
          nome: "",
          email: "",
          dataNasc: "",
          endereço: "",
          telefone: "",
          senha: "",
          confirmaSenha: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const { senha, confirmaSenha } = values;
          if (senha === confirmaSenha) {
            props.onRegister(values);
          } else {
            toaster.notify(
              <div className="text-danger font-weight-bold">
                A senha informada deve igual a confirmação de senha
              </div>,
              {
                duration: 5000,
                position: "bottom",
              }
            );
          }
        }}
      >
        <FormikForm>
          <div className="form-group">
            <Field as="select" name="tipoUsuario" className="custom-select">
              <option value=""></option>
              <option value="aluno">Aluno</option>
              <option value="professor">Professor</option>
              <option value="responsavel">Responsável</option>
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
              name="dataNasc"
              className="form-control"
              placeholder="Data de Nascimento"
            />
            <ErrorMessage
              name="dataNasc"
              render={(message) => (
                <small className="text-danger font-weight-bold mt-5">
                  {message}
                </small>
              )}
            />
          </div>
          <div className="form-group">
            <Field
              name="endereço"
              className="form-control"
              placeholder="Endereço"
            />
            <ErrorMessage
              name="endereço"
              render={(message) => (
                <small className="text-danger font-weight-bold mt-5">
                  {message}
                </small>
              )}
            />
          </div>
          <div className="form-group">
            <Field
              name="telefone"
              className="form-control"
              placeholder="Telefone"
            />
            <ErrorMessage
              name="telefone"
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
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <button type="button" className="btn btn-outline-secondary btn-block">
          Voltar
        </button>
      </Link>
    </Fragment>
  );
}

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
    .min(8, "8 caracteres necessários para senha")
    .required("Informe uma senha válida"),
  confirmaSenha: yup
    .string()
    .trim()
    .min(8, "8 caracteres necessários para senha")
    .required("Informe uma senha válida"),
  endereço: yup.string().trim().required("Informe seu endereço completo"),
  telefone: yup.number().required("Informe seu telefone ou celular"),
  tipoUsuario: yup.string().required("Informe o tipo do usuário"),
  dataNasc: yup.date().required("Informe sua data de nascimento"),
});

export default FormRegister;
