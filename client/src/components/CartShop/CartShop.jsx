import React, { Component } from "react";
import { useSelector } from "react-redux";
import Navbar from "../NavBar/Navbar";
import Card_ from "../Card/Card";

export default function CartShop() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <>
      <Navbar />
      <div className="cart-shop">
        {cart?.map((item) => (
          <Card_ key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}
