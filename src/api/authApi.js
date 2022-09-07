import axios from 'axios'

const authApi = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
    params:{
        key: 'AIzaSyB69gMLpF-fX_DvJbxIMosVlmWN9ax5C8s'

        

    }
})

export default authApi