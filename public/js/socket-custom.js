// npm install
// nodemon - v si no install nodemon
//npm soket io
// sok io  se integran con express(express trabajo con http)
//http://localhost:3000/socket.io/socket.io.js
//socket.emit('enviar mensaje', { usuario: 'pedro', mensaje: 'saludos'});

var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información de manera privada al servidor
socket.emit('enviarMensaje', {
    usuario: 'dany',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server!!: ', resp); 
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje); //acuse recibido 1. 'todo solio mal o bien' comentando el nombre de usuario al otro lado dira que mal!!!

}); 