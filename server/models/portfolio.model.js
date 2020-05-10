const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema(
	{
		title: String,
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		profile: Array,
		education: Array,
		experience: Array,
		works: Array,
		url: String,
	},
	{
		timestamps: true,
	}
)

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio
