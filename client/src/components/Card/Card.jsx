import React from "react";
// import "./card.css";

export default function Card({ name, img, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="imagen del producto" width="170px" height="220px" />
      <p>{price}</p>
    </div>
  );
}
