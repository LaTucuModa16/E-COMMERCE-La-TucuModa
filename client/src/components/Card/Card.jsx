import React from "react";
// import "./card.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Card_({ name, img, price, id }) {
  return (
    // <div>
    //   <h1>{name}</h1>
    //   <img src={img} alt="imagen del producto" width="170px" height="220px" />
    //   <p>$ {price}.-</p>
    // </div>
    <Card className="mt-4" style={{ width: "60%" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-primary">${price}.-</Card.Title>
        <Card.Text>{name}</Card.Text>
        <Link key={id} to={"/detail/" + id}>
          <Button variant="success">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
