const router = require("express").Router();
const { User } = require("../../db")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//LOGIN
router.post("/", async (req, res) => {
    try {
        const { username } = req.body;

        const user = await User.findOne({ username })
        if (!user) {
            res.status(401).json("This user does not exist")
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const pass = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (pass !== req.body.password) {
            res.status(401).json("The credentials are wrong")
        }

        const accessToken = jwt.sign({
            id: user.id
        },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        )


        res.status(200).json({ user, token: accessToken })
    } catch (error) {
        res.status(404).json(error)
    }

})


module.exports = router;