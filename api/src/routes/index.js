const router = require("express").Router();

const getProducts = require("./products/get");
const postProducts = require("./products/post");
const deleteProduct = require("./products/delete");
const categories = require('./categories/get.js');
const filterByBrand = require('./filters/filterByBrand.js');
const filterByCategory = require('./filters/filterByCategory.js');
const filterBySize = require('./filters/filterBySize');

const register = require("./auth.js/register");
const login = require("./auth.js/login");
/*--------------------------------------  routes PRODUCTS  --------------------------------------  */

router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/products", deleteProduct);
router.use('/categories', categories);
router.use('/products/filters', filterByBrand);
router.use('/products/filters', filterByCategory);
router.use('/products/filters', filterBySize);

/*--------------------------------------  routes AUTH  --------------------------------------  */

router.use("/register", register);
router.use("/login", login);

module.exports = router;

