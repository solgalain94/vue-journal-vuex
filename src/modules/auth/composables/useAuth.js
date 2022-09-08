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
    const logout = () => {
        store.commit('auth/logout')
    }

    return {
        store,
        createUser,
        loginUser,
        checkStatus,
        logout,
        authStatus: computed( () => store.getters['currentState']),
        usernema: computed( () => store.getters['username'])
    }
}

export default useAuth