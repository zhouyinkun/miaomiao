export default{
    path : '/movie',
    component : ()=>import('@/views/Movie'),
    //添加2级路由
    children : [
        {
            path : 'city',
            component : ()=>import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : ()=>import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : ()=>import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : ()=>import('@/components/Search')
        },
        //2级路由重定向
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}