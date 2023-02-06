import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const [spinner, setSpiner] = useState(false);

  const ingresar = () => {
    setSpiner(true);
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="LandingPage">
      {spinner ? (
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      ) : (
        <button className="boton-sec" onClick={ingresar}>
          <button className="primary-button"> Ingresar</button>
        </button>
      )}
    </div>
  );
}
