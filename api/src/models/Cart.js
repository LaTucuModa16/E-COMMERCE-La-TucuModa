const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('cart', {
		userId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		productId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, { timestamps: false });
};