import authApi from "@/api/authApi"

export const createUser = async( {commit}, user ) => {

    const { name, email, password } = user 

    try {


        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        console.log(data)
        const { idToken, refreshToken } = data

        const resp = await authApi.post(':update', { displayName: name, idToken, refreshToken })

        console.log(resp)
        delete user.password
      
        //mutation
        commit('loginUser', { user, idToken, refreshToken } )

        return { ok:true }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}
export const signInUser = async ({ commit }, user) => {

    const { email, password } = user

    try {

        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
        const { displayName, idToken, refreshToken } = data

        user.name = displayName

        //mutation
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}

export const checkAuthentication = async ({commit}) =>{

    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if(!idToken) {
        commit('logout')
        return {ok: false, message: 'No hay token en la petición'}
    }

    try {

        const {data} = await authApi.post(':lookUp', {idToken})
        const { displayName, email } = data.users[0]

        const user = {
            name: displayName,
            email
        }

        console.log(data)
        commit('loginUser', { user, idToken, refreshToken })

        return {ok: true}

        
    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.error.message }
    }

}