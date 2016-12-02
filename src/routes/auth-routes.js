var express = require("express");
var authRoutes = express.Router();
var Owner = require('../models/owner');
var jwt = require('jsonwebtoken');
var config = require('../../config');

var test = "test";


authRoutes.route('/')
    .get(function(req, res) {

        res.send(test);

        // Owner.find({}, function(err, response) {
        //     if(err){
        //         res.status(500).send(err);
        //     } else{
        //         res.send(response);
        //     }
        // })
    });


module.exports = authRoutes;