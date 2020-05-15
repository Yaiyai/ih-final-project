import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}`,
			withCredentials: true,
		})
	}
	signup = ({ username, email, password }) => this.service.post('/signup', { username, email, password })
	login = ({ username, password }) => this.service.post('/login', { username, password })
	logout = () => this.service.post('/logout')
	isLoggedIn = () => this.service.get('/loggedin')
}

export default services
