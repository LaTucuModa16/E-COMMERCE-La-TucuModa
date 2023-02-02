const router = require("express").Router();

const getProducts = require("./products/get");
const postProducts = require("./products/post");
const deleteProduct = require("./products/delete");
const categories = require('./categories/get.js');
const filterByBrand = require('./filters/filterByBrand.js');
const filterByCategory = require('./filters/filterByCategory.js');
const filterBySize = require('./filters/filterBySize');

/*--------------------------------------  routes PRODUCTS  --------------------------------------  */

router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/products", deleteProduct);
router.use('/categories', categories);
router.use('/products/filters', filterByBrand);
router.use('/products/filters', filterByCategory);
router.use('/products/filters', filterBySize);


module.exports = router;

