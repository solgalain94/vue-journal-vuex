import axios from 'axios'

const journal = axios.create({
    baseURL: "https://vuejsdemos-default-rtdb.firebaseio.com"
})

journal.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('token')
    }

    return config
})

export default journal