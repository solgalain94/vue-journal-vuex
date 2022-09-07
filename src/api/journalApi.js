import axios from 'axios'

const journal = axios.create({
    baseURL: "https://vuejsdemos-default-rtdb.firebaseio.com"
})

export default journal