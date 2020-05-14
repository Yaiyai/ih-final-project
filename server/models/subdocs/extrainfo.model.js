const mongoose = require('mongoose')
const Schema = mongoose.Schema

const extrainfoSchema = new Schema(
	{
		place: String,
		duration: String,
		experienceInfo: String,
		typeOfInfo: {
			type: 'String',
			enum: ['Education', 'Job'],
		},
		cv: { type: Schema.Types.ObjectId, ref: 'myCV' },
	},
	{
		timestamps: true,
	}
)

const ExtraInfo = mongoose.model('ExtraInfo', extrainfoSchema)

module.exports = ExtraInfo
