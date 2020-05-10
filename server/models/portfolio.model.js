const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		myExperience: { type: Schema.Types.ObjectId, ref: 'myCV' },
		templateType: { type: Schema.Types.ObjectId, ref: 'PortfolioTemplate' },
		url: String,
	},
	{
		timestamps: true,
	}
)

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio
