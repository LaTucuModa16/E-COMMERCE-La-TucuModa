const router = require('express').Router();
const { getUsers, getByUsername, getByEmail } = require('../../controllers/users');
const { User } = require('../../db');

router.get("/", async (req, res) => {
	const { username, email } = req.query;
	try {
		if (username) {
			const user = await getByUsername(username);
			res.status(200).send(user)
		} else if (email) {
			const userEmail = await getByEmail(email);
			res.status(200).send(userEmail)
		} else {
			const info = await getUsers();
			res.status(200).json(info)
		}
	} catch (error) {
		console.log(error)
	}
})



module.exports = router;