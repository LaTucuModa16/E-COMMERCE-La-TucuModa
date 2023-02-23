import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router";

export default function HomeDash() {
  const navigate = useNavigate();

  return (
    <div>
      <Nav.Link onClick={() => navigate("/home")}>Volver al home</Nav.Link>
    </div>
  );
}
