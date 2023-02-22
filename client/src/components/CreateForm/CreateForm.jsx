import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategories } from "../../actions";
import { Button } from "react-bootstrap";
import axios from "axios";
import NavBarDash from "../DashBoard/NavBarDash/NavBarDash";
import UploadImage from "./Cloudinary/Cloudinary";

function CreateForm() {
  const allCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL"];

  const setImg = (url) => {
    setNewProduct({ ...newProduct, img: url })
    console.log(url)
  }


  const [newProduct, setNewProduct] = useState({
    name: "",
    stock: "",
    price: "",
    description: "",
    img: "",
    brand: "",
    colour: [],
    size: [],
    fabric: [],
    categorie: null,
  });

  const [colourInput, setColourInput] = useState("");

  const handleColourInput = (event) => {
    setColourInput(event.target.value);
  };

  const handleSubmitColor = () => {
    console.log("color agregado");
    setNewProduct((prevState) => ({
      ...prevState,
      colour: [...prevState.colour, colourInput],
    }));
    setColourInput("");
  };

  const [fabricInput, setFabricInput] = useState("");

  const handleFabricInput = (event) => {
    setFabricInput(event.target.value);
  };

  const handleSubmitFabric = () => {
    console.log("tela agregada");
    setNewProduct({
      ...newProduct,
      fabric: [...newProduct.fabric, fabricInput],
    });
    setFabricInput("");
  };
  const changeProduct = (e) => {
    // setError(null);
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  function addSize(size) {
    if (!newProduct.size.includes(size)) {
      setNewProduct({
        ...newProduct,
        size: [...newProduct.size, size],
      });
    }
  }

  const eliminarSize = (size_) => {
    setNewProduct({
      ...newProduct,
      size: newProduct.size.filter((size) => size !== size_),
    });
  };

  const setCategorie = (cat) => {
    if (newProduct.categorie) {
      if (newProduct.categorie === cat) {
        setNewProduct({
          ...newProduct,
          categorie: null,
        });
      } else {
        setNewProduct({
          ...newProduct,
          categorie: cat,
        });
      }
    } else {
      setNewProduct({
        ...newProduct,
        categorie: cat,
      });
    }
  };

  const validate = () => {
    setError(null);
    if (newProduct.name.length < 8 || newProduct.name.length >= 20) {
      setError("El nombre debe contener entre 8 y 20 caracteres");
      return false;
    }
    if (newProduct.stock < 1) {
      setError("El stock tiene que ser mayor que 1");

      return false;
    }
    if (newProduct.price < 1) {
      setError("El precio tiene que ser mayor que 1");
      return false;
    }
    if (
      newProduct.description.length <= 15 ||
      newProduct.description.length >= 40
    ) {
      setError("La descripción debe tener entre 15 y 40 caracteres");
      return false;
    }
    if (newProduct.brand.length < 3 || newProduct.brand.length >= 20) {
      setError("La marca debe contener entre 3 y 20 caracteres");
      return false;
    }
    if (newProduct.colour.length < 1) {
      setError("Ingrese un color por favor");
      return false;
    }
    if (newProduct.size.length < 1) {
      setError("Seleccione al menos una talla");
      return false;
    }
    if (newProduct.fabric.length < 1) {
      setError("Seleccione una opción");
      return false;
    }
    if (newProduct.categorie.length < 1) {
      setError("Seleccione una categoría");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    console.log("========> submit");
    if (validate()) {
      console.log("========> validate");
      console.log(newProduct);
      try {
        console.log("post");
        const res = await axios.post(
          "http://localhost:3001/products",
          newProduct
        );
        console.log(res);
        if (res.status === 200) {
          alert("Prenda creada correctamente!");
        }
      } catch (error) {
        console.log("falla post");

        console.log(error.response);
      }
    } else {
      console.log("========> no validate");
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    console.log(newProduct);
  }, [newProduct])

  return (
    <>
      <NavBarDash />
      <div className="containerDash colorLetras">
        <h1 className="container d-flex justify-content-center p-4">
          <strong>Nueva Prenda</strong>
        </h1>
        <hr />
        <hr />
        <div>
          <div className="container">
            <div className="row  my-2">
              <label className="col-sm-4 d-flex justify-content-center">
                Nombre
              </label>
              <input
                className="col-sm-6"
                onChange={changeProduct}
                type="text"
                name="name"
              />
            </div>
            <hr />
            <div className="row my-2">
              <label className="col-sm-4 d-flex justify-content-center">
                Stock
              </label>
              <input
                className="col-sm-6"
                onChange={changeProduct}
                type="number"
                name="stock"
              />
            </div>
            <hr />
            <div className="row my-2">
              <label className="col-sm-4 d-flex justify-content-center">
                Precio
              </label>
              <input
                className="col-sm-6"
                onChange={changeProduct}
                type="number"
                name="price"
              />
            </div>
            <hr />
            <div className="row my-2">
              <label className="col-sm-4 d-flex justify-content-center">
                Descripción
              </label>
              <input
                className="col-sm-6"
                onChange={changeProduct}
                type="text"
                name="description"
              />
            </div>
            <hr />
            <UploadImage
              setImg={setImg}
            />
            <hr />
            <div className="row my-2">
              <label className="col-sm-4 d-flex justify-content-center">
                Marca
              </label>
              <input
                className="col-sm-6"
                onChange={changeProduct}
                type="text"
                name="brand"
              />
            </div>
            <hr />
            <div className="row my-2">
              <label className="col-sm-4 d-flex justify-content-center">
                Color
              </label>
              <div className="col-sm-8 d-flex justify-content-center">
                <input
                  className="col me-3"
                  type="text"
                  value={colourInput}
                  onChange={handleColourInput}
                />
                <div className="col ms-5">
                  <button onClick={handleSubmitColor}>Agregar color</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row my-2">
              <label className="col-sm-4 d-flex justify-content-center">
                Talle
              </label>

              <div className="col-sm-8 d-flex align-items-center mb-3">
                {sizes.map((size, pos) => (
                  <div key={pos}>
                    <Button
                      size="sm"
                      className="mx-1"
                      variant={
                        newProduct.size.includes(size)
                          ? "warning"
                          : "outline-warning"
                      }
                      onClick={
                        newProduct.size.includes(size)
                          ? () => eliminarSize(size)
                          : () => addSize(size)
                      }
                    >
                      {size}
                    </Button>
                  </div>
                ))}
              </div>
              <hr />
              <div className="row my-2">
                <label className="col-sm-4 d-flex justify-content-center">
                  Tela
                </label>
                <div className="col-sm-8 d-flex justify-content-center">
                  <input
                    className="col me-5"
                    type="text"
                    value={fabricInput}
                    onChange={handleFabricInput}
                  />
                  <div className="col ms-5">
                    <button onClick={handleSubmitFabric}>Agregar tela</button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-2">
                <label className="col-sm-4 d-flex justify-content-center">
                  Categoría
                </label>
                <div className="col-sm-8 d-flex  align-items-center mb-3">
                  {allCategories?.map((categorie, pos) => (
                    <div key={pos}>
                      <Button
                        size="sm"
                        className="mx-1"
                        variant={
                          newProduct.categorie === categorie
                            ? "warning"
                            : "outline-warning"
                        }
                        onClick={() => setCategorie(categorie)}
                      >
                        {categorie}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="container d-flex justify-content-center mt-4">
            <button className="" onClick={handleSubmit}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateForm;