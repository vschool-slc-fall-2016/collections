var express = require('express');
var itemRouter = express.Router();
var ItemObject = require('../models/item');

itemRouter.route('/')
    .get(function (req, res) {
        ItemObject.find({user: req.user._id}, function (err, items) {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(items)
            }
        })
    })

    .post(function (req, res) {
        var item = new ItemObject(req.body);
        item.user = req.user;
        item.save(function (err, newItem) {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(newItem);
            }
        });
    })

    .delete(function (req, res) {
        ItemObject.findOneAndRemove({user: req.user._id}, function (err, deletedItem) {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(deletedItem);
            }
        });
    });

itemRouter.route('/:itemId')
    .get(function (req, res) {
        ItemObject.findOne({_id: req.params.itemId, user: req.user._id}, function (err, item) {
            if (err) {
                return res.status(500).send(err);
            } else if (!item) {
                return res.status(500).send(err);
            } else {
                res.send(item);
            }
        });
    })
    .put(function (req, res) {
        ItemObject.findOneAndUpdate(
            {_id: req.params.itemId, user: req.user._id},
            req.body,
            {new: true},
            function (err, item) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(item);
                }
            }
        );
    })
    .delete(function(req, res) {
        ItemObject.findOneAndRemove(
            {_id: req.params.itemId, user: req.user._id},
            function(err, deletedItem) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send('Your item was deleted');
                }
            });
    });

module.exports = itemRouter;