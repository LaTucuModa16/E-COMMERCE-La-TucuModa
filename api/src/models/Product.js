const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING
        },
        colour: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        size: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        fabric: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        }
    })
}