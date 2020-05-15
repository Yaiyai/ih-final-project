import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}`,
			withCredentials: true,
		})
	}

	findMyPortfolios = (userID) => this.service.get('/findMyPortfolios', userID)
}

export default services
