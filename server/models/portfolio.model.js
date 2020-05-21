const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema(
	{
		title: String,
		companyName: String,
		companyAvatar: String,
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		education: [{ type: Schema.Types.ObjectId, ref: 'ExtraInfo' }],
		experience: [{ type: Schema.Types.ObjectId, ref: 'ExtraInfo' }],
		skills: Array,
		socialMedia: Array,
		works: Array,
		url: String,
		avatar: String,
		template: String,
		theme: String,
	},
	{
		timestamps: true,
	}
)

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio
