import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategories } from "../../actions";
import { Button } from "react-bootstrap";
import axios from "axios";

function CreateForm() {
  const allCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL"];

  const [newProduct, setNewProduct] = useState({
    name: "",
    stock: "",
    price: "",
    description: "",
    img: "https://i.pinimg.com/474x/6c/f5/be/6cf5be64dd743079b96614981254aef7.jpg",
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

  const handleSubmitFabric = (event) => {
    setNewProduct({
      ...newProduct,
      fabric: [...newProduct, fabricInput],
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
    if (newProduct.fabric) {
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

      try {
        console.log("post");
        const res = await axios.post(
          "https://latucumoda-backend.onrender.com/products",
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

  return (
    <>
      <Navbar />
      <h1>Nueva prenda</h1>
      <div>
        <div>
          <div>
            <label>Nombre</label>
            <input onChange={changeProduct} type="text" name="name" />
          </div>
          <div>
            <label>Stock</label>
            <input onChange={changeProduct} type="number" name="stock" />
          </div>
          <div>
            <label>Precio</label>
            <input onChange={changeProduct} type="number" name="price" />
          </div>
          <div>
            <label>Descripción</label>
            <input onChange={changeProduct} type="text" name="description" />
          </div>
          <div>
            <label>Marca</label>
            <input onChange={changeProduct} type="text" name="brand" />
          </div>
          <div>
            <label>Color</label>
            <div>
              <input
                type="text"
                value={colourInput}
                onChange={handleColourInput}
              />
              <button onClick={handleSubmitColor}>Agregar color</button>
            </div>
          </div>
          <div>
            <label>Talle</label>

            <div>
              {sizes.map((size) => (
                <>
                  <Button
                    size="sm"
                    className="mx-1"
                    variant={
                      newProduct.size.includes(size)
                        ? "dark"
                        : "outline-secondary"
                    }
                    onClick={
                      newProduct.size.includes(size)
                        ? () => eliminarSize(size)
                        : () => addSize(size)
                    }
                  >
                    {size}
                  </Button>
                </>
              ))}
            </div>
            <div>
              <label>Tela</label>
              <div>
                <input
                  type="text"
                  value={fabricInput}
                  onChange={handleFabricInput}
                />
                <button onClick={handleSubmitFabric}>Agregar tela</button>
              </div>
            </div>
            <div>
              <label>Categoría</label>
              <div>
                {allCategories?.map((categorie) => (
                  <>
                    <Button
                      size="sm"
                      className="mx-1"
                      variant={
                        newProduct.categorie === categorie
                          ? "dark"
                          : "outline-secondary"
                      }
                      onClick={() => setCategorie(categorie)}
                    >
                      {categorie}
                    </Button>
                  </>
                ))}
              </div>
            </div>
          </div>

          <button onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
