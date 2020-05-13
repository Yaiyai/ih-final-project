const express = require('express')
const router = express.Router()
const Portfolio = require('../models/portfolio.model')

router.get('/findMyPortfolios', (req, res, next) => {
	Portfolio.find({ owner: req.user.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
