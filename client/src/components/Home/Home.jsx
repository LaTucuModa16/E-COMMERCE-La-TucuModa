import React, { useState, useEffect } from "react";
import { getProducts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Paginado from "../Paginado/Paginado";
import FormHome from "../FormHome/FormHome";

export default function Home() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(18);
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
      <div className="d-flex row mt-5">
        <div className="d-none d-md-block col-1">
          <FormHome />
        </div>
        <div className="text-center col conteiner">
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
              </div>
            )}
          </div>
          <Paginado
            productsPerPage={productsPerPage}
            allProducts={allProducts.length}
            settingCurrentPage={settingCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}
