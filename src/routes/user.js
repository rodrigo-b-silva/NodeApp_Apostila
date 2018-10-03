//módulos
const express = require('express');
const routerUser = express.Router();

//importa e instancia o UsersController
const UsersController = require('../controllers/users');
const userController = new UsersController();

//definição para rota / de user, neste caso chama get de userController
routerUser.get('/', (req, res) => {
    userController.get(req, res);
});

module.exports = routerUser;