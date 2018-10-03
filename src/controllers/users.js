//Define a class de Controle
class UsersController{

    get(req, res){
        return res.send([
            {
                name: 'usuario liverton',
                email: 'teste@teste.com',
                password: 1234,
                isActive: true
            }
        ]);
    }

}

module.exports = UsersController;