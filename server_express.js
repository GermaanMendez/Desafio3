
const express = require('express')
const fs= require('fs')

const app = express()

const PORT=8080

const server = app.listen(8082)
const data = fs.readFileSync('./productos.txt')

app.get('/products',(request,response)=>{
    response.send(data)
})

const numero=Math.floor(Math.random()*data.length)

app.get('/productoRandom',(request,response)=>{
    response.send(data[numero])
})



