//módulos
const express = require('express');
const routerUser = express.Router();

const User = require('../models/users');

//importa e instancia o UsersController
const UsersController = require('../controllers/users');
const userController = new UsersController(User);

//rota para lista de usuarios
routerUser.get('/', (req, res) => {
    userController.get(req, res);
});

//rota para cadastro de um usuario
routerUser.post('/', (req, res) => {
    userController.create(req, res);
});

//para para consulta de um usuario por id
routerUser.get('/:id', (req, res) => {
    userController.getById(req, res);
})

//rota para atualização de um usuario por id
routerUser.put('/:id', (req, res) => {
    userController.update(req, res);
})

//rota para remoção de um usuario
routerUser.delete('/:id', (req, res) => {
    userController.remove(req, res);
})
module.exports = routerUser;