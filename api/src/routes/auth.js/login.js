const router = require("express").Router();
const { User } = require("../../db");
const bcrypt = require("bcryptjs")


router.post("/", async (req, res) => {
    try {
        const { username, password } = req.body;

        const userFound = await User.findOne({ where: { username } })

        if (!userFound) return res.status(404).json({ msg: "User not found" })

        const matchPassword = await bcrypt.compare(password, userFound.password)

        if (!matchPassword) return res.status(401).json({ msg: "Invalid password" })

        res.status(200).send(userFound)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;