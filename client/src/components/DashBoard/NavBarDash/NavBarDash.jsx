import React from "react";
import { Link } from "react-router-dom";
import "./NavBarDash.css";
import { useNavigate } from "react-router";
import Nav from "react-bootstrap/Nav";

export default function NavBarDash() {
  const navigate = useNavigate();

  return (
    <div className="containerNav">
      <div className="logo">DASHBOARD</div>
      <ul className="menu">
        <li>
          <Nav.Link onClick={() => navigate("/home")}>
            Volver a la página principal
          </Nav.Link>
        </li>
        <li>
          <Nav.Link onClick={() => navigate("/form")}>
            Agregar Producto
          </Nav.Link>
        </li>
        <li>
          <Nav.Link onClick={() => navigate("/clients")}>Clientes</Nav.Link>
        </li>
      </ul>
    </div>
  );
}
