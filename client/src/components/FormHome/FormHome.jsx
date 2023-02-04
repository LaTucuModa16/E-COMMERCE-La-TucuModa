import React from "react";
// import "./card.css";
import { Form } from "react-bootstrap";

export default function FormHome({}) {
  return (
    <div>
      <hr className="mt-5" />
      <br />
      <div className="form-check">
        <Form.Group>
          <h4 className="">Categoria</h4>
          <div className="col-2">
            <Form.Check
              type="checkbox"
              label="Remera"
              id="exampleCheck"
              className="form-check-label"
            />
            <Form.Check
              type="checkbox"
              label="Buzo"
              id="exampleCheck"
              className="form-check-label"
            />
            <Form.Check
              type="checkbox"
              label="Pantalon"
              id="exampleCheck"
              className="form-check-label"
            />
            <Form.Check
              type="checkbox"
              label="Zapatillas"
              id="exampleCheck"
              className="form-check-label"
            />
          </div>
        </Form.Group>
      </div>
    </div>
  );
}
