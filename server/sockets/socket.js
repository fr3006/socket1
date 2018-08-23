const { io } = require('../server');
// ojo siempre tk  importar con el modulo .exports

io.on('connection', (client) => {

    console.log('Usuario conectado');
   //envia informacion
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });



    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);////acuse recibido 2.
       client.broadcast.emit('enviarMensaje', data);
      //  client.emit('enviarMensaje', data);

      
        /* if (data.nombre) {
             callback({
                 resp: 'TODO SALIO BIEN!'
             });

         } else {
             callback({
                 resp: 'TODO SALIO MAL!!!!!!!!'
             });
         }*/



    });

});