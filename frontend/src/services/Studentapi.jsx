import {axiosClient} from "../api/axios.js";

const StudentApi = {
    getCsrfToken: async () => {
        return await axiosClient.get('/sanctum/csrf-cookie')
    },
    login: async (email,password) => {
        return await axiosClient.post('/api/login', {email,password})
    },
    logout: async (config) => {
        return await axiosClient.post('/api/logout',{},config)
    },
    getUser: async () => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        return await axiosClient.get('/api/user',config)

    },
}
export default StudentApi
