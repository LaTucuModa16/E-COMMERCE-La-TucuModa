const { Router } = require('express');
const router = Router();
const { allCategories } = require('../../controllers/categories.js');

router.get('/', async (req, res) => {
	const categories = await allCategories();

	categories.length ?

	res.status(200).json(categories) :

	res.status(404).send('No categories');
});

module.exports = router;