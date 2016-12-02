var mongoose = require('mongoose');

var ownerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true
    },
    lastName: {
        type: String,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Owner', ownerSchema);