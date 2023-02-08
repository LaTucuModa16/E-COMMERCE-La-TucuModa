const router = require("express").Router();

const getProducts = require("./products/get");
const postProducts = require("./products/post");
const deleteProduct = require("./products/delete");
const categories = require('./categories/get.js');

const register = require("./auth.js/register");
const login = require("./auth.js/login");

const postCart = require('./cart/post.js');
const getCart = require('./cart/get.js');
const deleteCart = require('./cart/delete.js');

const mercadopago = require("./mercadoPago/checkout")
/*--------------------------------------  routes PRODUCTS  --------------------------------------  */

router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/products", deleteProduct);
router.use('/categories', categories);


/*--------------------------------------  routes AUTH  --------------------------------------  */

router.use("/register", register);
router.use("/login", login);

/*--------------------------------------  routes CART  --------------------------------------  */

router.use('/cart', postCart);
router.use('/cart', getCart);
router.use('/cart', deleteCart);

/*--------------------------------------  routes MERCADOPAGO  --------------------------------------  */

router.use("/mercadopago", mercadopago)

module.exports = router;

