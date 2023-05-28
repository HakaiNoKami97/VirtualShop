var express = require('express');
var ventasController = require('../controllers/ventasController');
var authenticate = require('../middlewares/authenticate');
var api = express.Router();
api.get('/obtener_ventas_admin/:inicio/:hasta', authenticate.decodeToken, ventasController.obtener_ventas_admin);
module.exports = api;