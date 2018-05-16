var thermal = require("node-thermal-printer");

thermal.init({
  type: 'epson',
  interface: '192.168.1.31/TM-T88III'
});

thermal.alignCenter();

thermal.println("Hello world");

thermal.printQR("https://github.com/Klemen1337/node-thermal-printer");

  thermal.cut();

  thermal.execute(function(err){
    if (err) {
      console.error("Print failed", err);
    } else {
     console.log("Print done");
    }
  });