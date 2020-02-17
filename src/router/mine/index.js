export default {
    path : '/mine',
    component : () => import('@/views/Mine'),
    children : [
        {
            path : 'center',
            component : () => import('@/views/Mine/center.vue')
        },
        {
            path : 'login',
            component : () => import('@/components/Login')
        },
        {
            path : 'register',
            component : () => import('@/components/Register')
        },
        {
            path : 'findPassword',
            component : () => import('@/components/FindPassword')
        },
        {
            path : 'users',
            component : ()=>import('@/views/Mine/users.vue')
        },
        {
            path : 'movie',
            component : ()=>import('@/views/Mine/movie.vue')
        },
        {
            path : 'cinema',
            component : ()=>import('@/views/Mine/cinema.vue')
        },
        {
            path : '/mine',
            redirect : 'center'
        }
    ]
}