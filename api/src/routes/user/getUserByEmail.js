const router = require('express').Router();
const { getByEmail } = require('../../controllers/users');

router.get("/:email", async (req, res) => {
    const { email } = req.params;
    try {
        if (email) {
            const userByEmail = await getByEmail(email);
            res.send(userByEmail)
        } else {
            res.send({ msg: "email not found" })
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;