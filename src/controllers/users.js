//Define a class de Controle
class UsersController{

    constructor(User){
        this.User = User;
    }

    //busca todos os usuarios
    get(req, res){
        return this.User.find({})
            .then(users => res.send(users))
            .catch(err => res.status(400).send(err.message));
    }

    //busca um usuario a partir do ID
    getById(req, res){
        let id = req.params.id;
        return this.User.find({
            _id: id
        })
        //return this.User.findById(id)
        .then(user => res.send(user))
        .catch(err => res.status(400).send(err.message));
    }

    create(req, res){
        const newUser = new this.User(req.body);

        return newUser.save()
            .then(() => res.status(201).send(newUser))
            .catch(err => res.status(412).send(err.message));
    }

    update(req, res){
        const body = req.body;
        return this.User.findById(req.params.id)
            .then(user => { //o password só será recebido no update quando a intenção for alterar
                user.name = body.name,
                user.email = body.email,
                user.role = body.role,
                user.isActive = body.isActive
                if(body.password){
                    user.password = body.password;
                }
                return user.save();
            })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).send(err.message));
    }

    remove(req, res){
        return this.User.remove({ _id: req.params.id })
            .then(() => res.sendStatus(204))
            .catch(err => res.status(400).send(err.message));
    }
    
}

module.exports = UsersController;