import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Details/Detail.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Contact from "./components/Contactos/Contact";
import Login from "./components/Auth/Login";
import CreateForm from "./components/CreateForm/CreateForm";
import Register from "./components/Auth/Register.jsx";
import CartShop from "./components/CartShop/CartShop";

import DashBoard from "./components/DashBoard/DashBoardHome/DashBoard";
import HomeDash from "./components/DashBoard/Pages/HomeDash/HomeDash";
import Sales from "./components/DashBoard/Pages/Sales/Sales";
import Clients from "./components/DashBoard/Pages/Clients/Clients";
import ClientBaned from "./components/DashBoard/Pages/Clients/ClientBaned";
import Switch from "./components/DashBoard/Pages/Clients/Switch/Switch";

import UploadImage from "./components/CreateForm/Cloudinary/Cloudinary";
import Slide from "./components/Slide/Slide";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { loginGoogleUser } from "./actions";


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const accessToken = localStorage.getItem("accessToken");

  const guardarCarroLocal = () => {
    const cartLS = JSON.parse(localStorage.getItem(`cart${user.email}`));

    if (cartLS) {
      dispatch({ type: "SET_CART", payload: cartLS });
    }
  };

  useEffect(() => {
    if (!user.name && accessToken) {
      dispatch(loginGoogleUser(accessToken));
      // guardarCarroLocal();
    }
  }, []);

  return (
    <BrowserRouter>

      <GoogleOAuthProvider clientId="803452278326-q51gablo3nqqfj9dasu2o4g8d2dsmhhb.apps.googleusercontent.com">
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartShop />} />
            <Route path="/form" element={<CreateForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/dash" element={<HomeDash />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/users/:id" element={<ClientBaned />} />
           <Route path="/cloudinary" element={<UploadImage />} />
          <Route path="/slide" element={<Slide />} />
          </Routes>
        </div>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
