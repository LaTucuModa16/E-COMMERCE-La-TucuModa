const router = require('express').Router();
const { User, Product, Cart, productCart } = require('../../db.js');

router.post('/addproductcart', async (req, res) => {
	const { userId, productId, quantity } = req.body;
	try {
		const cart = await Cart.findAll();
		const result = cart.map(e => e.dataValues.productId);
		const resultId = result.filter(e => e === productId)

		if (productId !== resultId[0]) {
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
		} else {
			res.status(404).send('This product is already added to the cart');	
		}

	} catch (error) {
		console.log(error);
	}

});

module.exports = router;