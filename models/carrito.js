var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarritoSchema = Schema({
    producto : {type: Schema.ObjectId, ref: 'producto', requiered: true},
    variedad : {type: Schema.ObjectId, ref: 'producto', requiered: true},
    cantidad : {type: Number, requiered: true},
    cliente : {type: Schema.ObjectId, ref: 'producto', requiered: true},
    createdAt : {type: Date, default: Date.now}
});
module.exports = mongoose.model('carrito', CarritoSchema);