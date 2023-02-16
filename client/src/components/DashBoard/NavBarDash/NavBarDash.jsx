import React from "react";
import { Link } from "react-router-dom";
import "./NavBarDash.css"

export default function NavBarDash() {

    return (
        <div className="containerNav">
            <div className="logo">DASHBOARD</div>
            <ul className="menu">
                <li>
                    <Link to="/dash">Inicio</Link>
                </li>
                <li>
                    <Link to="/sales">Ventas</Link>
                </li>
                <li>
                    <Link to="/clients">Clientes</Link>
                </li>
            </ul>
        </div>
    )
}