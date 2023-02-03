import React, { useState, useEffect } from "react";
import { getProducts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

export default function Home() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirsttProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirsttProducts,
    indexOfLastProducts
  );

  const settingCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getProducts());
    setCurrentPage(1);
  }, []);

  return (
    <div className="containerCards">
      <Navbar />
      {currentProducts.length > 0 ? (
        currentProducts?.map((p, pos) => {
          return <Card key={pos} name={p.name} img={p.img} price={p.price} />;
        })
      ) : (
        <h5>No se encontraron productos con esas caracteristicas</h5>
      )}
    </div>
  );
}
