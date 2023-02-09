import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../actions"

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <Formik
            initialValues={
                {
                    email: '',
                    password: ''
                }
            }

            validate={(valores) => {
                let errores = {};

                //Validation Email
                if (!valores.email) {
                    errores.email = "Please enter the email"
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                    errores.email = "Invalid email"
                }

                //Validation 
                return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
                dispatch(LoginUser(valores))
                resetForm();
                console.log("Formulario enviado");
                cambiarFormularioEnviado(true);
                setTimeout(() => cambiarFormularioEnviado(false), 5000)
                /*     navigate('/home') */

            }}
        >
            {({ errors }) => (
                <Form >
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="matias_aguirre@gmail.com"
                        />
                        <ErrorMessage name="email" component={() => (
                            <div className="error">{errors.email}</div>
                        )} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field
                            type="text"
                            id="password"
                            name="password"
                            placeholder="*******"
                        />
                        <ErrorMessage name="password" component={() => (
                            <div className="error">{errors.password}</div>
                        )} />
                    </div>
                    <button type="submit">Sing In</button>
                    {formularioEnviado && <p>Formulario enviado con exito!</p>}
                </Form>
            )}
        </Formik>

    )
}

/* 
 {({ values, handleSubmit, touched, handleChange, handleBlur, errors }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="matias_aguirre@gmail.com"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.email && errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            placeholder="*******"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                    {formularioEnviado && <p>Formulario enviado con exito!</p>}
                </form>
*/