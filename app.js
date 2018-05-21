

var express = require('express')
var bodyParser = require('body-parser')


// Inicializacion del app

var app = express()



// Importar rutas
var appRoutes= require('./routes/app')
var printRoutes= require('./routes/print')

// Body parser

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// Rutas



app.use('/',appRoutes)
app.use('/print',printRoutes)

// Puerto de escucha


app.listen(3000, ( ) =>{
    console.log('Iniciando puerto')
    console.log('Express puerto: \x1b[32m%s\x1b[0m','3000')
})