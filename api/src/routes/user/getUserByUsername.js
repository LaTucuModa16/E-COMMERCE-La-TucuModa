const router = require('express').Router();
const e = require('express');
const { getUsers, getByUsername, getByEmail } = require('../../controllers/users');
const { User } = require('../../db');

router.get("/:username", async (req, res) => {
    try {
        const { username } = req.params;
        if (username) {
            const user = await getByUsername(username);
            res.send(user)
        } else {
            res.send({ msg: "username not found" })
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;