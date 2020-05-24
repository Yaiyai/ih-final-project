const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ExtraInfo = require('./subdocs/extrainfo.model')

const cvSchema = new Schema(
	{
		title: String,
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		socialMedia: Array,
		skills: Array,
		whatIveDone: Array,
	},
	{
		timestamps: true,
	}
)

const myCV = mongoose.model('myCV', cvSchema)

module.exports = myCV
