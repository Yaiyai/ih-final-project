const express = require('express')
const router = express.Router()
const Cv = require('../models/mycv.model')

router.get('/findMyCvs', (req, res, next) => {
	Cv.find({ owner: req.user.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})
router.get('/findThisCv/:id', (req, res, next) => {
	Cv.findById(req.params.id)
		.populate('education')
		.populate('jobs')
		.populate('owner')
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
