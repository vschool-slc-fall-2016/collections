var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var itemSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "Owner",
        required: true
    },
    itemName: String,
    itemValue: Number,
    itemCondition: String,
    itemCollection: String,
    itemImageUrl: String
});

module.exports= mongoose.model('Item', itemSchema);