const { Router } = require('express');
const router = Router();
const { getProducts } = require('../../controllers/products.js');

router.get('/bybrand', async (req, res) => {
	const { brand } = req.query;

	try {
		const allProducts = await getProducts();
		if(brand) {
			const filterBrand = allProducts.filter(e => e.brand.toLowerCase().includes(brand.toLowerCase()));
			filterBrand.length ?

			res.status(200).send(filterBrand) :

			res.status(404).send('There are no brands with that name');

		} else {
			res.status(404).send('There are no brands with that name')
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
