const { Router } = require('express');
const router = Router();
const { getProducts } = require('../../controllers/products.js');

router.get('/bysize', async (req, res) => {
	const { size } = req.query;

	try {
		const allProducts = await getProducts();
		if(size) {
			const filterSize = allProducts.filter(e => e.size.includes(size.toUpperCase()));

			filterSize.length ?

			res.status(200).send(filterSize) :

			res.status(404).send(`There are no size "${size.toUpperCase()}"`);

		} else {
			res.status(404).send(`There are no size "${size.toUpperCase()}"`);
		}

	} catch (error) {
		console.log(error);
	}
});

module.exports = router;