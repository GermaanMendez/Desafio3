const fs = require('fs')

const productos=[
    {
        name:'Celular',
        price:2000
    },
    {
        name:'Auricular',
        price:200,
    },
    {
        name:'Case',
        price:100
    },
    {
        name:'Cargador',
        pice:400
    },
]


fs.writeFileSync('productos.txt',JSON.stringify(productos))