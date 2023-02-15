import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SeaarchBar/SearchBar";
import { getCategories, setFilters, getProducts } from "../../actions";
import { Form } from "react-bootstrap";

export default function FormHome({
  setCurrentPage,
  setFlagRefresh_,
  setFlagRefreshCards_,
}) {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const backupProducts = useSelector((state) => state.backupProducts);
  const allCategories = useSelector((state) => state.categories);
  const filterProducts = useSelector((state) => state.filterProducts);

  const [hide, setHide] = useState(false);

  const [stock, setStock] = useState({
    brands: [],
    sizes: [],
  });

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    calculateStock();
  }, [allProducts]);

  const calculateStock = () => {
    setStock({
      brands: [],
      sizes: [],
    });
    if (filterProducts?.categorie !== "all") {
      let brands_ = [];
      let sizes_ = [];
      backupProducts.forEach((prod) => {
        if (prod.categorie[0].name === filterProducts.categorie) {
          if (!brands_.includes(prod.brand)) {
            brands_.push(prod.brand);
          }
          prod.size.forEach((s) => {
            if (!sizes_.includes(s)) {
              sizes_.push(s);
            }
          });
        }
      });
      setStock({
        brands: brands_,
        sizes: sizes_,
      });
    }
  };

  useEffect(() => {
    // console.log(stock);
  }, [stock]);

  const setCategorie = (payload) => {
    dispatch(setFilters(payload));
    setHide(true);
    setTimeout(() => {
      setHide(false);
    }, 500);
    setFlagRefreshCards_();
  };

  function borrarFiltros(e) {
    setCurrentPage(1);
    e.preventDefault();
    dispatch(getProducts());
    setFlagRefresh_();
    setFlagRefreshCards_();
  }

  const setCategorie_ = (categorie) => {
    setCurrentPage(1);
    setCategorie({
      atributte: "categorie",
      value: categorie,
    });
  };

  return (
    <div>
      <button
        type="button"
        className="glow-on-hover"
        onClick={(e) => {
          borrarFiltros(e);
        }}
      >
        Borrar Filtros
      </button>
      <br />
      <div className="form-check">
        <h4>Categorias</h4>
        {allCategories ? (
          <>
            <Form>
              {allCategories.map((categorie, pos) => {
                return (
                  <div key={pos}>
                    <Form.Check
                      onChange={() => setCategorie_(categorie)}
                      inline
                      label={categorie}
                      name="categorie"
                      type="radio"
                      id={pos}
                      key={pos}
                    />
                  </div>
                );
              })}
            </Form>

            {filterProducts.categorie !== "all" && !hide ? (
              <>
                <h4>Marcas</h4>
                {stock.brands.map((brand, pos) => {
                  return (
                    <div key={pos}>
                      <Form.Check
                        onChange={() => {
                          dispatch(
                            setFilters({
                              atributte: "brand",
                              value: brand,
                            })
                          );
                          setCurrentPage(1);
                          setFlagRefreshCards_();
                        }}
                        inline
                        label={brand}
                        name="brand"
                        type="radio"
                        id={pos}
                      />
                    </div>
                  );
                })}
              </>
            ) : null}
          </>
        ) : (
          <h1>No hay categorias en este momento</h1>
        )}
      </div>
    </div>
  );
}
