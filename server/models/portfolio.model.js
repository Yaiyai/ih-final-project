const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema(
	{
		title: String,
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		profile: Array,
		education: [{ type: Schema.Types.ObjectId, ref: 'ExtraInfo' }],
		experience: [{ type: Schema.Types.ObjectId, ref: 'ExtraInfo' }],
		works: Array,
		url: String,
		avatar: String,
	},
	{
		timestamps: true,
	}
)

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio
