// const router = require('express').Router();
// const { User, Product, Cart, productCart } = require('../../db.js');

// router.post('/addProductCart', async (req, res) => {
// 	const { userId, productId, quantity } = req.body;

// 	try {
// 		const user = await User.findOne({ where: { id: userId } });
// 		const product = await Product.findOne({ where: { id: productId } });
// 		const cart = await Cart.findOrCreate({ total: product.price }); await user.update({ cartId: cart.id });

// 	} catch (error) {

// 	}

// });