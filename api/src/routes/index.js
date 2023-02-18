const router = require("express").Router();

const getProducts = require("./products/get");
const postProducts = require("./products/post");
const deleteProduct = require("./products/delete");
const updateProduct = require("./products/update");
const categories = require('./categories/get.js');

const register = require("./auth.js/register.js");
const login = require("./auth.js/login");

const postCart = require('./cart/post.js');
const getCart = require('./cart/get.js');
const deleteCart = require('./cart/delete.js');

const mercadopago = require("./mercadoPago/checkout");

const getUsers = require("./user/get");
const geUserByUsername = require("./user/getUserByUsername");
const getUserByEmail = require("./user/getUserByEmail");
const updateUser = require("./user/update");


/*--------------------------------------  routes PRODUCTS  --------------------------------------  */

router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/products", deleteProduct);
router.use("/products", updateProduct)
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

/*--------------------------------------  routes USERS  --------------------------------------  */

router.use("/users", getUsers, updateUser, geUserByUsername, getUserByEmail)

module.exports = router;
