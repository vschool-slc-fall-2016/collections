var express = require('express');
var sharedRouter = express.Router();
var ItemObject = require('../models/item');

sharedRouter.route('/')
    .get(function(req, res) {
        ItemObject.find({}, function(err, collections) {
            if(err) {
                return res.status(500).send(err);
            } else {
                res.send(collections)
            }
        })
    });

module.exports = sharedRouter;