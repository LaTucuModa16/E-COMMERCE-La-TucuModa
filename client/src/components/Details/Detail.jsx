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

  useEffect(() => { }, [products]);
  return (
    <div>
      <Navbar_ />
      <Link to="/home">
        <button>Ir a la página Home</button>
      </Link>
      {products && products !== "No existe este producto" ? (
        <div className="container">
          <div className="card">
            <h1
              className="category"
            >{products[0].name}</h1>
            <img
              className="card-image"
              src={products[0].img}
              alt="No img found"
              width="250px"
              height="250px"
            />
            <h6 className="container text-center">{products[0].description}</h6>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <h3>Color:</h3>
                  {products[0].colour.map((p) => {
                    return <h4>{p}</h4>;
                  })}
                </div>
                <div className="col text-center">
                  <h3>Talle:</h3>
                  <div className="d-flex">
                    {products[0].size.map((p) => {
                      return <h4 className="mx-2 ">{p}</h4>;
                    })}
                  </div>
                </div>
                <h2 >${products[0].price}</h2>
                <h3>Stock: {products[0].stock}</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3>No se pudo cargar el producto</h3>
      )}
    </div>
  );
}

export default Detail;
