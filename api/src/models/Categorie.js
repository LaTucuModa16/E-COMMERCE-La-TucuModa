const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("categorie", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};