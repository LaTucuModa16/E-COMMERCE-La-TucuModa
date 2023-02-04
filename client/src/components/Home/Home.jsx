import React, { useState, useEffect } from "react";
import { getProducts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Paginado from "../Paginado/Paginado";
import Form from "react-bootstrap/Form";
import FormHome from "../FormHome/FormHome";

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
    <div>
      <Navbar />
      <div className="d-flex row container mt-5">
        <FormHome />
        <div className="text-center col">
          <Paginado
            productsPerPage={productsPerPage}
            allProducts={allProducts.length}
            settingCurrentPage={settingCurrentPage}
            currentPage={currentPage}
          />
          <div className="d-flex row justify-content-around">
            {currentProducts.length > 0 ? (
              currentProducts?.map((p, pos) => {
                return (
                  <div className="col-md-6 col-lg-4 d-flex justify-content-center">
                    <Card key={pos} name={p.name} img={p.img} price={p.price} />
                  </div>
                );
              })
            ) : (
              <div>
                <h5>No se encontraron productos con esas caracteristicas</h5>
                <h5>No se encontraron productos con esas caracteristicas</h5>
                <h5>No se encontraron productos con esas caracteristicas</h5>
                <h5>No se encontraron productos con esas caracteristicas</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
