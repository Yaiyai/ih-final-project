const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const Cv = require('../models/mycv.model')
const Info = require('../models/subdocs/extrainfo.model')

router.post('/createCv', (req, res, next) => {
    let newCV = {
        owner: req.user.id,
        title: req.body.title,
        socialMedia: req.body.socialMedia,
        skills: req.body.skills,
        whatIveDone: req.body
    }
})

module.exports = router