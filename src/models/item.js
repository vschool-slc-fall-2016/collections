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
    itemValue: String,
    itemCondition: String,
    itemLocation: String,
    itemImageUrl: String
});

module.exports= mongoose.model('Item', itemSchema);