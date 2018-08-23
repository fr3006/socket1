// npm install
// nodemon - v si no install nodemon
//npm soket io
// sok io  se integran con express(express trabajo con http)
//http://localhost:3000/socket.io/socket.io.js
const express = require('express');
const socketIO = require('socket.io'); 
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');//midelwere carpeta publica para que todos accedan ella
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});