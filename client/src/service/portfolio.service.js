import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: 'http://localhost:5000/api',
			withCredentials: true,
		})
	}

	findMyPortfolios = (userID) => this.service.get('/findMyPortfolios', userID)
}

export default services
