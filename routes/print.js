
  var express =require('express')
  var incov=require('iconv-lite')


  var app= express()
  
const escpos = require('escpos');
 
// Select the adapter based on your printer type
const device  = new escpos.USB(6790,30084);
;
 
const printer = new escpos.Printer(device)

// var empresa='HRP Company'
// var direccionEmp='Carrera 6 calle 2 - Bogota'
// var telEmp='829-810-1110'
// var pageEmp='www.empresaejemplar.com'
// var emailEmp='empresa@ejemplar.com'


// totales
var subtotal='$133.750.00'
var descuento='$0.00'
var IVA='$25.750.00'
var total='$153.750.17'
var cosa='DIRECCION: Av. 64 NO 0-102 Las Merced'
console.log(total.length)

app.post('/',(req,res)=>{

  var body=req.body
device.open(function(){

    printer
    .font('B')
    .size(2,1)
    .align('ct')
    .text(body.empresa)
    .size(1,1)
    .feed()
    .text(body.direccion)
    .text(body.tel)
    .text(body.page)
    .text(body.email)
    .feed(2)
    .text('Factura de venta')
    .text('No. FV-6')
    .text('Regimen comun')
    .feed(2)
    .text('SEÑOR(ES): Alejandro Ample Alcayde')
    .text(cosa)
    .text('CIUDAD[ Barranquilla')
    .text('NIT/Cedul: 402-2222222-2')
    .text('Fecha de expedicion: 17/02/2017')
    .text('Fecha de vencimientow: 17/02/2017')
    .feed(2)
    .size(1,0)
    .text('Arenque ahumado (x1)            $23.750.00')
    .text('Arenque salado (x1)             $30.200.00')
    .text('Azucar negra malacca (x1)       $48.750.00')
    .text('Barras de pan de escocia (x1)   $31.750.00')
    .feed(2)
    .text('Subtotal                       '+subtotal)
    .text('Descuentos                           '+descuento)
    .text('IVA(19.00%)                     '+IVA)
    .text('Total                          '+total)
    .feed(5)
    .text('PRUEBA DE TERMINOS Y CONDICIONES')
    .text('--------------------------')
    .text(body.prueba)
    .cut('partial cut',10)
    .close()
  });


  
  
  // Rutas
  
  
      res.status(200).json({
          ok:true,
          mensaje:'prueba print'
      })
  
  })
  
  

  // escpos.Image.load(__dirname + '/img.jpg', function(image){

  //   device.open(function(){
  
  //     printer
  //     .align('ct')
  
  //     .image(image, 's7')
  //     .image(image, 'd7')
  //     .image(image, 's20')
  //     .image(image, 'd20')
  
  //     .raster(image)
  //     .raster(image, 'dw')
  //     .raster(image, 'dh')
  //     .raster(image, 'dwdh')
  
  //     .cut()
    
  //   });
  
  // });
  module.exports = app