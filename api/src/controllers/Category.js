const { Category } = require('../db.js');

const allCategories = async () => {
	try {
		const categoriesDB = await Category.findAll();
		if(!categoriesDB.length) {
			const categories = ['Remera', 'Pantalon'];

			categories.forEach( async e => {
				await Category.findOrCreate({
					where: {
						name: e
					}
				});
			});
			return categories
		} else {
			return categoriesDB.map(e => e.name);
		}
	} catch (error) {
		console.log(error)
	};
};


module.exports = {
	allCategories,
}