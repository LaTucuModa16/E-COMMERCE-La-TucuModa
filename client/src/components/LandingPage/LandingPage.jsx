import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import img1 from "./LTM.png";

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
    <div>
      <div className="LandingPage">
        {spinner ? (
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        ) : (
          <button className="boton-sec primary-button" onClick={ingresar}>
            Ingresar
          </button>
        )}
      </div>
      <div className="container">
        <div className="py-5">
          <h1 className="display-4 text-center">La Tucumoda</h1>
          <p className="lead">
            Somos una empresa familiar dedicada al rubro Ropa desde el año 1972.
            Llegamos a la localidad de Turdera el 22 de Julio de 2055 y fuimos
            recibidos de manera excelente por nuestros vecinos. Desde ese dua
            trabajamos para evolucionar e innovar para satisfacer a nuestro
            clientes.
          </p>
        </div>
        <div className="row shadow p-3 mb-5 bg-body rounded">
          <div className="col-sm-12 col-md-4 text-center">
            <i className="fas fa-thumbs-up fa-4x text-danger mb-3"></i>
            <p className="lead">Atencion al cliente</p>
            <p>
              Hace unos días tuve una experiencia de atención al cliente
              excepcional con La Tucumoda. Llamé al servicio de soporte técnico
              debido a un problema que estaba teniendo con uno de sus productos
              y me atendió un agente muy amable y profesional.
            </p>
          </div>
          <div className="col-sm-12 col-md-4 text-center">
            <i className="fas fa-shirt fa-4x text-primary mb-3"></i>
            <p className="lead">Productos de primera calidad</p>
            <p>
              Nuestra ropa está hecha con telas suaves y duraderas que te
              permitirán sentirte cómodo/a todo el día, ya sea que estés en la
              oficina, en una reunión de negocios o simplemente disfrutando de
              un día relajado en casa. Además, nuestros diseños son modernos y
              elegantes, lo que te permitirá lucir a la moda en cualquier
              ocasión.
            </p>
          </div>
          <div className="col-sm-12 col-md-4 text-center">
            <i className="fas fa-shopping-basket fa-4x text-warning mb-3"></i>
            <p className="lead">Servicios de compra</p>
            <p>
              En nuestra tienda, nos enorgullece ofrecer una experiencia de
              compra en línea excepcional. Nos hemos dedicado a crear una
              plataforma de venta en línea intuitiva y fácil de usar que te
              permite comprar nuestros productos de manera rápida y segura desde
              la comodidad de tu hogar.
            </p>
          </div>
        </div>
        <div>
          <h1 className="display-4 text-center">Productos mas vendidos</h1>
          <hr />
          <div className="row">
            <div className="col-sm-12 col-md-4 my-2">
              <img
                src="https://static.dafiti.com.ar/p/polo-label-0459-866119-1-product.jpg"
                className="w-100 efectoimg"
                alt="pan y factura"
              />
            </div>
            <div className="col-sm-12 col-md-4 my-2">
              <img
                src="https://static.dafiti.com.ar/p/el-genoves-5548-167117-1-catalog-new.jpg"
                className="w-100 efectoimg"
                alt="cosas dulces"
              />
            </div>
            <div className="col-sm-12 col-md-4 my-2">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_700560-MLA53217472350_012023-O.webp"
                className="w-100 efectoimg"
                alt="cosas saladas"
              />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container-fluid bg-dark text-light mt-3">
          <div className="container">
            <div className="row">
              <div className="text-center p-5 col-sm-12 col-md-4">
                <img src={img1} width="200px" alt="logo de la empresa" />
              </div>
              <div className="p-5 col-sm-12 col-md-4">
                <p>
                  <strong>Encontranos en:</strong>
                </p>
                <p>Monteagudo 251</p>
              </div>
              <div className="p-5 col-sm-12 col-md-4">
                <p>
                  <strong>Horarios de atencion:</strong>
                </p>
                <p className="mt-3 text-white">
                  Lunes a viernes: 09hs-20hs
                  <br />
                  Sabado, Domingo y Feriado: 10hs-20hs
                </p>
              </div>
            </div>
          </div>
          <div className="text-center bg-dark py-1">
            &copy; Derechos reservados a La Tucumoda
          </div>
        </div>
      </footer>
    </div>
  );
}
