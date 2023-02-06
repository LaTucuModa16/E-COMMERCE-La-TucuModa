const { Cart, Product } = require('../db.js');
const jsonProducts = require('./JSON/JsonOfProducts.js');

const getCart = async (userId) => {
	const cart = await Cart.findAll({
		where: {
			userId
		},
		include: {
			model: Product,
			attributes: ['name', 'img', 'price']
		}
	});
	const result = cart.map(e => {
		return {
			id: e.id,
			userId: e.userId,
			productId: e.productId,
			name: e.products[0].name,
			img: e.products[0].img,
			price: e.products[0].price,
			quantity: e.quantity
		}
	});

	return result;
};

module.exports = {
	getCart
}