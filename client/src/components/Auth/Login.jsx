import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, registerUser, getUsers, setCart } from "../../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContainer, WelcomeText, ButtonStyled } from "./StyledLogin";
import "./Login.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const showToast = () => {
    toast("Successfully logged in");
  };
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  let obj = {
    name: "",
    last_name: "",
    email: "",
    img: "",
  };

  const allEmail = users.map((e) => e.email);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      localStorage.setItem("accessToken", tokenResponse.access_token);
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      responseGoogle(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const responseGoogle = (userInfo) => {
    obj = {
      name: userInfo.given_name,
      last_name: userInfo.family_name || "",
      email: userInfo.email,
      img: userInfo.picture,
    };
    const cartLS = JSON.parse(localStorage.getItem(`cart${userInfo.email}`));
    dispatch(setCart(cartLS));
    if (!allEmail.includes(obj.email))
      return dispatch(registerUser(obj))
        .then((res) =>
          dispatch(
            LoginUser({
              email: obj.email,
            })
          )
        )
        .then((res) => navigate("/home"));
    if (allEmail.includes(obj.email))
      return dispatch(LoginUser({ email: obj.email })).then((res) =>
        navigate("/home")
      );
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="containerL">
      <MainContainer>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(valores) => {
            let errores = {};

            //Validation Email
            if (!valores.email) {
              errores.email = "*Please enter the email";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              )
            ) {
              errores.email = "*Invalid email";
            }
            //Validation Password
            if (!valores.password) {
              errores.password = "*Please enter the password";
            }
            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            dispatch(LoginUser(valores));
            resetForm();
            console.log("Formulario enviado");
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
            navigate("/home");
          }}
        >
          {({ errors, isValid, dirty }) => (
            <div className="containerForm">
              <Form>
                <WelcomeText>WELCOME</WelcomeText>
                <div className="form">
                  <div>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="inputContainer"
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="error">{errors.email}</div>
                      )}
                    />
                  </div>
                  <div className="containerPassword">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="inputContainer"
                    />
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <div className="error">{errors.password}</div>
                      )}
                    />
                  </div>
                  <div className="containerButton">
                    <ButtonStyled
                      type="submit"
                      onClick={showToast}
                      disabled={!(isValid && dirty)}
                    >
                      Sing In
                    </ButtonStyled>
                  </div>
                  <ToastContainer position="top-right" />
                </div>
              </Form>
            </div>
          )}
        </Formik>
        <div className="mt-4">
          <button onClick={() => googleLogin()}>Conectate a esta</button>
        </div>
      </MainContainer>
    </div>
  );
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
