const router = require('express').Router();
const { User, Product, Cart, productCart } = require('../../db.js');

router.post('/addproductcart', async (req, res) => {
	const { userId, productId, quantity } = req.body;
	try {
		const newCart = await Cart.create({
			userId,
			productId,
			quantity: 1
		});
		const product = await Product.findOne({
			where: {
				id: productId
			}
		});
		newCart.addProduct(product);
		res.status(200).send('Product added successfully');

	} catch (error) {
		console.log(error);
	}

});

module.exports = router;