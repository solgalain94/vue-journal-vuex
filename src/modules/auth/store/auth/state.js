//es reactivo, cuando se cambia el state se notifica a todos los componentes donde esten escuchando los cambios del state
export default () => ({
    status: 'authenticating',
    user: null,
    idToken: null,
    refreshToken: null
})