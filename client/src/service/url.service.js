import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/sharing`,
			withCredentials: true,
		})
	}

	createPublicUrl = (portfolioUrl) => this.service.get(`/${portfolioUrl}`)
}

export default services
