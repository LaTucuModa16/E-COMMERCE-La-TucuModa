const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('productcart', {
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		total: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		img: {
			type: DataTypes.TEXT
		},
		name: {
			type: DataTypes.STRING
		},
		price: {
			type: DataTypes.DECIMAL
		}
	}, { timestamps: false });
};