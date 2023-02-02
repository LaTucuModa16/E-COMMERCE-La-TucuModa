const { Router } = require('express');
const router = Router();
const { allCategories } = require('../../controllers/Category.js');

router.get('/' , async (req, res) => {
	const categories = await allCategories();
	categories.length ?
	res.status(200).send(categories) :
	res.status(404).send('No categories');
});

module.exports = router;
