const express = require('express')
const router = express.Router()
const Portfolio = require('../models/portfolio.model')

const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/login'))

router.get('/findMyPortfolios', checkAuth, (req, res, next) => {
	Portfolio.find({ owner: req.user.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.get('/findThisPortfolio/:id', checkAuth, (req, res, next) => {
	Portfolio.findById(req.params.id)
		.populate('experience')
		.populate('education')
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/newPortfolio/:id', checkAuth, (req, res, next) => {
	const { profile, works, experience, education, avatar } = req.body
	console.log({ profile, works, experience, education, owner: req.params.id })

	Portfolio.create({ profile, works, experience, education, avatar, owner: req.params.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

//Gereate URL to share
router.post('/createUrlPortfolio/:portfolioID/:newUrl', (req, res, next) => {
	Portfolio.findByIdAndUpdate(req.params.portfolioID, { url: req.params.newUrl }, { new: true })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
