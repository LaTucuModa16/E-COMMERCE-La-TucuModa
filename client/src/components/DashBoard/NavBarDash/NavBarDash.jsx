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
          <Nav.Link onClick={() => navigate("/dashboard")}>Inicio</Nav.Link>
        </li>
        <li>
          {/* <Link to="/sales">Ventas</Link> */}
          <Nav.Link onClick={() => navigate("/sales")}>Ventas</Nav.Link>
        </li>
        <li>
          {/* <Link to="/clients">Clientes</Link> */}
          <Nav.Link onClick={() => navigate("/clients")}>Clientes</Nav.Link>
        </li>
      </ul>
    </div>
  );
}
