const { use } = require('../app.js');
const { User } = require('../db.js');
const jsonUser = require("./JSON/JsonOfUser");

const getUsers = async () => {
	try {
		const users = await User.findAll();
		if (users.length === 0) {
			try {
				jsonUser.map(async (e) => {
					await User.create({
						username: e.username,
						name: e.name,
						last_name: e.last_name,
						email: e.email,
						password: e.password,
						img: e.img,
						is_admin: e.is_admin
					});
				})
				return console.log("BD de User completada")
			} catch (error) {
				console.log(error)
			}
		}

		const result = await users.map(e => {
			return {
				id: e.id,
				username: e.username,
				name: e.name,
				last_name: e.last_name,
				email: e.email,
				password: e.password,
				img: e.img,
				is_banned: e.is_banned,
				is_admin: e.is_admin
			}
		});

		return result;

	} catch (error) {
		console.log(error);
	}
};

const getByUsername = async (username) => {
	try {
		const user = await User.findAll({
			where: { username },
		})

		const res = await user.map(e => {
			return {
				id: e.id,
				username: e.username,
				name: e.name,
				last_name: e.last_name,
				email: e.email,
				password: e.password,
				img: e.img,
				is_banned: e.is_banned,
				is_admin: e.is_admin
			}
		})
		return (res)
	} catch (error) {
		return res.status(400).json({ msg: error.msg })
	}
}

const getByEmail = async (email) => {
	try {
		const user = await User.findAll({
			where: { email }
		})

		const result = await user.map(e => {
			return {
				id: e.id,
				username: e.username,
				name: e.name,
				last_name: e.last_name,
				email: e.email,
				password: e.password,
				img: e.img,
				is_banned: e.is_banned,
				is_admin: e.is_admin
			}
		})
		return result;
	} catch (error) {
		return res.status(400).json({ msg: error.msg })
	}
}

const getUserId = async (id) => {
	try {
		const user = await User.findByPk({
			where: {
				id: id
			}
		});
		const res = await user.map(e => {
			return {
				id: e.id,
				username: e.username,
				name: e.name,
				last_name: e.last_name,
				email: e.email,
				password: e.password,
				img: e.img,
				is_banned: e.is_banned,
				is_admin: e.is_admin
			}
		})
		return res;

	} catch (error) {
		console.log(error);
	}
};


module.exports = {
	getUsers,
	getUserId,
	getByEmail,
	getByUsername
}