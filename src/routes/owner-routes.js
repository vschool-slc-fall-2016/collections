var express = require('express');
var ownerRouter = express.Router();
var Owner = require('../models/owner');

ownerRouter.route('/:id')
    .get(function (req, res) {
        Owner.findOne({_id: req.params.id}, function(err, owner) {
            if(err) {
                return res.status(500).send(err);
            } else {
                res.send(owner);
            }
        })
    })
    .put(function(req, res) {
        Owner.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, updatedOwner) {
            if(err) {
                return res.status(500).send(err);
            } else {
                res.send(updatedOwner);
            }
        })
    });

module.exports = ownerRouter;