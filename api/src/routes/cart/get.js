const router = require('express').Router();
const { Cart } = require('../../db.js');

router.get('/', async (req, res) => {
	const { userId } = req.query;
	try {
		const cart = await Cart.findAll({
			where: {
				userId
			}
		});
		res.status(200).send(cart);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;