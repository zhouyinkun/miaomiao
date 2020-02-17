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
        //配置详情页,在movie中router-view命名为detail，所以下面为detail
        //配置成动态路由,传递的参数为movieId
        {
            path : 'detail/1/:movieId',
            components : {
                default : ()=>import('@/components/NowPlaying'),
                detail : ()=>import('@/views/Movie/detail')
            },
            props : {//用于获取动态路由的传递参数,一般路由：props=true
                detail : true
            }
        },
        {
            path : 'detail/2/:movieId',
            components : {
                default : ()=>import('@/components/ComingSoon'),
                detail : ()=>import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
        },
        //2级路由重定向
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        },
    ]
}