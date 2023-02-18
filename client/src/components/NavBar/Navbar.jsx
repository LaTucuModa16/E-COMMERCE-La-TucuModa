import React, { useState, useEffect } from 'react';
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useSelector } from 'react-redux';
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from 'react-redux';
import { /*registerUser*/ deleteUser } from '../../actions/index.js';
import Offcanvas from "react-bootstrap/Offcanvas";
import FormHome from "../FormHome/FormHome";
import { useNavigate } from "react-router";
import { useAuth0 } from '@auth0/auth0-react';



function OffcanvasExample() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  // console.log(user, 'useeeer');

  const handleDeleteUser = () => {
    dispatch(deleteUser());
  };
  
  // let input = {
  //   username: '',
  //   name: '',
  //   last_name: '',
  //   email: ''
  // }

  // const { loginWithRedirect, isAuthenticated, logout, user} = useAuth0();
  // console.log(useAuth0())

  // user ? input = {
  //   username: user.nickname,
  //   name: user.given_name,
  //   last_name: user.family_name,
  //   email: user.email
  // } : <span></span>

  // const register = () => {
  //   isAuthenticated ? dispatch(registerUser(input)) : <span></span>
  // };

  // useEffect(() => {
  //   register();
  // }, [])

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="warning" expand={expand} className="mb-3">
          <Container fluid>
            <Nav.Link onClick={() => navigate("/home")}>La Tucumoda</Nav.Link>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Mas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => navigate("/about")} className="mx-3">
                    Sobre Nosotros
                  </Nav.Link>
                  {/* <Nav.Link onClick={() => navigate("/form")} className="mx-3">
                    Crear Producto
                  </Nav.Link> */}
                  <Nav.Link
                    onClick={() => navigate("/contact")}
                    className="mx-3"
                  >
                    Contactanos
                  </Nav.Link>
                {
                  Object.entries(user).length > 0 ? 
                  <Nav.Link onClick={() => handleDeleteUser()} className="mx-3">Sign Out</Nav.Link> :
                  <Nav.Link onClick={() => navigate('/login')}  className="mx-3">Sign In</Nav.Link>
                }
                  
                </Nav>
                <div className="d-block d-md-none">
                  <FormHome />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
