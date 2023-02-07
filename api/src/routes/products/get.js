const router = require("express").Router();
const { getProduct, getProducts } = require("../../controllers/products");
const { Product, Categorie } = require("../../db");

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const words = name.split(" ");
      const products = await getProducts();
      const result = products.filter((prod) => {
        let validate = true;
        words.forEach((word) => {
          if (
            !prod.name.toLowerCase().includes(word.toLowerCase()) &&
            !prod.brand.toLowerCase().includes(word.toLowerCase()) &&
            !prod.colour
              .map((color) => color.toLowerCase())
              .includes(word.toLowerCase()) &&
            !prod.categorie[0]?.name.toLowerCase().includes(word.toLowerCase())
          ) {
            validate = false;
          }
        });
        return validate;
      });
      res.send(result);
    } else {
      const all = await getProducts();
      res.send(all);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const all = await getProducts();

  const product = await all.filter((e) => e.id == id);
  if (product.length) {
    res.status(200).send(product);
  } else {
    res.status(404).send("Id incorrecto");
  }
});

module.exports = router;
