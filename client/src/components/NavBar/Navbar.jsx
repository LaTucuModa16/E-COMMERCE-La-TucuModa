// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import FormHome from "../FormHome/FormHome";
import { useNavigate } from "react-router";

function OffcanvasExample() {
  const navigate = useNavigate();

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
                  <Nav.Link onClick={() => navigate("/form")} className="mx-3">
                    Crear Producto
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/contact")}
                    className="mx-3"
                  >
                    Contactanos
                  </Nav.Link>

                  <Nav.Link href="#action2" className="mx-3">
                    Sing In
                  </Nav.Link>
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
