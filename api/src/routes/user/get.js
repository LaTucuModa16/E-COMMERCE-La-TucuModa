const router = require('express').Router();
const { getUser, getUserId } = require('../../controllers/users.js');
const { User } = require('../../db.js');

router.get('/', async (req, res) => {

	const { userId } = req.query;

	if(userId) {
		const user = await getUserId(userId);
		res.status(200).send(user);	
	} else {
		const users = await getUser();
		res.status(200).send(users);
	}
});

module.exports = router;