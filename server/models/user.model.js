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
		myCv: { type: Schema.Types.ObjectId, ref: 'myCV' },
		myPortfolios: [{ type: Schema.Types.ObjectId, ref: 'Portfolio' }],
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model('User', userSchema)

module.exports = User
