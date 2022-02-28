import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function LoginForm({ showRegisterForm }) {
  return (
    <Form className="login-form">
      <Form.Input name="identifier" type="text" placeholder="Email" />
      <Form.Input name="password" type="password" placeholder="Contraseña" />
      <div className="actions">
        <Button type="button" basic onClick={showRegisterForm}>
          ¡Registrate!
        </Button>
        <div>
          <Button className="submit" type="submit">
            Entrar
          </Button>
          <Button type="button">¡Has olvidado tu contraseña? 🤔</Button>
        </div>
      </div>
    </Form>
  );
}
