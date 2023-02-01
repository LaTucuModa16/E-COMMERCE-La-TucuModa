const { Product, Categorie } = require("../db");
const { Op } = require("sequelize");
const jsonProducts = require("./JSON/JsonOfProducts");

const getProducts = async () => {
    const products = await Product.findAll({
        include: {
            model: Categorie,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })

    if (products.length === 0) {
        try {
            jsonProducts.map(async (e) => {
                let newProduct = await Product.create({
                    name: e.name,
                    stock: e.stock,
                    img: e.img,
                    price: e.price,
                    description: e.description,
                    brand: e.brand,
                    size: e.size,
                    fabric: e.fabric
                });
                let newProductCategorie = await Categorie.findAll({
                    where: { name: e.Categorie },
                });
                newProduct.addCategorie(newProductCategorie);
                console.log("BD de Producos completada")
            })
        } catch (error) {
            console.log("Error Products", error)
        }
    }

    const result = await products.map(e => {
        return {
            id: e.id,
            name: e.name,
            stock: e.stock,
            img: e.img,
            price: e.price,
            description: e.description,
            brand: e.brand,
            size: e.size,
            fabric: e.fabric,
            categorie: e.Categorie.map((e) => e.name)
        }
    })
    return (result);
}

const getProduct = async (name) => {
    try {
        const productName = await Product.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            },
            include: {
                model: Categorie,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })

        const res = await productName.map(e => {
            return {
                id: e.id,
                name: e.name,
                stock: e.stock,
                img: e.img,
                price: e.price,
                description: e.description,
                brand: e.brand,
                size: e.size,
                fabric: e.fabric,
                categorie: e.Categorie.map((e) => e.name)
            }
        })
        return (res)
    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}

module.exports = { getProducts, getProduct }