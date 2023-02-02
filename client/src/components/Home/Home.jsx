import React, { useState, useEffect } from "react";
import { getProducts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="containerCards">
      {allProducts.length > 0 ? (
        allProducts?.map((p, pos) => {
          return <Card key={pos} name={p.name} img={p.img} price={p.price} />;
        })
      ) : (
        <h5>No se encontraron productos con esas caracteristicas</h5>
      )}
    </div>
  );
}
