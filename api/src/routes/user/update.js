const router = require("express").Router();
const { User } = require("../../db");

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { username, name, last_name, email, password, img, is_banned, is_admin } = req.body

        const updateUser = await User.update(
            { username, name, last_name, email, password, img, is_banned, is_admin },
            { where: { id } }

        )
        const user = await User.findOne({
            where: { id }
        })
        res.send({ user })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: error.msg })
    }
})

module.exports = router;