//módulos
const express = require('express');
const router = express.Router();

//importa rotas de user
const usersRoute = require('./user');

//defina rotas para /user
router.use('/users', usersRoute);

//define rota raiz
router.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = router;