import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../NavBar/Navbar";
import Card_ from "../Card/Card";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function CartShop() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(null);

  const setTotal_ = () => {
    let total_ = 0;
    cart?.forEach((prod) => {
      total_ += prod.cantidad * prod.price;
    });
    setTotal(total_);
  };

  const saveCartToLocalStorage = (cart) => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  useEffect(() => {
    setTotal_();
    // saveCartToLocalStorage(cart);
  }, [cart]);

  const buy = async () => {
    const data = {
      unit_price: total,
    };
    const res = await axios.post(
      "https://latucumoda-backend.onrender.com/mercadopago",
      data
    );
    if (res.status === 200) {
      window.open(res.data, "_blank");
    }
  };

  return cart?.length > 0 ? (
    <>
      <Navbar />
      {total && total !== 0 ? (
        <>
          <p>{total}</p>
          <Button onClick={buy}>Comprar</Button>
        </>
      ) : null}
      <div className="d-flex row justify-content-around">
        {cart?.map((item) => (
          <div
            key={item.id}
            className="col-md-6 col-lg-4 d-flex justify-content-center"
          >
            <Card_ key={item.id} product={item} />
          </div>
        ))}
      </div>
    </>
  ) : (
    <>
      <Navbar />
      <h3 className="text-muted">No se agregaron productos al carro</h3>
    </>
  );
}
