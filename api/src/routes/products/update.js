const router = require("express").Router();
const { Product, Categorie } = require("../../db");

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { name, stock, img, price, description, brand, colour, size, fabric, categories } = req.body

        const updateProduct = await Product.update(
            { name, stock, img, price, size },
            { where: { id } }
        )

        const product = await Product.findOne({
            where: { id }
        })

        res.send({ product })

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
})

module.exports = router;