const express = require('express');
const exec = require('child_process').execSync;
const mi_servidor = express();
mi_servidor.get('/', function (req, res) {
  var texto=exec("ping -c 1 google.com")+"";
  while (texto.indexOf("\n")!=-1)
    texto=texto.replace("\n","<br/>");
  res.send('<h1>Haciendo ping a Google</h1>'+texto);
});
mi_servidor.listen(8080);
console.log('Servidor escuchando en el puerto 8080');


