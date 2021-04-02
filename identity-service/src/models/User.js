const mongoose = require('mongoose');
const normalize = require('normalize-mongoose');

const UserSchema = new mongoose.Schema({

});

module.exports = mongoose.model('user', UserSchema)