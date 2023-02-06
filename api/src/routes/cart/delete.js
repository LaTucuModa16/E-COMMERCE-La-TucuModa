const router = require('express').Router();
const { Cart } = require('../../db.js');

router.delete('/deleteproductcart', async (req, res) => {
	const { productId } = req.query;

	try {
		if (productId) {
			await Cart.destroy({
				where: {
					productId,
				}
			});
		};

		res.status(200).send('The product has been removed from the cart');	

	} catch (error) {
		console.log(error);
	}
});

module.exports = router;