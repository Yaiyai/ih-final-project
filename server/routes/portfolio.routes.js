const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const Portfolio = require('../models/portfolio.model')

router.post('/createPortfolio', (req, res, next) => {
	Portfolio.create(req.body)
		.then((newPortfolio) => User.findByIdAndUpdate(req.user.id, { $push: { myPortfolios: newPortfolio.id } }))
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/updatePortfolio/:id', (req, res, next) => {
	Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
