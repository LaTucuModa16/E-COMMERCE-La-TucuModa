import React from "react";
import "../Details/Detail.css";
import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Card_({ name, img, price, id }) {
  return (
    // <div>
    //   <h1>{name}</h1>
    //   <img src={img} alt="imagen del producto" width="170px" height="220px" />
    //   <p>$ {price}.-</p>
    // </div>
    <Card className="mt-4 p-3" style={{ width: "60%" }}>
      <Card.Img
        variant="top"
        src={img}
        width="170px"
        height="320px"
        className=""
      />
      <Card.Body>
        <Card.Title className="text-primary">${price}.-</Card.Title>
        <Card.Text>{name}</Card.Text>

        <Link key={id} to={"/detail/" + id}>
          <Button variant="dark">Ver detalles</Button>
        </Link>
        <button className="sinefec mx-3">
          <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </button>
      </Card.Body>
    </Card>
  );
}
