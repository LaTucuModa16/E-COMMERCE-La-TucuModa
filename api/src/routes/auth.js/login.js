const router = require("express").Router();
const {User} = require ("../../db");

router.post("/", async (req, res)=> {
    const {email, password} = req.body;
})

module.exports = router;