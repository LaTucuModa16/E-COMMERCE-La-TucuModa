const router = require('express').Router();
const { getCart } = require('../../controllers/cart.js');

router.get('/', async (req, res) => {
	const { userId } = req.query;
	try {
		const cart = await getCart(userId);

		res.status(200).send(cart);
		
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;