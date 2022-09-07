export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "authlayout" */ '../../auth/layouts/AuthLayout'),
    children: [
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../../auth/views/LoginView'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "register" */ '../../auth/views/RegisterView'),
        },

    ]
}