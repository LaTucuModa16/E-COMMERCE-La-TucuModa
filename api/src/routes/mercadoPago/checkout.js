const router = require("express").Router();
// SDK de Mercado Pago
const mercadopago = require("mercadopago");

const { getCart } = require("../../controllers/cart");
const { User } = require("../../db.js");

// Agrega credenciales
mercadopago.configure({
  access_token:
    "APP_USR-2930586652538555-020618-09179376acf1d7fd53970c3aed178531-1303361109",
});

router.post("/", async (req, res) => {
  const product = req.body;

  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: "Compra",
        unit_price: product.unit_price,
        // picture_url: product.img,
        quantity: 1,
        currency_id: "ARS",
      },
    ],
    back_urls: {
      success: "https://latucumoda-backend.onrender.com/home",
      failure: "https://latucumoda-backend.onrender.com/cart",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  await mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json(response.response.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
