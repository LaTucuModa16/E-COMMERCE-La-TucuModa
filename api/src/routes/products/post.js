const router = require("express").Router();
const { getProduct, getProducts } = require("../../controllers/products");
const { Product, Categorie } = require("../../db");

router.post("/", async (req, res) => {
    try {
        const { name, stock, img, price, description, brand, size, fabric, categorie } = req.body;

        const newProduct = await Product.create({
            name,
            stock,
            img,
            price,
            description,
            brand,
            size,
            fabric,
        })

        let categorieDb = await Categorie.findAll({
            where: { name: categorie }
        })
        newProduct.addCategorie(categorieDb);
        res.send(newProduct)

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;