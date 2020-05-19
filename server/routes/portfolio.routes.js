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
	const { companyName, companyAvatar, title, skills, socialMedia, works, url, experience, education, avatar } = req.body
	Portfolio.create({ companyName, companyAvatar, title, skills, socialMedia, works, url, experience, education, avatar, owner: req.params.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/delete/:id', checkAuth, (req, res, next) => {
	Portfolio.findByIdAndRemove(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})


module.exports = router
