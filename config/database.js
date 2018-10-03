const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const config = require('config');

process.env.PORT = process.env.PORT || 27017;

//const uri = process.env.MONGODB_URL || `mongodb://localhost:${process.env.PORT}/teste`;
const uri = config.get('database.mongoUrl');

const connect = () => mongoose.connect(uri);

module.exports = {
    connect
};