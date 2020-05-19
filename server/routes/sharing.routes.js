const express = require('express')
const router = express.Router()
const Portfolio = require('../models/portfolio.model')

router.get('/:url', (req, res, next) => {
	Portfolio.findOne({ url: req.params.url })
		.populate('owner')
		.populate('education')
		.populate('experience')
		// .then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
