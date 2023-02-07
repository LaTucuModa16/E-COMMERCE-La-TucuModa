import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SeaarchBar/SearchBar";
import { getCategories, setFilters, getProducts } from "../../actions";
import { Form } from "react-bootstrap";

export default function FormHome({ setCurrentPage, setFlagRefresh_ }) {
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
  };

  function handleClick(e) {
    setFlagRefresh_();
    setCurrentPage(1);
    e.preventDefault();
    dispatch(getProducts());
  }

  return (
    <div>
      <div className="d-none d-md-block">
        <SearchBar
          setFlagRefresh_={setFlagRefresh_}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div>
        <hr className="mt-5" />
        <button
          type="button"
          class="glow-on-hover"
          onClick={(e) => {
            handleClick(e);
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
                    <div>
                      <Form.Check
                        onChange={(e) =>
                          setCategorie({
                            atributte: "categorie",
                            value: categorie,
                          })
                        }
                        inline
                        label={categorie}
                        name="categorie"
                        type="radio"
                        id={pos}
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
                      <div>
                        <Form.Check
                          onChange={(e) =>
                            dispatch(
                              setFilters({
                                atributte: "brand",
                                value: brand,
                              })
                            )
                          }
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
    </div>
  );
}
