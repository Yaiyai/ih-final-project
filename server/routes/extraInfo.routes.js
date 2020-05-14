const express = require('express')
const router = express.Router()
const ExtraInfo = require('./../models/subdocs/extrainfo.model')

//Create more jobs or education

router.post('/addInfo', (req, res, next) => {
	ExtraInfo.create(req.body)
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
