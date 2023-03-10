import React, { useState, useEffect } from "react";
import { getProducts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Paginado from "../Paginado/Paginado";
import FormHome from "../FormHome/FormHome";
import SearchBar from "../SeaarchBar/SearchBar";
import "./Home.css";
import Slide from "../Slide/Slide";

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
  const user = useSelector((state) => state.user);
  // states para refrescar
  const [show, setShow] = useState(true);
  const [flagRefresh, setFlagRefresh] = useState(false);
  const [flagRefreshCards, setFlagRefreshCards] = useState(false);
  const [showForm, setshowForm] = useState(true);

  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 50);
  }, [currentPage, flagRefreshCards]);

  const setFlagRefresh_ = () => {
    flagRefresh ? setFlagRefresh(false) : setFlagRefresh(true);
  };
  const setFlagRefreshCards_ = () => {
    flagRefresh ? setFlagRefreshCards(false) : setFlagRefreshCards(true);
  };
  useEffect(() => {
    setshowForm(false);
    setTimeout(() => {
      setshowForm(true);
    }, 10);
  }, [flagRefresh]);

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
      <Slide />
      {/* seccion mas alta */}
      <div className="d-flex justify-content-between p-2">
        <SearchBar
          setFlagRefresh_={setFlagRefresh_}
          setCurrentPage={setCurrentPage}
        />

        {Object.entries(user).length > 0 ? (
          <Link to="/cart">
            <button className="sinefec mx-3">
              <i className="fa-solid fa-cart-shopping fa-xl"></i>
            </button>
          </Link>
        ) : null}

      </div>

      {/* seccion stock */}

      <div className="row container-fluid">
        <div className="col-2" style={{ backgroundColor: "#F8F9F9" }}>
          {showForm ? (
            <div className="d-none d-md-block">
              <FormHome
                setFlagRefresh_={setFlagRefresh_}
                setFlagRefreshCards_={setFlagRefreshCards_}
                setCurrentPage={setCurrentPage}
              />
            </div>
          ) : null}
        </div>
        <div className="col-sm-12 col-md-10">
          <div className="text-center">
            <Paginado
              productsPerPage={productsPerPage}
              allProducts={allProducts.length}
              settingCurrentPage={settingCurrentPage}
            />
            <div className="d-flex row justify-content-around">
              {currentProducts.length > 0 && show ? (
                currentProducts?.map((p, pos) => {
                  return (
                    <div
                      key={pos}
                      className="col-md-6 col-lg-4 d-flex justify-content-center"
                    >
                      <Card product={p} />
                    </div>
                  );
                })
              ) : (
                <div>
                  <h5>No se encontraron productos con esas caracteristicas</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
