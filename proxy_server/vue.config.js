module.exports ={
    devServer:{
        host:'localhost',
        port:8084,
        proxy:{
            '/api':{
                target:'http://localhost:3000',
                changeOrigin:true,
            }
        }
    }
}