import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateEmailAPi } from "../../../api/user";

export default function ChangeEmailForm({ user, logout, setReloadUser }) {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateEmailAPi(user.id, formData.email, logout);
      if (!response) {
        toast.error("Error al actualizar el email 😶‍🌫️");
      } else if (response?.statusCode === 400) {
        toast.error("Ese email ya está registrado 😶‍🌫️");
      } else {
        setReloadUser(true);
        toast.success("¡Te hemos cambiado el email 🤘🏻!");
        formik.handleReset();
      }

      setLoading(false);
    },
  });
  return (
    <div className="change-email-form">
      <h4>Cambia tu email</h4>
      <p>
        tu correo actual es: <span>{user.email}</span>
      </p>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="email"
            placeholder="Cambia tu email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          <Form.Input
            name="repeatEmail"
            placeholder="Confirma tu email"
            onChange={formik.handleChange}
            value={formik.values.repeatEmail}
            error={formik.errors.repeatEmail}
          />
        </Form.Group>
        <Button className="submit" loading={loading}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}

function initialValues() {
  return {
    email: "",
    repeatEmail: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("repeatEmail")], "El email no coincide"),
    repeatEmail: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("email")], "El email no coincide"),
  };
}
