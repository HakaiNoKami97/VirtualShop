var express = require('express');
var customerController = require('../controllers/customerController');
var cauthenticate = require('../middlewares/cauthenticate');
var api = express.Router();
api.post('/crear_producto_carrito', cauthenticate.decodeToken, customerController.crear_producto_carrito);
module.exports = api;