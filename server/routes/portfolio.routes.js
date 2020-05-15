const express = require('express')
const router = express.Router()
const Portfolio = require('../models/portfolio.model')

const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/login'))

router.get('/findMyPortfolios', checkAuth, (req, res, next) => {
	Portfolio.find({ owner: req.user.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
