var express = require("express");
var authRoutes = express.Router();
var Owner = require('../models/owner');
var jwt = require('jsonwebtoken');
var config = require('../../config');

// create a new user

authRoutes.route('/signup')
    .post(function(req, res) {
        Owner.find({username: req.body.username}, function(err, existingUsers) {
            if(err) {
                return res.status(500).send(err);
            } else if (existingUsers.length) {
                return res.status(401).json({success: false, message: 'Username is already in use'});
            } else {
                var newOwner = new Owner(req.body);
                newOwner.save(function(err, ownerObject) {
                    if(err) {
                        res.status(500).send(err);
                    } else{
                        res.send({user: ownerObject, message: "Successfully created a new user.", success: true});
                    }
                });
            }
        })
    });

// authenticate an existing user

authRoutes.route('/login')
    .post(function(req, res) {
        Owner.findOne({username: req.body.username, password: req.body.password}, function(err, owner) {
            if(err) {
                return res.status(500).send(err);
            } else if (!owner) {
                return res.status(403).send({success: false, message: "Username and/or password is not valid"});
            } else {
                var token = jwt.sign(owner.toObject(), config.secret, {expiresIn: "24h"});
                res.json({token: token, user: owner.toObject(), success: true, message: "Here is your token"});
            }
        })
    });


module.exports = authRoutes;