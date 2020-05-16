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
	createJob = (cvID, { place, duration, experienceInfo }) => this.service.post(`/addJob/${cvID}`, { place, duration, experienceInfo })
	createEducation = (cvID, { place, duration, experienceInfo }) => this.service.post(`/addEducation/${cvID}`, { place, duration, experienceInfo })
}

export default services
