import React, { useState, useEffect } from "react";
import "../Details/Detail.css";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { json, Link } from "react-router-dom";
import { addToCart, removeCart } from "../../actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Card_({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [added, setAdded] = useState(0);

  useEffect(() => {
    refreshAdded();
    saveCartToLocalStorage(cart);
  }, [cart]);

  useEffect(() => {
    const thisItem = cart?.find((item) => item.id === product.id);
    thisItem?.cantidad && setAdded(thisItem.cantidad);
  }, []);

  const refreshAdded = () => {
    try {
      const addedProduct = cart?.find((p) => p.id === product.id);
      if (addedProduct) {
        setAdded(addedProduct.cantidad);
      } else {
        setAdded(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = () => {
    dispatch(addToCart(product));

    toast.success("Agregado al carrito con éxito!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    refreshAdded();
    // saveCartToLocalStorage(cart);
  };

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const deteleProduct = () => {
    dispatch(removeCart(product));

    toast.success("Eliminado con éxito!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    refreshAdded();
    // saveCartToLocalStorage(cart);
  };

  return (
    <Card className="mt-4 p-3" style={{ width: "60%" }}>
      <Card.Img
        variant="top"
        src={product.img}
        width="170px"
        height="320px"
        className=""
      />
      <Card.Body>
        <Card.Title className="text-primary">${product.price}.-</Card.Title>
        <Card.Text>{product.name}</Card.Text>
        <Card.Text>En Stock: {product.stock}</Card.Text>
        <Link key={product.id} to={"/detail/" + product.id}>
          <Button variant="dark">Ver detalles</Button>
        </Link>
        {added === 0 ? (
          <button className="sinefec mx-3" onClick={addProduct}>
            <i className="fa-solid fa-cart-shopping fa-xl p-3"></i>
          </button>
        ) : (
          <div className="">
            <Button
              className=""
              onClick={deteleProduct}
              size="sm"
              variant="outline-secondary"
            >
              -
            </Button>
            <p className="">{added}</p>
            <Button
              className=""
              disabled={!(product.stock > added)}
              onClick={addProduct}
              size="sm"
              variant="outline-secondary"
            >
              +
            </Button>
            {!(product.stock > added) ? (
              <p className="text-muted">Producto agotado!</p>
            ) : null}
          </div>
        )}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </Card.Body>
    </Card>
  );
}
