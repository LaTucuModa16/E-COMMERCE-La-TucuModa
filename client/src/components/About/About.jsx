import React from "react";
import Navbar_ from "../NavBar/Navbar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div>
        <Navbar_ />
        <Link to="/home">
          <button>Ir a la página Home</button>
        </Link>
      </div>{" "}
      <section className="container">
        <h1 className="display-4 text-center">Nuestra Historia</h1>
        <hr />
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h5>Primeros Tiempos</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              porro, dignissimos dicta sit ex aspernatur delectus corporis
              repellat molestias ullam rem iusto saepe aperiam aliquam, sunt
              beatae explicabo dolorem sint doloribus cumque debitis. Deserunt
              hic, tenetur similique quae tempora ipsum sunt voluptate sit
              aliquam alias asperiores voluptatum. Id repellat delectus
              doloremque nostrum minus, autem officia error nam quis aut
              corrupti non accusamus eligendi nulla itaque reprehenderit
              assumenda veritatis animi modi fugiat rem quos inventore dolore
              ullam! Provident animi magni aliquam consectetur beatae nihil a
              itaque error velit tempore iure in repellendus dolor consequuntur,
              atque modi quae numquam unde ipsa ducimus accusantium aperiam!
              Laborum consectetur numquam sunt! Itaque blanditiis magni nemo
              nisi laboriosam iste minima, hic ad, sint explicabo eum fugiat!
              Delectus similique modi voluptate cupiditate consequuntur minima
              corrupti! Iure iste ea, similique distinctio repellendus quibusdam
              placeat sit veritatis autem obcaecati deleniti optio facilis
              soluta mollitia ad modi quos enim earum doloremque ex asperiores
              animi commodi perspiciatis magnam. Quasi, asperiores unde, ea
              consectetur quaerat, earum recusandae at repellat modi quas dicta
              repudiandae voluptatibus architecto temporibus accusamus!
              Similique architecto, fuga facere, laudantium quos, magnam
              suscipit hic incidunt iste sed voluptatum aut explicabo inventore
              cumque labore. Velit consectetur id sunt explicabo, quas
              repellendus.
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img
              className="w-100"
              src="https://media.diariouno.com.ar/p/5dfbf16c6bdaf082b7e11738d9aa637d/adjuntos/298/imagenes/009/056/0009056355/1200x0/smart/gonzalo-penalva-the-sportsman-18jpeg.jpeg"
              alt="primera imagen"
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <img
              className="w-100"
              src="https://media.revistagq.com/photos/5e70c95394cea8000801ee31/master/w_1600%2Cc_limit/david-beckham-casa-001.jpg"
              alt="primera imagen"
            />
            Name
          </div>
          <div className="col-sm-12 col-md-6">
            <h5>Trabajos de calidad</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              porro, dignissimos dicta sit ex aspernatur delectus corporis
              repellat molestias ullam rem iusto saepe aperiam aliquam, sunt
              beatae explicabo dolorem sint doloribus cumque debitis. Deserunt
              hic, tenetur similique quae tempora ipsum sunt voluptate sit
              aliquam alias asperiores voluptatum. Id repellat delectus
              doloremque nostrum minus, autem officia error nam quis aut
              corrupti non accusamus eligendi nulla itaque reprehenderit
              assumenda veritatis animi modi fugiat rem quos inventore dolore
              ullam! Provident animi magni aliquam consectetur beatae nihil a
              itaque error velit tempore iure in repellendus dolor consequuntur,
              atque modi quae numquam unde ipsa ducimus accusantium aperiam!
              Laborum consectetur numquam sunt! Itaque blanditiis magni nemo
              nisi laboriosam iste minima, hic ad, sint explicabo eum fugiat!
              Delectus similique modi voluptate cupiditate consequuntur minima
              corrupti! Iure iste ea, similique distinctio repellendus quibusdam
              placeat sit veritatis autem obcaecati deleniti optio facilis
              soluta mollitia ad modi quos enim earum doloremque ex asperiores
              animi commodi perspiciatis magnam. Quasi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
