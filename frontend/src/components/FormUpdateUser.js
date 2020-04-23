import React, { Fragment } from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";

function FormUpdateUser({ user, onUpdate, onToggleEdit, toggleEditStatus }) {
  const { nome, email, dataNasc, endereço, telefone } = user;

  return (
    <Fragment>
      <Formik
        initialValues={{
          nome,
          email,
          dataNasc,
          endereço,
          telefone,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => onUpdate(values)}
      >
        <FormikForm>
          <fieldset disabled={toggleEditStatus}>
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
            {!toggleEditStatus ? (
              <button type="submit" className="btn btn-success btn-block">
                Salvar
              </button>
            ) : null}
          </fieldset>
        </FormikForm>
      </Formik>
      <button onClick={onToggleEdit} className="btn btn-primary btn-block mt-3">
        {toggleEditStatus ? "Editar" : "Voltar"}
      </button>
    </Fragment>
  );
}

FormUpdateUser.propTypes = {
  user: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  toggleEditStatus: PropTypes.bool.isRequired,
};

const validationSchema = yup.object({
  nome: yup.string().trim().required("Informe seu nome completo"),
  email: yup
    .string()
    .trim()
    .email("Email inválido")
    .required("Informe um email válido"),
  endereço: yup.string().trim().required("Informe seu endereço completo"),
  telefone: yup.number().required("Informe seu telefone ou celular"),
  dataNasc: yup.date().required("Informe sua data de nascimento"),
});

export default FormUpdateUser;
