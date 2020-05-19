import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/portfolio`,
			withCredentials: true,
		})
	}

	findMyPortfolios = (userID) => this.service.get('/findMyPortfolios', userID)
	createNew = (userID, thePortfolio) => this.service.post(`/newPortfolio/${userID}`, thePortfolio)
	deletePortfolio = (portfolioID) => this.service.post(`/delete/${portfolioID}`)
}

export default services
