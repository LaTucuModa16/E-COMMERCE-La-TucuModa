import React from "react";
import "../Details/Detail.css";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions";
import Toastify from "toastify-js";

export default function Card_({ product }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
    Toastify({
      text: "Producto agregado con éxito",
      duration: 1000,
      close: false,
      gravity: "right",
      position: "right",
      style: { background: "linear-gradient(to right, #00b09b, #96c93d)" },
      stopOnFocus: true,
    }).showToast();
  };

  return (
    <Card className="mt-4 p-3" style={{ width: "60%" }}>
      <Card.Img
        variant="top"
        src={product.img}
        width="170px"
        height="320px"
        className=""
      />
      <Card.Body>
        <Card.Title className="text-primary">${product.price}.-</Card.Title>
        <Card.Text>{product.name}</Card.Text>
        <Card.Text>En Stock:{product.stock}</Card.Text>
        <Link key={product.id} to={"/detail/" + product.id}>
          <Button variant="dark">Ver detalles</Button>
        </Link>
        <button className="sinefec mx-3" onClick={handleClick}>
          <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </button>
      </Card.Body>
    </Card>
  );
}
