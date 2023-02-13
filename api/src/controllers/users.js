const { User } = require('../db.js');

const getUser = async () => {
	try {
		const users = await User.findAll();
	
		const result = await users.map(e => {
			return {
				id: e.id,
				username: e.username,
				name: e.name,
				last_name: e.last_name,
				email: e.email,
				password: e.password,
				img: e.img,
				adult: e.adult,
				is_banned: e.is_banned
			}
		});

		return result;

	} catch (error) {
		console.log(error);
	}
};

const getUserId = async (userId) => {
	try {
		const user = await User.findOne({
			where: {
				id: userId
			}
		});

		return user;

	} catch (error) {
		console.log(error);
	}
};


module.exports = {
	getUser,
	getUserId
}