const router = require("express").Router();
const { encrypt } = require("./helpers/handleBrcrypt")
const { User } = require("../../db")
const CryptoJS = require("crypto-js");
const { enviarMail } = require("./config/nodemailer")

//REGISTER
router.post("/", async (req, res) => {
    try {
        const { username, name, last_name, email, password, img, } = req.body;
        const passwordHash = await encrypt(password)

        const newUser = await User.create({
            username,
            name,
            last_name,
            email,
            img,
            password: passwordHash,
        })


        await enviarMail(email)
        res.send({ newUser })

    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

module.exports = router;