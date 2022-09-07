import { computed } from "vue"
import { useStore } from "vuex"

const useAuth = () => {

    const store = useStore()

    const createUser = async(user) => {
        const resp = await store.dispatch('auth/createUser',user)        
        return resp
    }
    const loginUser = async (user) => {
        const resp = await store.dispatch('auth/signInUser', user)
        return resp
    }
    const checkStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    return {
        store,
        createUser,
        loginUser,
        checkStatus,
        authStatus: computed( () => store.getters['currentState'])
    }
}

export default useAuth