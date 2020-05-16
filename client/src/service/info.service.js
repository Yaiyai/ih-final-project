import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/extraInfo`,
			withCredentials: true,
		})
	}

	findJobs = (cvID) => this.service.get(`/getJobs/${cvID}`)
	findEducations = (cvID) => this.service.get(`/getEducations/${cvID}`)
	createJob = (cvID, theJob) => this.service.post(`/addJob/${cvID}`, theJob)
	createEducation = (cvID, theEducation) => this.service.post(`/addEducation/${cvID}`, theEducation)
	deleteInfo = (id) => this.service.post(`/delete/${id}`)
}

export default services
