import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const ingresar = () => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  return (
    <div>
      <h1>
        <img src="https://topboutique.es/wp-content/uploads/2021/06/como-decorar-una-boutique-peque%C3%B1a-con-poco-dinero.jpg" />
      </h1>

      <button onClick={ingresar}>Ingresar</button>
    </div>
  );
}
