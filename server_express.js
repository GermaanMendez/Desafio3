
const express = require('express')
const fs= require('fs')

const app = express()

const PORT=8080

const server = app.listen(8083)
const data = fs.readFileSync('./productos.json')

app.get('/products',(request,response)=>{
    response.send(data)
})

const numero=Math.floor(Math.random()*data.length)


app.get('/productoRandom',(request,response)=>{
    response.send('el numero es ' + data[numero])
})



