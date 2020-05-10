const mongoose = require('mongoose')
const User = require('../models/user.model')
const MyCV = require('../models/mycv.model')
const ExtraInfo = require('../models/extrainfo.model')
const Portfolio = require('../models/portfolio.model')

const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)

mongoose.connect('mongodb://localhost/cuentamemasih', { useNewUrlParser: true, useUnifiedTopology: true })

const users = [
	{
		username: 'Yaiyai',
		email: 'myd.rio@hotmail.com',
		password: bcrypt.hashSync('yai', salt),
		avatar: 'https://res.cloudinary.com/cuentamemasih/image/upload/v1589105713/IMG_5477_skvqnf.jpg',
		name: 'Yaiza',
		lastName: 'del Río Mediavilla',
		phone: '615000000',
	},
	{
		username: 'user1',
		email: 'user1@user.com',
		password: bcrypt.hashSync('user1', salt),
		avatar: 'https://res.cloudinary.com/cuentamemasih/image/upload/v1589107987/avataaars_1_qyb9j7.png',
		name: 'User1',
		lastName: 'user1 user1',
		phone: '615000001',
	},
	{
		username: 'user2',
		email: 'user2@user.com',
		password: bcrypt.hashSync('user2', salt),
		avatar: 'https://res.cloudinary.com/cuentamemasih/image/upload/v1589107987/avataaars_tilpwd.png',
		name: 'User2',
		lastName: 'user2 user2',
		phone: '625000002',
	},
	{
		username: 'user2',
		email: 'user2@user.com',
		password: bcrypt.hashSync('user2', salt),
		avatar: 'https://res.cloudinary.com/cuentamemasih/image/upload/v1589107987/avataaars_tilpwd.png',
		name: 'User2',
		lastName: 'user2 user2',
		phone: '625000002',
	},
	{
		username: 'user3',
		email: 'user3@user.com',
		password: bcrypt.hashSync('user3', salt),
		avatar: 'https://res.cloudinary.com/cuentamemasih/image/upload/v1589107987/avataaars_2_q1ddbd.png',
		name: 'User3',
		lastName: 'user3 user3',
		phone: '635000003',
	},
]

User.create(users)
	.then((allUsers) =>
		allUsers.forEach((user) => {
			let cvPromise = MyCV.create({ owner: user.id })
			let portfolioPromise = Portfolio.create({ owner: user.id })

			Promise.all([cvPromise, portfolioPromise])
				.then((response) => mongoose.connection.close())
				.catch((err) => console.log(err))
		})
	)
	.catch((err) => console.log(err))
