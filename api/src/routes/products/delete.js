const router = require("express").Router();
const { getProduct, getProducts } = require("../../controllers/products");
const { Product } = require("../../db");

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Product.destroy({
            where: { id, }
        })
        res.status(200).send("Deleted product")
    } catch (error) {
        console.log("Error Deleted", error)
        res.status(404).json({ msg: error.msg })
    }
})

module.exports = router;