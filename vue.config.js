module.exports = {
    //让静态资源在miaomiao/根目录下访问y
    publicPath : '/miaomiao',
    devServer : {
        proxy : {
            '/api2' : {
                target : 'http://localhost:3000',
                changeOrigin : true
            },
            '/ajax' : {
                target : 'https://m.maoyan.com',
                changeOrigin : true
            },
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true
            }
        }
    }
}