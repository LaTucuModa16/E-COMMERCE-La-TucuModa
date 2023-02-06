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
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		img: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, { timestamps: false });
};