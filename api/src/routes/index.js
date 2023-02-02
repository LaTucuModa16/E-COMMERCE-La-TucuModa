const router = require("express").Router();

const getProducts = require("./products/get");
const postProducts = require("./products/post");
const deleteProduct = require("./products/delete");
const categories = require('./categories/get.js');

/*--------------------------------------  routes PRODUCTS  --------------------------------------  */

router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/products", deleteProduct);
router.use('/categories', categories);


module.exports = router;

