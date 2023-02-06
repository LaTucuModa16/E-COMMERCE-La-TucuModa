import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar_ from "../NavBar/Navbar";
import axios from "axios";
import "./Detail.css";
import { Link } from "react-router-dom";

function Detail(props) {
  const [products, setProducts] = useState(null);
  const id = useParams().id;

  const getProducts = async (id) => {
    const res = await axios.get(`http://localhost:3001/products/${id}`);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts(id);
  }, [id]);

  useEffect(() => {}, [products]);
  return (
    <div>
      <Navbar_ />
      <Link to="/home">
        <button>Ir a la página Home</button>
      </Link>
      {products && products !== "No existe este producto" ? (
        <div className="detailPokemon2">
          <h1>{products[0].name}</h1>
          <img
            src={products[0].img}
            alt="No img found"
            width="250px"
            height="250px"
          />
          <h6>{products[0].description}</h6>
          <div>
            {products[0].colour.map((p) => {
              return <h4>{p}</h4>;
            })}
          </div>
          <div>
            {products[0].size.map((p) => {
              return <h4>{p}</h4>;
            })}
          </div>
          <h2>${products[0].price}.-</h2>
          <h3>Stock: {products[0].stock}</h3>
        </div>
      ) : (
        <h3>No se pudo cargar el producto</h3>
      )}
    </div>
  );
}

export default Detail;
