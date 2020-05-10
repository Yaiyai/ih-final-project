const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cvSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		education: { type: Schema.Types.ObjectId, ref: 'ExtraInfo' },
		jobs: { type: Schema.Types.ObjectId, ref: 'ExtraInfo' },
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
