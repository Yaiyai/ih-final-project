const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		username: String,
		email: String,
		password: String,
		avatar: String,
		name: String,
		lastName: String,
		phone: String,
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model('User', userSchema)

module.exports = User
