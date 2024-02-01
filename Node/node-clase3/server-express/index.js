import express from 'express';

const server = express();

const user = {
    id: 23,
    name: 'Pepa',
    mail: 'pepa@gmail.com'
};

server.get('/', (req,res) => {
    res.send({
        message: 'Hola mundo desde express'
    })
});


server.get('/user', (req,res) => {
    res.send(user);
});

server.listen(3001, () => console.log('Servidor escuchando en puerto 3001'));