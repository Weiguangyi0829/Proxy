const express = require('express')

const app = express()

app.get('/api/news',(req,res)=>{
    res.send({})
})