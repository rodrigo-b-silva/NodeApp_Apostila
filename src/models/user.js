const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nome: string,
    datanasc: Date,
    email: string,
    senha: string,
    mesa: Schema.Types.ObjectId
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;