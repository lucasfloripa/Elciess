import React from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";

const FormLogin = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={yup.object({
        email: yup
          .string()
          .email("Email inválido")
          .required("Preencha o campo"),
        password: yup.string().min(8).required("Preencha o campo"),
      })}
      onSubmit={() => {
        alert("ha");
      }}
    >
      <FormikForm>
        <div className="from-group">
          <Field type="text" name="email" className="form-control" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-group">
          <Field type="password" name="password" className="form-control" />
          <ErrorMessage name="password" />
        </div>
        <button className="btn btn-primary btn-block">Entrar</button>
        <span>or</span>
        <button className="btn btn-secondary btn-block">Registrar</button>
      </FormikForm>
    </Formik>
  );
};

export default FormLogin;
