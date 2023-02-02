const { Router } = require('express');
const router = Router();
const { getProducts } = require('../../controllers/products.js');

router.get('/bycategory', async (req, res) => {
	const { category } = req.query;

	try {
		const allProducts = await getProducts();
		if(category) {
			const filterCategory = allProducts.filter(e => e.categorie[0].name.toLowerCase() === category.toLowerCase());
			filterCategory.length ?

			res.status(200).send(filterCategory) :

			res.status(400).send('There are no categories with that name');

		} else {
			res.status(404).send('There are no categories with that name');
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;