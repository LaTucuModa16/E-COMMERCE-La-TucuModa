import React from "react";
import Navbar_ from "../NavBar/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Navbar_ />
      <Link to="/home">
        <button>Ir a la página Home</button>
      </Link>
      <div className="container my-4">
        <h1 class="display-4 text-center mb-4">Contactanos</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h4 className="text-uppercase">La Tucumoda</h4>
            <hr />
            <h5>Nuestro mail</h5>
            <p>latucumoda@gmail.com</p>
            <h5>Direccion</h5>
            <p>Monteagudo 251</p>
            <h5>Telefonos</h5>
            <p>
              Telefono fijo: 4-254758
              <br />
              Celular: 381-6975151
              <br />
              Fax: 0381-384615455
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <h4 className="text-uppercase">Envianos un mensaje</h4>
            <form className="bg-light p-4">
              <div className="form-group">
                <label for="">Nombre y Apellido</label>
                <Form.Control aria-label="First name" />
              </div>
              <div className="form-group">
                <label for="">Email</label>
                <Form.Control aria-label="Email" />
              </div>
              <div className="form-group">
                <label for="">Consulta</label>
                <Form.Control aria-label="Consulta" />

                <textarea
                  rows="5"
                  placeholder="Ingrese su consulta.."
                  required
                  className="form-control mt-3"
                ></textarea>
              </div>
              <InputGroup className="my-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <InputGroup.Text>
                  Desea recibir nuestras novedades
                </InputGroup.Text>
              </InputGroup>
              <button type="sunbmit" class="btn btn-warning">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
