var http = require('http');
console.log('Creando Servidor');
var server = http.createServer(function (req,res) {
    console.log('get localhost');
    res.writeHead(200,{"Content-Type":"application/json"});    
    res.end("Hello Node");
  });
  server.listen(3000);
  console.log('Servidor  Iniciado');