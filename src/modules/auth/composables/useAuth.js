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

    return {
        store,
        createUser,
        loginUser
    }
}

export default useAuth