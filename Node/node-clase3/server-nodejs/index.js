import { log } from 'console';
import http from 'http';

/* const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hola mundo desde servidor de node');
}); */

const obj = {
    id: 20,
    name: 'Juan',
    mail: 'juan@gmail.com'
}

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'application/json'});
    response.end(JSON.stringify(obj));
});


server.listen(3001, () => console.log('Servidor escuchando en puerto 3001'));