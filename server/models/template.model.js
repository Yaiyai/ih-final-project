const mongoose = require('mongoose')
const Schema = mongoose.Schema

const templateSchema = new Schema({
    profile: Array,
    education: Array,
    experience: Array,
    works: Array
}, {
    timestamps: true
})

const portfolioTemplate = mongoose.model('PortfolioTemplate', templateSchema)
module.exports = portfolioTemplate